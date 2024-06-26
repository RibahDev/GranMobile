import  { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'

export function Home(){

    return(
      <ScrollView style={{flex:1}}>
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={{fontSize:20, color:"#fff", fontWeight: "bold", borderBottomWidth:1, borderColor: "#fff"}}>Inicio</Text>
          </View>

          <View style={styles.headerContainer}>
            <Image source={require("../../assets/bannerGran.png")} style={styles.logo} />
          </View>  

          <View style={styles.novidadesContainer}>
            <Text style={{fontSize:20, color:"gray", fontWeight: "bold", borderBottomWidth:1}}>Novidades</Text>
            <Image source={require("../../assets/novidades1.png")} style={styles.noviFoto}/>
            <Image source={require("../../assets/novidades2.jpeg")} style={styles.noviFoto}/>
          </View>

        </View>
      </ScrollView>            
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
    header:{
        backgroundColor: "orange",
        height:"10%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff"
    },
    logo:{
      marginBottom: 25,
      width: '100%',
      height: 180,
      resizeMode: 'contain'
    },
    novidadesContainer:{
      alignItems:"center",
      justifyContent: "space-around",
      width: "90%",
      flex:1,
      backgroundColor: "#fff",
      borderRadius: 10
      
    },
    noviFoto:{
      width: "100%",
      resizeMode: 'contain',
      marginBottom: 50
    }
})