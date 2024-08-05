import { View, StyleSheet } from "react-native";
import TextBalloon from "../components/note/TextBalloon";
import Icons from "../components/note/Icons";
import React, { useEffect, useState } from 'react';
import Onions from "../components/note/Onions";
import Button from "../components/main/Button";
import { Alert } from "../components/common/Alert";
import { useMain } from "../hooks/useMain";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { HomeStackParamList } from "./MainTab";
import { WaterResult } from "../models/models";

type NoteScreenRouteProp = RouteProp<HomeStackParamList, 'Note'>;

export function Note() {
    const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
    const { mainData, WaterPositive } = useMain();
    const route = useRoute<NoteScreenRouteProp>();
    const [micIcon, setMicIcon] = useState<'mic-circle-outline' | 'mic-circle'>('mic-circle-outline');
    const [speak, setSpeak] = useState(false);
    const [type, setType] = useState<'negative' | 'positive'>('negative');
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [isWaterAlertVisible, setWaterAlertVisible] = useState(false);
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const [checkFailed, setCheckFailed] = useState<boolean>(false);

    useEffect(() => {
        if (route.params?.type) {
            setType(route.params.type);
        }
    }, [route.params?.type]);

    const handleSkipPress = () => {
        setAlertVisible(true);
    };

    const handleConfirm = () => {
        setSpeak(true);
        setType('positive');
        setAlertVisible(false);
    };

    const handleCancel = () => {
        setAlertVisible(false);
    };

    const handleWaterPositivePress = () => {
        setWaterAlertVisible(true);
    };

    const handleWaterConfirm = async () => {
        setIsSubmit(true);
        setTimeout(() => {
            navigation.navigate('Watering', { type });
        }, 2000);
        setWaterAlertVisible(false);
        await WaterPositive();
    };

    const message = "오늘은 럭키 양파에게만\n물을 주시겠어요?";

    const renderActionButtons = () => {
        if (checkFailed === true) {
            return (
                <>
                    <Button onPress={() => { setCheckFailed(false); setSpeak(true); setIsSubmit(false) }}>다시 말하기</Button>
                    {type === 'positive' ? (
                        <Button onPress={handleWaterPositivePress}>아니야, 럭키 기운이 맞아!</Button>
                    ) : (
                        <Button onPress={() => handleSkipPress()}>럭키 양파에게만 물주기</Button>
                    )}
                </>
            );
        } else {
            return (
                <Icons
                    type={type}
                    micIcon={micIcon}
                    setMicIcon={setMicIcon}
                    setCheckFailed={setCheckFailed}
                    setIsSubmit={setIsSubmit}
                    isSubmit={isSubmit}
                />
            );
        }
    };

    return (
        <View style={styles.noteStyle}>
            <TextBalloon type={type} 
            checkFailed={checkFailed} 
            isSubmit={isSubmit} 
            posOnionName={mainData?.pos_onion.name}
            negOnionName={mainData?.neg_onion.name} />
            <Onions type={type} />
            {speak ? renderActionButtons() : (
                <>
                    <Button onPress={() => setSpeak(true)}>말하기</Button>
                    <Button onPress={handleSkipPress}>건너뛰기</Button>
                </>
            )}
            <Alert
                visible={isAlertVisible}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                text={message}
            />
            <Alert
                visible={isWaterAlertVisible}
                onConfirm={handleWaterConfirm}
                onCancel={() => setWaterAlertVisible(false)}
                text="물을 주시겠습니까?"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    noteStyle: {
        flex: 1,
        padding: 80,
        paddingTop: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    onion: {
        width: 200,
        height: 330,
        marginBottom: 50
    },
});