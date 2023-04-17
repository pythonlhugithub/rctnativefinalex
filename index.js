import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//import SplashScreen from './factories/SplashScreen'
import SignUpScreen from './factories/SignUpScreen'
import LoginScreen from './factories/LoginScreen'
import HomeScreen from './factories/HomeScreen';
import ChangePlan from './factories/ChangePlan'
import ContactUs from './factories/ContactUs'
import SinupNav from './factories/Singinupnav'
import Crudjs from './factories/Crudjs';
import HomeTabScreen from './factories/HometabScreen';
import LogOutScreen from './factories/LogoutScreen'
import Vwtest from './factories/child/Vwtest';
import Drawjs from './factories/child/Drawjs';
AppRegistry.registerComponent(appName, () => Drawjs);
