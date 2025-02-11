import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import EntryPoint from '@/components/EntryPoint';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import './global.css';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <EntryPoint />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
AppRegistry.registerComponent(appName, () => App);

export default App;
