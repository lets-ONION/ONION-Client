import { View, StyleSheet } from "react-native";
import TextBalloon from "../components/note/TextBalloon";
import Icons from "../components/note/Icons";
import React, { useState } from 'react';
import Onions from "../components/note/Onions";
import Button from "../components/main/Button";
import { Alert } from "../components/common/Alert";
import { waterPositive } from "../api/main.api";
import { useMain } from "../hooks/useMain";

export function Note() {
    const { WaterPositive } = useMain();
    const [micIcon, setMicIcon] = useState<'mic-circle-outline' | 'mic-circle'>('mic-circle-outline');
    const [speak, setSpeak] = useState(false);
    const [type, setType] = useState<'negative' | 'positive'>('negative');
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const [checkFailed, setCheckFailed] = useState<boolean>(true);

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

    const message = "오늘은 럭키 양파에게만\n물을 주시겠어요?";

    const renderActionButtons = () => {
        if (checkFailed) {
            return (
                <>
                    <Button onPress={() => {setCheckFailed(false); setSpeak(true);}}>다시 말하기</Button>
                    {type === 'positive' ? (
                        <Button onPress={() => WaterPositive()}>아니야, 럭키 기운이 맞아!</Button>
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
            <TextBalloon type={type} checkFailed={checkFailed} isSubmit={isSubmit} />
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