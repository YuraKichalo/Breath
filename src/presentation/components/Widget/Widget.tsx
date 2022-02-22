import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { styles } from './styles'
import { WidgetProps } from './WidgetProps'
import { useThemeColors } from 'presentation/assets'

export const Widget = (props: WidgetProps) => {
  const colors = useThemeColors()

  return (
    <LinearGradient
      {...props}
      colors={[colors.widgetFirstBackground, colors.widgetSecondBackground]}
      locations={[0.4, 1]}
      style={[styles.gradient, props.style]}
    >
      {props.children}
    </LinearGradient>
  )
}
