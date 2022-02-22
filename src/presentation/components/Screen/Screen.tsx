import React from 'react'
import { View, ViewProps, useColorScheme } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { styles } from './styles'
import { useThemeColors } from 'presentation/assets'

export const Screen = (props: ViewProps) => {
  const colorScheme = useColorScheme()
  const colors = useThemeColors()

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

  const renderDarkModeScreen = () => (
    <View
      {...props}
      style={[styles.screen, props.style, { backgroundColor: colors.screen }]}
    />
  )

  return colorScheme === 'light'
    ? renderGradientedScreen()
    : renderDarkModeScreen()
}
