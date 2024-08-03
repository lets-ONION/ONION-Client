import { View, StyleSheet } from "react-native";
import TextBalloon from "../components/note/TextBalloon";
import Icons from "../components/note/Icons";
import React, { useState } from 'react';
import Onions from "../components/note/Onions";
import Button from "../components/main/Button";
import { Alert } from "../components/common/Alert";

export function Note() {
    const [micIcon, setMicIcon] = useState<'mic-circle-outline' | 'mic-circle'>('mic-circle-outline');
    const [speak, setSpeak] = useState(false);
    const [type, setType] = useState<'negative' | 'positive'>('negative');
    const [isAlertVisible, setAlertVisible] = useState(false);

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

    const handleCloseAlert = () => {
        setAlertVisible(false);
    };

    const message = "오늘은 긍정양파에게만\n물을 주시겠어요?";

    return (
        <View style={styles.noteStyle}>
            <TextBalloon type={type} micIcon={micIcon} />
            <Onions type={type} />
            {speak ? <Icons micIcon={micIcon} setMicIcon={setMicIcon} /> :
                <>
                    <Button onPress={() => setSpeak(true)}>말하기</Button>
                    <Button onPress={handleSkipPress}>건너뛰기</Button>
                </>
            }
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