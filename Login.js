import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Welcome Back!</Text>
      <Text style={styles.subHeader}>Sign in to continue to your account</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or continue with</Text>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}><Text>G Google</Text></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><Text>f Facebook</Text></TouchableOpacity>
      </View>

      <View style={styles.signUpContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, flex: 1, backgroundColor: '#fff' },
  backButton: { position: 'absolute', top: 30, left: 20 },
  backArrow: { fontSize: 24, color: '#ccc', backgroundColor: '#f1f1f1', borderRadius: 16, padding: 8 },
  header: { fontWeight: 'bold', fontSize: 28, marginTop: 60, color: '#222' },
  subHeader: { fontSize: 15, color: '#888', marginBottom: 34, marginTop: 8 },
  input: {
    height: 48, borderWidth: 1, borderColor: '#eee', borderRadius: 10, padding: 12, marginBottom: 16, backgroundColor: '#fafafa'
  },
  forgotPassword: { alignItems: 'flex-end', marginBottom: 24 },
  forgotText: { color: '#FD7F23', fontWeight: '500' },
  signInButton: {
    backgroundColor: '#FD7F23', borderRadius: 10, paddingVertical: 14, alignItems: 'center', marginBottom: 20
  },
  signInText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  orText: { textAlign: 'center', color: '#aaa', marginVertical: 16 },
  socialButtons: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 24 },
  socialButton: {
    borderWidth: 1, borderColor: '#eee', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fafafa'
  },
  signUpContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  signUpText: { color: '#FD7F23', fontWeight: '600' },
});
