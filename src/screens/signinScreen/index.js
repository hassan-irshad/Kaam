import React from 'react';
import {Text, SafeAreaView, StatusBar} from 'react-native';
import {fonts} from '../../utils/font';

export default function SigninScreen() {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <Text style={{fontFamily: fonts.jostRegular}}>Signin screen</Text>
      </SafeAreaView>
    </>
  );
}
