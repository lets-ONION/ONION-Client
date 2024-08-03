import { View, Image, StyleSheet, Text } from "react-native";

interface Props {
    type: "positive" | "negative";
    micIcon: 'mic-circle-outline' | 'mic-circle';
}

const TextBalloon = ({ type, micIcon }: Props) => {
    let message: string;

    if (type === "positive") {
        message = micIcon === 'mic-circle' ? 
            "긍정 양파가 사용자님의\n이야기을 듣는 중이예요..." :
            "그럼에도 좋은 일이 있었나요?\n긍정 양파에게 말해보세요!";
    } else {
        message = micIcon === 'mic-circle' ?
            "부정 양파가 사용자님의\n이야기을 듣는 중이예요..." :
            "안 좋은 일이 있으셨나요?\n부정 양파에게 풀어보세요.";
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
