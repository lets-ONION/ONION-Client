import { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text } from "react-native";

interface Props {
    type: "positive" | "negative";
    checkFailed?: boolean;
    isSubmit?: boolean;
    isWatered?: boolean;
    posOnionName?: string;
    negOnionName?: string;
}

const TextBalloon = ({ type, checkFailed, isSubmit, isWatered, posOnionName, negOnionName }: Props) => {
    console.log(posOnionName, negOnionName)
    const posOnion = posOnionName || "럭키";
    const negOnion = negOnionName || "법규";
    let message: string;

    if (isWatered) {
        message = `${type === 'negative' ? negOnion : posOnion} 양파가 자라납니다!`;
    } else if (checkFailed) {
        message = "죄송해요. 양파가\n잘 이해되지 않는대요.";
    } else if (isSubmit) {
        message = `${type === 'negative' ? negOnion : posOnion} 양파가 사용자님의\n이야기를 듣는 중이예요...`;
    } else if (type === "positive") {
        message = `오늘 좋은 일이 있으셨나요?\n${posOnion} 양파에게\n말해보세요!`;
    } else if (type === "negative") {
        message = `안 좋은 일이 있으셨나요?\n${negOnion} 양파에게\n풀어보세요.`;
    } else {
        message = '';
    }

    return (
        <View style={styles.TextBalloonStyle}>
            <Text style={styles.text}>
                {message}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    TextBalloonStyle: {
        borderWidth: 1,
        padding: 20,
        borderRadius: 20,
        width: 250
    },
    text: {
        textAlign: 'center',
        fontSize: 16
    },
});

export default TextBalloon;
