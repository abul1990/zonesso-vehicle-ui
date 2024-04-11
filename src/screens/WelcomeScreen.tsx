import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ScreenWithMarginTop from '../components/ScreenWithMarginTop';
import GoogleSvg from '../components/svg/GoogleSvg';
import FacebookSvg from '../components/svg/FacebookSvg';
import EmailSvg from '../components/svg/EmailSvg';

//@ts-ignore
const WelcomeScreen: React.FC = ({ navigation }) => {
  const handleGoogleSignIn = async () => {};

  const handleFacebookSignIn = async () => {};

  const handleEmailSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <ScreenWithMarginTop>
      <View style={styles.container}>
        <Image
          source={require('../../assets/welcome.png')}
          style={[styles.image, { borderRadius: 10 }]}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#F04900' }]}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>
            Create New Account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FECDCA' }]}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, { color: '#F04900' }]}>
            Sign up as a Business
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonContent]}
          onPress={() => {}}
        >
          <GoogleSvg />
          <Text style={[styles.buttonText, { marginLeft: 10 }]}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonContent]}
          onPress={() => {}}
        >
          <FacebookSvg />
          <Text style={[styles.buttonText, { marginLeft: 10 }]}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonContent]}
          onPress={handleEmailSignIn}
        >
          <EmailSvg />
          <Text style={[styles.buttonText, { marginLeft: 10 }]}>
            Continue with Email
          </Text>
        </TouchableOpacity>

        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>By signing up, you agree to our</Text>
          <TouchableOpacity
            onPress={() =>
              console.log('Terms of Service & Privacy Policy pressed')
            }
          >
            <Text style={styles.redText}>
              {' '}
              Terms of Service & Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => console.log('Sign up later pressed')}
        >
          <Text style={styles.linkText}>Sign up later</Text>
        </TouchableOpacity>

        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>Already have an account?</Text>
          <TouchableOpacity onPress={handleEmailSignIn}>
            <Text style={styles.redText}> Log in</Text>
          </TouchableOpacity>
        </View>
        {/* <Text style={[styles.buttonText, { marginLeft: 10 }]}>
          Already have an account? Log in
        </Text> */}
      </View>
    </ScreenWithMarginTop>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderStyle: 'solid',
    // backgroundColor: '#DDDDDD',
  },
  image: {
    width: '100%',
    height: '50%',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    width: '90%',
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  termsContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 20,
  },
  termsText: {
    fontSize: 12,
  },
  redText: {
    color: '#FF0000',
    fontSize: 12,
  },
  linkText: {
    color: '#FF0000',
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;
