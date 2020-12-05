import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import {colors} from '../../utils/colors';
import {styles} from './styles';
import screen1Image from '../../assets/images/introScreen1/illustration.png';
import screen2Image from '../../assets/images/introScreen2/illustration.png';
import screen3Image from '../../assets/images/introScreen3/illustration.png';
import {enableAnimation, animate} from '../../utils/animations';

export default function IntroScreen() {
  let [sliderState, setSliderState] = useState({currentPage: 0});
  const {width} = Dimensions.get('window');

  useEffect(() => {
    enableAnimation();
  }, []);

  const setSliderPage = (event) => {
    animate();
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const {currentPage} = sliderState;
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SafeAreaView style={styles.container}>
        <View style={styles.sliderContainer}>
          <ScrollView
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={setSliderPage}>
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
          <View style={styles.indicatorsContainer}>
            <View
              style={[
                styles.slideIndicator,
                currentPage === 0 ? styles.activeIndicator : null,
              ]}
            />
            <View
              style={[
                styles.slideIndicator,
                currentPage === 1 ? styles.activeIndicator : null,
              ]}
            />
            <View
              style={[
                styles.slideIndicator,
                currentPage === 2 ? styles.activeIndicator : null,
              ]}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
