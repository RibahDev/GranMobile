import  { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

export function Cursos(){

    return(
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={{fontSize:20, color:"#fff", fontWeight: "bold", borderBottomWidth:1, borderColor: "#fff"}}>Cursos</Text>
                </View>
                
                <Text style={{fontWeight: "bold", fontSize: 16, marginBottom: 10}}>Principais cursos</Text>
                
                <View style={styles.cursos}>
                    <Image source={require("../../assets/engagronoma.png")} style={styles.logo} />
                    <Image source={require("../../assets/edfisica.png")} style={styles.logo} />
                    <Image source={require("../../assets/enfer.jpeg")} style={styles.logo} />
                    <Image source={require("../../assets/ciecont.png")} style={styles.logo} />
                    <Image source={require("../../assets/adm.png")} style={styles.logo} />
                    <Image source={require("../../assets/engcomput.png")} style={styles.logo} />
                </View>
                <View style={styles.button}>
                    <Text style={{color: "#fff", fontSize: 16}}>Inscrever-se</Text>
                </View>
                <View style={styles.footer}>
                    <Image source={require("../../assets/footer.png")} style={styles.ftFooter} />
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center"
    },
    header:{
        backgroundColor: "orange",
        height:"15%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        marginBottom: 25
    },
    cursos:{
        flexDirection: "row",
        width: "90%",
        height: "50%",
        flexWrap: "wrap",
        padding: 10,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        borderRadius: 20,
    },
    logo:{
        margin: 5,
        width: 110,
        height: 110,
        resizeMode: 'contain'
    },
    button:{
        width: "30%",
        padding: 15,
        backgroundColor: "#00a8ff",
        borderRadius: 60,
        marginTop: 20
    },
    footer:{
        width:"100%"
    },
    ftFooter:{
        width: "100%",
        resizeMode: "contain"
        
    }
})