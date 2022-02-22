import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { Body, Widget } from 'presentation/components'
import { styles } from './styles'

export const BreathesAmount = (props: TouchableOpacityProps) => (
  <TouchableOpacity {...props}>
    <Widget style={styles.container}>
      <Body style={styles.amount}>
        30
      </Body>
    </Widget>
  </TouchableOpacity>
)
