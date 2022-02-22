import { StyleSheet } from 'react-native'
import { COLORS } from 'presentation/assets'

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.screen
  },
  container: {
    flex: 1
  },
  contentContainer: {
    ...StyleSheet.absoluteFillObject
  },
  topGradient: {
    flex: 1
  },
  bottomGradient: {
    flex: 2
  },
  center: {
    flex: 1,
    backgroundColor: '#94E9EE'
  }
})
