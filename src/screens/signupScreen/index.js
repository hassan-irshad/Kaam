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
import signUpIllustration from '../../assets/images/signupIllustration/illustration.png';
import TextInput from '../../components/textInput';
import PasswordInput from '../../components/passwordInput';
import RectangularButton from '../../components/rectangularButton';
import facebookIcon from '../../assets/images/facebookIcon/facebookIcon.png';
import twitterIcon from '../../assets/images/twitterIcon/twitterIcon.png';
import linkedinIcon from '../../assets/images/linkedinIcon/linkedinIcon.png';
import RouteNames from '../../RouteNames';

export default function SignupScreen({navigation}) {
  const navigateToSignin = () => {
    navigation.navigate(RouteNames.SigninScreen);
  };
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.container}>
            <Header title="Sign Up" />
            <View style={styles.imageContainer}>
              <Image source={signUpIllustration} />
            </View>
            <View>
              <TextInput placeholder="Enter email" />
            </View>
            <View style={styles.passwordInputContainer}>
              <PasswordInput placeholder="Enter password" />
            </View>
            <View style={styles.passwordInputContainer}>
              <PasswordInput placeholder="Confirm password" />
            </View>
            <View style={styles.signupButtonContainer}>
              <RectangularButton title="Sign Up" />
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
          <TouchableOpacity style={styles.row} onPress={navigateToSignin}>
            <Text style={styles.doYouHave}>Already have an account? </Text>
            <Text style={styles.signupBtn}>Sign In</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
