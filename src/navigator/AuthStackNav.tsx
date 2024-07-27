import {View} from 'react-native';
import PropTypes from 'prop-types';
 
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../screens/SigninScreen';

const Stack = createNativeStackNavigator();

const AuthStackNav = () => {

  
    return (
      <Stack.Navigator
        initialRouteName="SignInScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
      </Stack.Navigator>
    );
  };
  
  AuthStackNav.propTypes = {
    USER: PropTypes.object,
  };
  
  export default AuthStackNav;