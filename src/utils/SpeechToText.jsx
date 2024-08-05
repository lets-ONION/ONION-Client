import Voice from '@react-native-voice/voice';
import { useEffect, useState } from 'react';
import { View, Button, Text, StyleSheet } from "react-native";

export default function SpeechToText() {
    const [started, setStarted] = useState(false);
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        }
    }, [])

    const startSpeech = async () => {
        await Voice.start("ko-KR");
        setStarted(true);
    };

    const stopSpeech = async () => {
        await Voice.stop();
        setStarted(false);
    };

    const onSpeechResults = (results) => {
        setResults(results.value);
    };

    const onSpeechError = (error) => {
        console.log('Speech recognition error:', error);
        if (error && error.error) {
            console.log('Error Code:', error.error.code);
            console.log('Error Message:', error.error.message);
        }
    };
    console.log('음성 텍스트', results)

    return (
        <View>
            {!started ? <Button title='Start Speech' onPress={startSpeech} /> : undefined}
            {started ? <Button title='Stop Speech' onPress={stopSpeech} /> : undefined}
            <Text>{results[0]}</Text>
        </View>
    )
}