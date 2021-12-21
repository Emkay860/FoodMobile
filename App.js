import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen';
import SignIn from './src/screens/SignIn';
import Register from './src/screens/Register';
import BottomNavBar from './src/screens/components/BottomNavBar';
import MenuDetail from './src/screens/components/MenuDetail';
import CreateMenuItem from './src/screens/components/CreateMenuItem';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Create-Menu-Item">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={BottomNavBar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Menu-Detail"
            component={MenuDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Create-Menu-Item"
            component={CreateMenuItem}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
