import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

// LoadingScreen
import AuthLoadingScreen from './screens/Loading/Auth';

// AuthStack
import LoginScreen from './screens/AuthStack/Login';
import RegisterScreen from './screens/AuthStack/Register';

// AppStack
import MainScreen from './screens/AppStack/Main';
import MyPostsScreen from './screens/AppStack/MyPosts';
import MySubscriptionsScreen from './screens/AppStack/MySubscriptions';

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

const AppStack = createStackNavigator({
  Main: MainScreen,
  MyPosts: MyPostsScreen,
  MySubscriptions: MySubscriptionsScreen
});




export default createSwitchNavigator({
  App: AppStack,
  Auth: AuthStack,
  AuthLoading: AuthLoadingScreen
},
{
  initialRouteName: 'AuthLoading'
});