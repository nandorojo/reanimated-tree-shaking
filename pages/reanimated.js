import { StyleSheet, View, Text } from 'react-native'
import Animated from 'react-native-reanimated'

export default function Reanimated() {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        Reanimated Page
      </Text>
      <Animated.Text style={styles.link} accessibilityRole="link" href={`/`}>
        Go Back
      </Animated.Text>
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
