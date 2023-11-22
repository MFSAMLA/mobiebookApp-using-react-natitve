import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View,SectionList,Image,ScrollView,SafeAreaView } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';



export default function BookDetails({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scroll}>
    <View style={styles.container}>

       <View style ={styles.list}>
      <SectionList
      sections={[
        {title: 'politics', data: ['The fundemental of political science','(author: Guy D.Whitten)']},
        {title: 'physics', data :['Basic physics','(author:Karl F.Kuhn)']},
        {title: 'Chemistry', data: ['ICSE chemistry','(author:R.D.Madan)']},
        {title: 'Biology', data :['An Indroduction to biology','(author: David Heath)']},
        {title: 'Technology', data: ['The invisible cloud','(author:Dary Bishop)']},
        {title: 'General', data :['General knowledge 2021','(author:Manohar Pandey)']},
        
  
      ]}
      renderItem= {({item}) =><Text style={styles.item}>{item}</Text>}
  renderSectionHeader={({section}) => <Text style={styles.SectionHeader}>{section.title}</Text>}
  keyExtractor={(item,index) => index}
  
      />
      </View>
      <Image source= {require('./assets/gk.jpg')} style={styles.books}/>
      <Image source= {require('./assets/polit.jpg')} style={styles.books}/>
      <Image source= {require('./assets/bio.jpg')} style={styles.books}/>
      
      <Text>This is Book details page</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home Page')}>
          
      </Button>
      
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    </SafeAreaView>
  );

 
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list:{
flex:1,
padding:22,
  },
  item:{
    padding:10,
    fontSize:18,
    height:44,
  },
  SectionHeader:{
    paddingTop: 2,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:2,
    fontSize:14,
    fontWeight:'bold',
    backgroundColor:'blue',
    color:'white'
  },
  books:{
    height:200,
    width:200,
    margin:20,
  },
  scroll:{
    marginHorizontal:20,
    backgroundColor:'pink'
  }
});

