import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import {colors} from '../../utils/colors';
import {styles} from './styles';
import screen1Image from '../../assets/images/introScreen1/illustration.png';
import screen2Image from '../../assets/images/introScreen2/illustration.png';
import screen3Image from '../../assets/images/introScreen3/illustration.png';

export default function IntroScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SafeAreaView style={styles.container}>
        <View style={styles.sliderContainer}>
          <ScrollView
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}>
            <View style={styles.slide}>
              <Text style={styles.heading}>Proven{'\n'}specalists</Text>
              <Image source={screen1Image} />
              <Text style={styles.text}>
                We check each specialist before{'\n'}he starts work
              </Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.heading}>Honest{'\n'}ratings</Text>
              <Image source={screen2Image} />
              <Text style={styles.text}>
                We carefully check each specialist{'\n'}and put honest ratings
              </Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.heading}>Insured{'\n'}orders</Text>
              <Image source={screen3Image} />
              <Text style={styles.text}>
                We insure each order for the{'\n'}amount of $500
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
