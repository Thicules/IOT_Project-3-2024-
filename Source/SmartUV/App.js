import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import { COLORS } from './assets';
import { Provider } from 'react-redux';
import store from './screens/components/redux/store.js';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.WHITE,
  },
};

const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer theme={MyTheme}>
      <StackNavigation />
    </NavigationContainer>
    // </Provider>
    
  );
};
export default App;