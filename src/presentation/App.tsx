import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import * as Screens from 'presentation/screens'
import { RootStackParamList } from './RootStackParamList'
import { Routes } from './Routes'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={Routes.Dashboard}
        component={Screens.Dashboard}
      />
    </Stack.Navigator>
  </NavigationContainer>
)
