import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//import SplashScreen from './factories/SplashScreen'
import SignUpScreen from './factories/SignUpScreen'
import LoginScreen from './factories/LoginScreen'
import HomeScreen from './factories/HomeScreen';
import ChangePlan from './factories/ChangePlan'
import ContactUs from './factories/ContactUs'
import HomeTabs from './factories/Hometab'
import SinupNav from './factories/Singinupnav'
import Crudjs from './factories/Crudjs';
AppRegistry.registerComponent(appName, () => Crudjs);
