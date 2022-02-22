import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'
import { GradientedScreen, Screen } from 'presentation/components'
import * as Widgets from './widgets'

export const Dashboard = () => (
  <Screen style={styles.container}>
    <View style={styles.widgetsRow}>
      <Widgets.BreathesAmount style={styles.widget} />
      <Widgets.BreathHoldingTime style={styles.widget} />
    </View>
  </Screen>
)
