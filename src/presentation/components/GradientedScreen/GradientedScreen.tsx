import React from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { GradientedScreenProps } from './GradientedScreenProps'
import { styles } from './styles'
import { Screen } from 'presentation/components'

export const GradientedScreen = (props: GradientedScreenProps) => (
  <Screen>
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
  </Screen>
)
