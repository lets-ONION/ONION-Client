import React from 'react';
import { Text, TextProps, StyleProp, TextStyle } from 'react-native';

interface MainTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
}

const MainText: React.FC<MainTextProps> = ({ style, ...rest }) => {
  const customStyle: TextStyle = {
    fontFamily: '온글잎 류류체',
    color: '#000000',
    fontSize: 20,
  };

  return <Text style={[customStyle, style]} {...rest} />;
};

export default MainText;
