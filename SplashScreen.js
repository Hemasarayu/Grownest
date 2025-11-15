// SplashScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
          {/* Replace with your actual icon */}
          <Text style={styles.logoIcon}>💲</Text>
        </View>
        <Text style={styles.title}>brownest</Text>
        <Text style={styles.subtitle}>Smart money habits for families</Text>
        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
      {/* Add orange gradient background using a library like 'react-native-linear-gradient' for best results */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8008',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    marginBottom: 12,
    alignItems: 'center',
  },
  logoIcon: {
    fontSize: 32,
  },
  title: {
    fontFamily: 'Cursive',
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    marginVertical: 8,
  },
  dots: {
    flexDirection: 'row',
    marginTop: 24,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: 'white',
    margin: 5,
    opacity: 0.9,
  },
});
