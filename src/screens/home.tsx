import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import Onions from "../components/main/Onions";
import { getFormattedDate } from '../utils/dateUtils';
import Button from "../components/main/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { HomeStackParamList } from "./MainTab";
import { useMain } from "../hooks/useMain";

export function Home() {
  const { mainData, setOnionName } = useMain();
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const [onionName, setOnionNameState] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleNameSubmit = async () => {
    if (nameInput.trim()) {
      setIsLoading(true);
      try {
        await setOnionName(nameInput);
        setOnionNameState(true); 
      } catch (error) {
        console.error('양파 이름 설정 중 오류 발생:', error);
        alert('양파 이름 설정 중 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    } else {
      alert('양파의 이름을 입력해 주세요.');
    }
  };

  const handleButtonPress = () => {
    navigation.navigate('Note', { type: 'negative' });
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.homeStyle}>
            <Text style={styles.date}>{getFormattedDate()}</Text>
            <Onions data={mainData} onionName={onionName} />
            {!onionName ? (
              <View style={styles.nameArea}>
                <TextInput
                  style={styles.input}
                  placeholder="양파의 이름을 지어주세요"
                  value={nameInput}
                  onChangeText={setNameInput}
                />
                <Button onPress={handleNameSubmit} disabled={isLoading}>
                  {isLoading ? '저장 중...' : '이름 저장'}
                </Button>
              </View>
            ) : (
              <Button onPress={handleButtonPress}>
                {mainData?.is_spoken ? '이미 양파에게\n말했어요' : '양파에게 말하기'}
              </Button>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  homeStyle: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  date: {
    marginVertical: 70,
    marginBottom: 40,
    fontSize: 20,
  },
  nameArea: {
    alignItems: 'center',
    gap: 10,
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 200,
  },
});
