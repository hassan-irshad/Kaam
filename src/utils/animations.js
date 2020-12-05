import {LayoutAnimation, UIManager} from 'react-native';

const CONFIG = {
  duration: 250,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.scaleXY,
  },
  update: {
    type: LayoutAnimation.Types.easeOut,
  },
};

export function enableAnimation() {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export function animate() {
  LayoutAnimation.configureNext(CONFIG);
}
