import { StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'

const { View, Text } = Animated

export default function Reanimated() {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        Reanimated Page
      </Text>

      <Text style={styles.link} accessibilityRole="link" href={`/`}>
        Go Back
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
  link: {
    color: 'blue',
  },
})
