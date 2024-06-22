import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { COLORS } from '../global/Colors'
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title, onBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      {onBack &&
        <Pressable
          style={({ pressed }) => [styles.containerIcon, { opacity: pressed ? 0.6 : 1 }]}
          onPress={onBack}
        >
          <Ionicons name="chevron-back-sharp" size={26} color="white" />
        </Pressable>}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    backgroundColor: COLORS.primary,
  },
  textTitle: {
    fontSize: 26,
    color: "white",
    fontFamily: "Amaranth_700Bold",
    textAlign: 'center'
  },
  containerIcon: {
    position: 'absolute',
    // backgroundColor: "blue",
    top: "50%",
    left: 10
  }
})