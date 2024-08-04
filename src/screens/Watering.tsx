import { View, StyleSheet, Image, Text } from "react-native";
import TextBalloon from "../components/note/TextBalloon";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { HomeStackParamList } from "./MainTab";
import { useMain } from "../hooks/useMain";
import Button from "../components/main/Button";

type WateringScreenRouteProp = RouteProp<HomeStackParamList, 'Watering'>;

const Watering: React.FC = () => {
    const { waterResult } = useMain();
    const route = useRoute<WateringScreenRouteProp>();
    const { type } = route.params;
    const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

    console.log('waterResult', waterResult)

    const handleNotePress = () => {
        navigation.navigate('Note', { type: 'positive' });
    };

    return (
        <View style={styles.wateringStyle}>
            <TextBalloon type={type} isWatered={true} />
            <Image source={{ uri: type === 'positive' ? waterResult?.image_url : waterResult?.image_url }} style={styles.onionStyle} />
            {type === 'negative' ? (
                <Button onPress={handleNotePress}>
                    긍정 양파에게{'\n'}말하러 가기
                </Button>
            ) : (
                <Button onPress={() => navigation.navigate('Home')}>
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
        width: 210,
        height: 340,
    }
});

export default Watering;