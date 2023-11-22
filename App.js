import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Photo from './Photo';
import Header from './Header';
import Home from './Home';
import BookDetails from './BookDetails';
import Login from './Login';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
      <Drawer.Screen name="Login " component={Login} 
     
     />
      
        <Drawer.Screen name="Home Page" component={Home} options={{
            title: 'My Home Screen',
            headerStyle: {
            backgroundColor: `#191970`,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
            }}/>
        <Drawer.Screen name="Book details Page" component={BookDetails} 
     
        />
      </Drawer.Navigator>
    </NavigationContainer>

  );  


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});