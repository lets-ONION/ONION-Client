import React from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CustomButton from '../common/CustomButton';

interface TextModalProps {
    visible: boolean;
    onClose: () => void;
    onSubmit: (text: string) => void;
}

export function TextModal({ visible, onClose, onSubmit }: TextModalProps) {
    const [inputText, setInputText] = React.useState('');
    const [warningMessage, setWarningMessage] = React.useState('');

    const handleSubmit = () => {
        if (inputText.trim() === '') {
            setWarningMessage('텍스트를 입력해주세요.');
            return;
        }
        onSubmit(inputText);
        setInputText('');
        onClose();
    };

    const handleClose = () => {
        setInputText('');
        onClose();
    };

    const handleTouchOutside = () => {
        Keyboard.dismiss();
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={handleClose}
        >
            <TouchableWithoutFeedback onPress={handleTouchOutside}>
                <View style={styles.overlay}>
                    <View style={styles.modalContainer}>
                        <TextInput
                            style={styles.input}
                            value={inputText}
                            onChangeText={setInputText}
                            placeholder="당신의 이야기를 작성해주세요"
                            multiline
                            textAlignVertical="top"
                        />
                        {warningMessage ? <Text style={styles.warning}>{warningMessage}</Text> : null}
                        <View style={styles.buttonContainer}>
                            <CustomButton title="제출" onPress={handleSubmit} />
                            <CustomButton title="취소" onPress={handleClose} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
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
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#8181817f',
        borderRadius: 10,
        width: '100%',
        height: 150,
        padding: 15,
        marginBottom: 20,
    },
    warning: {
        color: 'red',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
        width: '100%',
    },
});
