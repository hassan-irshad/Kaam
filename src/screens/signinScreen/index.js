import React from 'react';
import {View, SafeAreaView, StatusBar, ScrollView, Image} from 'react-native';
import Header from '../../components/header';
import {styles} from './styles';
import signInIllustration from '../../assets/images/signinIllustration/illustration.png';
import TextInput from '../../components/textInput';

export default function SigninScreen() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <Header title="Sign In" />
            <View style={styles.imageContainer}>
              <Image source={signInIllustration} />
            </View>
            <View>
              <TextInput placeholder="Username" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
