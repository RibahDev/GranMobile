import  { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'

export function Home(){

    return(
        <View style={styles.container}>
            <Image source={require("../../assets/bannerGran.png")} style={styles.logo} />
        </View>            
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor: "#f3f3f3",
    },
    logo:{
      marginBottom: 60,
      width: '100%',
      height: 180,
      resizeMode: 'contain'
    },
})