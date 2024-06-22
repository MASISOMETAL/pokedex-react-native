import { NavigationContainer } from '@react-navigation/native';
import HomeNavStack from './HomeNavStack';

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <HomeNavStack />
    </NavigationContainer>
  )
}

export default MainNavigation