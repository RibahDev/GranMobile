import  { View, Text, StyleSheet, Image } from 'react-native'

export function Contatos(){

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:20, color:"#fff", fontWeight: "bold", borderBottomWidth:1, borderColor: "#fff"}}>Contatos</Text>
            </View>
            <View style={styles.contatoContainer}>
                <Image source={require("../../assets/contact.png")}/>
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
    header:{
        backgroundColor: "orange",
        height:"10%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        marginBottom: 50
    },
    contatoContainer:{
        backgroundColor: "#fff",
        borderRadius: 20,
    }
})