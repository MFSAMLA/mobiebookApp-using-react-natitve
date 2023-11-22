import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text,TextInput, TouchableOpacity} from 'react-native';



export default function Login({navigation}) {
 
  
  return(
    
  
    <View style={styles.container}>
      <Image
    source={{uri: 'https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png',
    height : 150,
    width: 150,
    }}
   
   />
      <View style={styles.back}>
        <Text style={styles.edit}>Books Corner</Text>

      </View>
      <View style={styles.input}>
        <TextInput style={styles.inputText} placeholder='User Name..' placeholderTextColor='grey'></TextInput>
        
      </View>
      <View style={styles.input}>
      <TextInput style={styles.input2}  
      secureTextEntry
      placeholder='Password..' placeholderTextColor='grey'></TextInput>
      </View>
     <TouchableOpacity>
       <Text style={styles.forgot}>Forgot Password</Text>
       
     </TouchableOpacity>
     <TouchableOpacity style={styles.loginbt} onPress={() => navigation.navigate('Home Page')}>
       <Text style={styles.login}>Login</Text>
     </TouchableOpacity>
    
     <TouchableOpacity>
        <Text style={styles.forgot}>Signup</Text>
        
      </TouchableOpacity>
     
      <StatusBar style="auto" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
  },
  input:{
    width:'80%',
    backgroundColor:'#465881',
    height:'8%',
    borderRadius:25,
    marginBottom: 20,
    alignItems: 'center',
    
    
    
  },
  input2:{
    height:50,
    color:'white',
  
    fontSize:20,
  },
  inputText:{
    height:50,
    color:'white',
    marginRight:40,
    fontSize:20,
   
  },
  edit:{
    fontWeight:'bold',
    color: 'blue',
    fontSize: 50,
    marginBottom:10,
    

  },
  login:{
    color: 'white',
    fontSize: 12,

  },
  forgot:
  {
    color: 'black',
    fontSize: 12,

  },
  loginbt:{
    width:'80%',
    backgroundColor:'blue',
    height:50,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    marginTop:40,
    marginBottom:10,
  }
});