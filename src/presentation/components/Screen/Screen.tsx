import React from 'react'
import { View, ViewProps } from 'react-native'

import { styles } from './styles'

export const Screen = (props: ViewProps) => (
  <View
    {...props}
    style={[styles.screen, props.style]}
  />
)
