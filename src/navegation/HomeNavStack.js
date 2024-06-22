import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const HomeNavStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => {
        return {
          header: () => <Header title="Pokedex" />
        }
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator >
  )
}

export default HomeNavStack