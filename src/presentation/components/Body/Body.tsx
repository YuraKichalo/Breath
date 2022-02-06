import React from 'react'
import { Text, TextProps } from 'react-native'

import { styles } from './styles'

export const Body = (props: TextProps) => (
  <Text
    {...props}
    style={[styles.text, props.style]}
  />
)
