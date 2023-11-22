import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

function Photo() {
    return (
      <View style={styles.container}>
        <Image source= {require('./assets/Article-Card-Puffin-9-12-Year-Olds-UPDATE.jpg')} style={styles.Image} />
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
    Image: {
        width: 400,
        height: 200
    }
  });
  export default  Photo;