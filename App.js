import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, View } from 'react-native'
import { useFonts } from 'expo-font';
import { Amaranth_400Regular, Amaranth_700Bold } from '@expo-google-fonts/amaranth';
import MainNavigation from './src/navegation/MainNavigation'
import { Provider } from 'react-redux';
import { store } from './src/store';

const App = () => {

  const [fontsLoaded, fontError] = useFonts({
    Amaranth_400Regular,
    Amaranth_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={styles.StatusBarColor}>
        <SafeAreaView style={styles.container}>
          <MainNavigation />
        </SafeAreaView>
      </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white"
  },
  StatusBarColor: {
    flex: 1,
    backgroundColor: "#ff2222",
  },
})