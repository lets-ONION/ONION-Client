import { View, StyleSheet, Image } from "react-native";
import TextBalloon from "../components/note/TextBalloon";
import Icons from "../components/note/Icons";

export function Note() {
    const negative1 = require("../../assets/negative/1.png");

    return (
        <View style={styles.noteStyle}>
            <TextBalloon type="negative" speaking={false} />
            <Image source={negative1} style={styles.onion} />
            <Icons />
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