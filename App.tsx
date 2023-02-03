import React, {useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/store';
import MainComponent from './src/components/MainComponent';

import AnimatedSplash from 'react-native-animated-splash-screen';
import Colors from './src/utils/colors';

function App(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);

  const {width, height} = useWindowDimensions();

  useEffect(() => {
    async function loaded() {
      await new Promise(resolve => setTimeout(resolve as any, 3000));
      setIsLoaded(true);
    }

    loaded();
  }, []);

  return (
    <Provider store={store}>
      <AnimatedSplash
        translucent={true}
        isLoaded={isLoaded}
        logoImage={require('./src/assets/logo.png')}
        backgroundColor={Colors.red}
        logoHeight={height}
        logoWidth={width}>
        <MainComponent />
      </AnimatedSplash>
    </Provider>
  );
}

export default App;
