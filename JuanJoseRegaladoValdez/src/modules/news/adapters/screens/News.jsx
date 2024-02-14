import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function News() {
  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>News</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
});