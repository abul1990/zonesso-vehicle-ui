import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';

//@ts-ignore
const LoginScreen: React.FC = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setError('Please enter email and password');
      return;
    }

    // Placeholder username and password to log into the app
    if (email === 'user@zonesso.com' && password === 'Password@123') {
      navigation.navigate('Main');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Image
          source={require('../../assets/welcome.png')}
          style={[styles.image, { borderRadius: 10 }]}
        />
      <Text style={styles.title}>Login</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '50%',
  },
});

export default LoginScreen;
