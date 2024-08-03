import React from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

interface AlertProps {
    visible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    text: string;
}

const CustomButton = ({ onPress, title }: { onPress: () => void; title: string }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export function Alert({ visible, onConfirm, onCancel, text }: AlertProps) {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onCancel}
        >
            <View style={styles.overlay}>
                <View style={styles.alertContainer}>
                    <Text style={styles.alertText}>{text}</Text>
                    <View style={styles.buttonContainer}>
                        <CustomButton title="예" onPress={onConfirm} />
                        <CustomButton title="아니오" onPress={onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alertContainer: {
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 20,
        width: '80%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    alertText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        width: '100%',
    },
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
