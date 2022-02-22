import { ReactNode } from 'react'
import { ViewProps } from 'react-native'

export interface WidgetProps extends ViewProps {
  children: ReactNode
}
