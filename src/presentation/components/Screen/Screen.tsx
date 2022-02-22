import React from 'react'
import { View, ViewProps, useColorScheme } from 'react-native'

import { styles } from './styles'
import LinearGradient from 'react-native-linear-gradient'

export const Screen = (props: ViewProps) => {
  const colorScheme = useColorScheme()

  const renderGradientedScreen = () => (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFFFFF', '#D9FAF8', '#94E9EE']}
        locations={[0, 0.5, 1]}
        style={styles.topGradient}
      />
      <View style={styles.center} />
      <LinearGradient
        colors={['#94E9EE', '#D9FAF8', '#FFFFFF']}
        locations={[0, 0.7, 1]}
        style={styles.bottomGradient}
      />
      <View
        {...props}
        style={[styles.contentContainer, props.style]}
      >
        {props.children}
      </View>
    </View>
  )

  const renderRegularScreen = () => (
    <View
      {...props}
      style={[styles.screen, props.style]}
    />
  )

  return colorScheme === 'light'
    ? renderGradientedScreen()
    : renderRegularScreen()
}
