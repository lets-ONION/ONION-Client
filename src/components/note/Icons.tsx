import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, Button } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Animated } from 'react-native';
import { TextModal } from './TextModal';
import { useMain } from '../../hooks/useMain';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeStackParamList } from '../../screens/MainTab';
import Voice from '@react-native-voice/voice';
import { SpeechError, SpeechResults } from '../../models/models';

interface Props {
    type: "positive" | "negative";
    micIcon: 'mic-circle-outline' | 'mic-circle';
    setMicIcon: React.Dispatch<React.SetStateAction<'mic-circle-outline' | 'mic-circle'>>;
    setCheckFailed: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSubmitSpeak: React.Dispatch<React.SetStateAction<boolean>>;
    setIsNegative: React.Dispatch<React.SetStateAction<boolean>>;
    isSubmit: boolean;
}

const Icons: React.FC<Props> = ({ type, micIcon, setMicIcon, setCheckFailed,
    setIsSubmit, isSubmit, setIsSubmitSpeak, setIsNegative }) => {
    const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
    const { NotePositive, CheckPositive, CheckNegative } = useMain();
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);
    const [enabled, setEnabled] = useState(false);
    const [started, setStarted] = useState<boolean>(false);
    const [results, setResults] = useState<string[]>([]);

    const animation = useRef(new Animated.Value(1)).current;
    const animationMic = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animationMic, {
            toValue: enabled ? 60 : 0,
            useNativeDriver: true,
        }).start();
    }, [animationMic, enabled]);

    const handlePress = (iconName: string) => {
        if (enabled && iconName === "mic") {
            setMicIcon(micIcon === 'mic-circle-outline' ? 'mic-circle' : 'mic-circle-outline')
            if (micIcon === 'mic-circle-outline') {
                startSpeech();
            } else if (micIcon === 'mic-circle') {
                stopSpeech();
                setIsSubmitSpeak(true);
                handleModalSubmit(results[0]);
            }
        };

        if (iconName === "mic" && selected !== "mic") {
            Animated.timing(animation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                setSelected(iconName);
            });
            setEnabled(!enabled)
        } else if (iconName === "write") {
            setModalVisible(true);
        }
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };

    const handleModalSubmit = async (text: string) => {
        try {
            setIsSubmit(true);
            let result;
            if (type === 'positive') {
                result = await CheckPositive(text);
            } else if (type === 'negative') {
                result = await CheckNegative(text);
            }
            if (result) {
                handleResponseStatus(result, text);
            }
        } catch (error) {
            console.error('handleModalSubmit Error:', error);
            setCheckFailed(true);
        }
    };

    const handleResponseStatus = (status: string, text: string) => {
        if (type === 'positive') {
            switch (status) {
                case 'POSITIVE':
                    NotePositive(text);
                    setTimeout(() => {
                        setEnabled(!enabled);
                        navigation.navigate('Watering', { type });
                    }, 3000);
                    break;
                case 'NEGATIVE':
                    setCheckFailed(true);
                    setIsNegative(true);
                    break;
                case 'INVALID':
                    setCheckFailed(true);
                    break;
                default:
                    setCheckFailed(true);
                    break;
            }
        } else if (type === 'negative') {
            switch (status) {
                case 'VALID':
                    setTimeout(() => {
                        setEnabled(false);
                        navigation.navigate('Watering', { type });
                        setIsSubmit(false);
                    }, 3000);
                    break;
                case 'INVALID':
                    setCheckFailed(true);
                    break;
                case 'FAIL':
                    setCheckFailed(true);
                    break;
                default:
                    setCheckFailed(true);
                    break;
            }
        }
    };

    useEffect(() => {
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        }
    }, []);

    const startSpeech = async () => {
        await Voice.start("ko-KR");
        setStarted(true);
    };

    const stopSpeech = async () => {
        await Voice.stop();
        setStarted(false);
    };

    const onSpeechResults = (results: SpeechResults) => {
        setResults(results.value || []);
    };

    const onSpeechError = (error: SpeechError) => {
        console.log('Speech recognition error:', error);
        if (error && error.error) {
            console.log('Error Code:', error.error.code);
            console.log('Error Message:', error.error.message);
        }
    };

    return (
        <View style={styles.icons}>
            <Animated.View style={{ transform: [{ translateX: animationMic }] }}>
                <TouchableOpacity style={styles.icon} onPress={() => handlePress("mic")} disabled={isSubmit}>
                    <Ionicons name={micIcon} size={70} color="black" />
                    <Text style={styles.text}>
                        {micIcon === 'mic-circle' ?
                            '이야기를\n듣고 있습니다' :
                            (enabled ? '마이크를 누른 후,\n이야기를 들려주세요' : '말로 하기')}
                    </Text>
                    {/* <Text>{results[0]}</Text> */}
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.icon, { opacity: animation }]}>
                <TouchableOpacity onPress={() => handlePress("write")} disabled={isSubmit}>
                    <Ionicons name="create-outline" size={67} color="black" />
                    <Text>글로 쓰기</Text>
                </TouchableOpacity>
            </Animated.View>
            <TextModal
                visible={modalVisible}
                onClose={handleModalClose}
                onSubmit={handleModalSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    icons: {
        flexDirection: 'row',
        gap: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        width: 150,
        marginTop: 5
    }
});

export default Icons;