import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { styles } from './styles'
import { WidgetProps } from './WidgetProps'

export const Widget = (props: WidgetProps) => (
  <LinearGradient
    {...props}
    colors={['#5ce1e0', '#25bcda']}
    locations={[0.4, 1]}
    style={[styles.gradient, props.style]}
  >
    {props.children}
  </LinearGradient>
)
