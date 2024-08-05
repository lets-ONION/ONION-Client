import { View, StyleSheet, Animated, Text } from "react-native";
import TextBalloon from "../components/note/TextBalloon";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { HomeStackParamList } from "./MainTab";
import Button from "../components/main/Button";
import { growOnion, waterNegative, waterPositive } from "../api/main.api";
import { GrowResult, WaterResult } from "../models/models";
import { useEffect, useRef, useState } from "react";

type WateringScreenRouteProp = RouteProp<HomeStackParamList, 'Watering'>;

const Watering: React.FC = () => {
    const [waterResult, setWaterResult] = useState<WaterResult>();
    const [growResult, setGrowResult] = useState<GrowResult>();
    const [showGrowResult, setShowGrowResult] = useState<boolean>(false);
    const route = useRoute<WateringScreenRouteProp>();
    const { type } = route.params;
    const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const fetchWaterResult = async () => {
            if (type === 'positive') {
                try {
                    const response = await waterPositive();
                    setWaterResult(response.data);
                    console.log(response.data)
                } catch (error) {
                    console.error('Error fetching positive water result', error);
                }
            } else if (type === 'negative') {
                try {
                    const response = await waterNegative();
                    setWaterResult(response);
                    console.log(response.data)
                } catch (error) {
                    console.error('Error fetching negative water result', error);
                }
            }
        };

        fetchWaterResult();
        fadeIn();
    }, [type]);

    const handleNotePress = () => {
        navigation.navigate('Note', { type: 'positive' });
    };

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    };

    const handleGrowthPress = async () => {
        console.log('성장하기 버튼이 눌렸습니다.');
        try {
            let response;
            if (type === 'negative') {
                response = await growOnion(0);
            } else {
                response = await growOnion(1);
            }
            setGrowResult(response.data);
            setShowGrowResult(true);
            fadeIn();
            console.log('성장 결과:', response);
        } catch (error) {
            console.error('Error growing onion', error);
        }
    };

    const handleGoHome = () => {
        navigation.navigate('Home')
    };

    return (
        <View style={styles.wateringStyle}>
            <TextBalloon type={type} isWatered={true} />
            <Animated.Image
                source={{ uri: showGrowResult ? growResult?.image_url : waterResult?.image_url }}
                style={[styles.onionStyle, { opacity: fadeAnim }]}
                resizeMode="contain"
            />
            {growResult ? (
                <Text style={styles.onionName}>{growResult.onion_type}</Text>
            ) : null}
            {waterResult?.is_evolvable && !showGrowResult ? (
                <Button onPress={handleGrowthPress}>
                    성장하기
                </Button>
            ) : type === 'negative' ? (
                <Button onPress={handleNotePress}>
                    럭키 양파에게{'\n'}말하러 가기
                </Button>
            ) : (
                <Button onPress={handleGoHome}>
                    홈으로 가기
                </Button>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    wateringStyle: {
        flex: 1,
        padding: 80,
        paddingTop: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    onionStyle: {
        marginBottom: 40,
        width: '100%',
        aspectRatio: 1,
        marginTop: 80
    },
    onionName: {
        marginBottom: 50
    }
});

export default Watering;