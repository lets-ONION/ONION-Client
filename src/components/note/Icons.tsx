import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, Button } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Animated } from 'react-native';
import { TextModal } from './TextModal';
import { useMain } from '../../hooks/useMain';

interface Props {
    type: "positive" | "negative";
    micIcon: 'mic-circle-outline' | 'mic-circle';
    setMicIcon: React.Dispatch<React.SetStateAction<'mic-circle-outline' | 'mic-circle'>>;
    setCheckFailed: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
    isSubmit: boolean;
}

const Icons: React.FC<Props> = ({ type, micIcon, setMicIcon, setCheckFailed, setIsSubmit, isSubmit }) => {
    const { NotePositive, WaterPositive, WaterNegative, CheckPositive, CheckNegative } = useMain();
    const [checkResult, setCheckResult] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);
    const [enabled, setEnabled] = useState(false);

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
        }

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
            } else {
                result = await CheckNegative(text);
            }
            if (result) {
                handleResponseStatus(result.data, text);
            }
        } catch (error) {
            console.error('handleModalSubmit Error:', error);
        }
    };

    const handleResponseStatus = (status: string, text: string) => {
        if (status === 'POSITIVE') {
            if (type === 'positive') {
                NotePositive(text);
                WaterPositive();
            } else {
                WaterNegative();
            }
        } else {
            setCheckFailed(true);
        }
    };

    return (
        <View style={styles.icons}>
            <Animated.View style={{ transform: [{ translateX: animationMic }] }}>
                <TouchableOpacity style={styles.icon} onPress={() => handlePress("mic")} disabled={isSubmit}>
                    <Ionicons name={micIcon} size={70} color="black" />
                    <Text style={styles.text}>
                        {micIcon === 'mic-circle' ?
                            '당신의 이야기를\n듣고 있습니다.' :
                            (enabled ? '마이크를 누른 후, 당신의\n이야기를 들려주세요' : '말로 하기')}
                    </Text>
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