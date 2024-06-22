import  { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'

export function Home(){

    return(
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Image source={require("../../assets/bannerGran.png")} style={styles.logo} />
          </View>  
          <View style={styles.novidadesContainer}>
            <Text style={{fontSize:20, color:"gray", fontWeight: "bold"}}>Novidades</Text>
            <Image source={require("../../assets/novidades1.png")} style={styles.noviFoto}/>
          </View>
        </View>            
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor: "#f3f3f3",
    },
    headerContainer:{
        width: "100%",
        alignItems: "center"
    },
    logo:{
      marginBottom: 30,
      width: '100%',
      height: 180,
      resizeMode: 'contain'
    },
    novidadesContainer:{
      alignItems:"center",
      width: "80%",
      
    },
    noviFoto:{
      width: 350,
      resizeMode: 'contain'

    }
})