import { View, StyleSheet, Image } from "react-native";
import TextBalloon from "../components/note/TextBalloon";
import Icons from "../components/note/Icons";
import React, { useState } from 'react';
import Onions from "../components/note/Onions";

export function Note() {
    const positive1 = require("../../assets/positive/1.png");
    const negative1 = require("../../assets/negative/1.png");
    const [micIcon, setMicIcon] = useState<'mic-circle-outline' | 'mic-circle'>('mic-circle-outline');

    return (
        <View style={styles.noteStyle}>
            <TextBalloon type="negative" micIcon={micIcon} />
            <Onions type="negative" />
            <Icons micIcon={micIcon} setMicIcon={setMicIcon}/>
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