import Reactortron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactortron.configure().useReactNative().connect();
  tron.clear();
  console.tron = tron;
}
