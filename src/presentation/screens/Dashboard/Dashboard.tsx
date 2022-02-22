import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { styles } from './styles'
import { Screen } from 'presentation/components'
import * as Widgets from './widgets'

const PADDING_TOP = 20

export const Dashboard = () => {
  const { top } = useSafeAreaInsets()

  return (
    <Screen
      style={[
        styles.container,
        { paddingTop: top + PADDING_TOP }
      ]}
    >
      <View style={styles.widgetsRow}>
        <Widgets.BreathesAmount style={styles.widget} />
        <Widgets.BreathHoldingTime style={styles.widget} />
      </View>
    </Screen>
  )
}
