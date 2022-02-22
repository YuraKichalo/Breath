import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Body, Widget } from 'presentation/components'
import { styles } from './styles'
import { Strings } from 'presentation/assets'

export const BreathHoldingTime = (props: TouchableOpacityProps) => (
  <TouchableOpacity {...props}>
    <Widget style={styles.container}>
      <Body style={styles.seconds}>
        60
      </Body>
      <Body style={styles.label}>
        {Strings.dashboard.holdingTime.label}
      </Body>
    </Widget>
  </TouchableOpacity>
)
