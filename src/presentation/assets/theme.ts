import { useColorScheme } from 'react-native'

export const COLORS = {
  screen: '#FFFFFF',
  text: '#FFFFFF',
  widgetFirstBackground: '#5ce1e0',
  widgetSecondBackground: '#25bcda'
}

export const DARK_THEME_COLORS = {
  ...COLORS,
  screen: '#4158D0',
  widgetFirstBackground: '#C850C0',
  widgetSecondBackground: '#FFCC70'
}

export const useThemeColors = () => {
  const colorScheme = useColorScheme()
  return colorScheme === 'light'
    ? COLORS
    : DARK_THEME_COLORS
}
