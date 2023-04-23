import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';  // for drawer 

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
import Skk from './factories/child/Skk';
//import Stackjs from './factories/child/Skk';
import Axiosjs from './factories/child/Axiosjs'
import Aplp from './factories/child/Lyk';
import NestNav from './factories/child/NestNav'
import Jstrain from './factories/jsall/Jstrain'
AppRegistry.registerComponent(appName, () => Jstrain);
