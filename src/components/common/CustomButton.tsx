import { TouchableOpacity, StyleSheet, Text } from "react-native";

const CustomButton = ({ onPress, title }: { onPress: () => void; title: string }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        backgroundColor: '#cad3ff',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
    },
});

export default CustomButton;