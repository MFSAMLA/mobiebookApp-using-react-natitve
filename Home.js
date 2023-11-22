import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Photo from './Photo';
import Header from './Header';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Photo/>
      <Header/>
      <Text>This is Home Page</Text>
      <Button title='Go to book details' onPress={() => navigation.navigate('Book details Page')}>
          
      </Button>
      
      <StatusBar style="auto" />
    </View>
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