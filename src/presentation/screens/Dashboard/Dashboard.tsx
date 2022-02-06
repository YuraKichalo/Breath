import React from 'react'

import { styles } from './styles'
import { GradientedScreen, Body } from 'presentation/components'

export const Dashboard = () => (
  <GradientedScreen style={styles.container}>
    <Body style={styles.text}>
      Dashboard
    </Body>
  </GradientedScreen>
)
