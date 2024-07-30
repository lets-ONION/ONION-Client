import {View} from 'react-native';
import PropTypes from 'prop-types';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/login';

const Stack = createNativeStackNavigator();

const AuthStackNav = () => {


    return (
      <Stack.Navigator
        initialRouteName="SignInScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignInScreen" component={Login} />
      </Stack.Navigator>
    );
  };

  AuthStackNav.propTypes = {
    USER: PropTypes.object,
  };

  export default AuthStackNav;