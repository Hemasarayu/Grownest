import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Create Account</Text>
      <Text style={styles.subHeader}>Sign up to get started</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Create password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View style={styles.termsRow}>
        <CheckBox value={agree} onValueChange={setAgree} />
        <Text style={styles.termsText}>
          I agree to the <Text style={{ color: '#FD7F23', fontWeight: '700' }}>Terms of Service</Text> and <Text style={{ color: '#FD7F23', fontWeight: '700' }}>Privacy Policy</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.signUpButton} disabled={!agree}>
        <Text style={styles.signUpText}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or continue with</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}><Text>G Google</Text></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><Text>f Facebook</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, flex: 1, backgroundColor: '#fff' },
  backButton: { position: 'absolute', top: 30, left: 20 },
  backArrow: { fontSize: 24, color: '#ccc', backgroundColor: '#f1f1f1', borderRadius: 16, padding: 8 },
  header: { fontWeight: 'bold', fontSize: 26, marginTop: 60, color: '#222' },
  subHeader: { fontSize: 15, color: '#888', marginBottom: 26, marginTop: 8 },
  input: {
    height: 48, borderWidth: 1, borderColor: '#eee', borderRadius: 10, padding: 12, marginBottom: 16, backgroundColor: '#fafafa'
  },
  termsRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 18 },
  termsText: { fontSize: 13, marginLeft: 6 },
  signUpButton: {
    backgroundColor: '#FD7F23', borderRadius: 10, paddingVertical: 14, alignItems: 'center', marginBottom: 20, opacity: 1
  },
  signUpText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  orText: { textAlign: 'center', color: '#aaa', marginVertical: 16 },
  socialButtons: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 24 },
  socialButton: {
    borderWidth: 1, borderColor: '#eee', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fafafa'
  },
});
