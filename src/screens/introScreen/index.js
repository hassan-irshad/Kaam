import React, {useState, useEffect, useRef} from 'react';
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
import {TouchableOpacity} from 'react-native-gesture-handler';
import RouteNames from '../../RouteNames';

export default function IntroScreen({navigation}) {
  let [sliderState, setSliderState] = useState({
    currentPage: 0,
  });
  const {width} = Dimensions.get('window');
  let scrollViewRef = useRef();
  const {currentPage} = sliderState;

  useEffect(() => {
    enableAnimation();
  }, []);

  const setSliderPage = (event) => {
    animate();
    const {x} = event.nativeEvent.contentOffset;

    const indexOfNextScreen = Math.ceil(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const onPressNext = () => {
    if (currentPage === 2) {
      navigation.navigate(RouteNames.SigninScreen);
      return;
    }
    scrollViewRef.current.scrollTo({x: width * (currentPage + 1), y: 0});
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SafeAreaView style={styles.container}>
        <View style={styles.sliderContainer}>
          <ScrollView
            ref={scrollViewRef}
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            // onScroll={setSliderPage}>
            onScroll={(event) => {
              setSliderPage(event);
            }}>
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
        <TouchableOpacity style={styles.nextButton} onPress={onPressNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
