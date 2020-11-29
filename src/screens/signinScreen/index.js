import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import Header from '../../components/header';
import {styles} from './styles';
import signInIllustration from '../../assets/images/signinIllustration/illustration.png';
import TextInput from '../../components/textInput';
import PasswordInput from '../../components/passwordInput';
import RectangularButton from '../../components/rectangularButton';
import facebookIcon from '../../assets/images/facebookIcon/facebookIcon.png';
import twitterIcon from '../../assets/images/twitterIcon/twitterIcon.png';
import linkedinIcon from '../../assets/images/linkedinIcon/linkedinIcon.png';

export default function SigninScreen() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.container}>
            <Header title="Sign In" />
            <View style={styles.imageContainer}>
              <Image source={signInIllustration} />
            </View>
            <View>
              <TextInput placeholder="Username" />
            </View>
            <View style={styles.passwordInputContainer}>
              <PasswordInput placeholder="Password" />
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot your password?</Text>
            </TouchableOpacity>
            <View style={styles.loginButtonContainer}>
              <RectangularButton title="Login" />
            </View>
            <Text style={styles.orBtn}>or</Text>
            <View style={styles.socialIconsContainer}>
              <TouchableOpacity>
                <Image source={facebookIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={twitterIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={linkedinIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.doYouHave}>Do you have an account? </Text>
            <Text style={styles.signupBtn}>Sign Up</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
