import  { View, Text, StyleSheet, Image } from 'react-native'

export function Sobre(){

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:20, color:"#fff", fontWeight: "bold", borderBottomWidth:1, borderColor: "#fff"}}>Sobre nós</Text>
            </View>
            <Text style={{fontSize:20, color:"#00a8ff", fontWeight: "bold", borderBottomWidth:1, marginBottom: 20, borderColor: "#00a8ff" }}>FACULDADE GRAN TIETÊ</Text>
            <View style={styles.sobreContainer}>

                <Text style={{fontSize: 16, fontWeight:"bold",textAlign: "center" }}>A GRAN TIETÊ estabelece como missão propiciar ao universitário uma educação superior de qualidade por meio da construção crítica e criativa do conhecimento, fundamentada na pluralidade de ideias, respeito às diferenças étnicas, sociais e de gênero, propiciando a inserção na vida da comunidade e na cidadania plena.</Text>

                <View style={styles.subContainer}>
                    <Text style={{fontSize: 14, fontWeight:"bold", color: "#ffff"}}>A Gran é uma faculdade que atende à toda nossa região, atendendo alunos de Barra Bonita e região que não precisam mais se deslocar até grandes cidades para ter uma educação superior de qualidade.</Text>
                </View>

                <View style={styles.button}>
                    <Text style={{color: "#fff", fontSize: 18, textAlign: "center"}}>Conhecer</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center"
    },
    header:{
        backgroundColor: "orange",
        height:"10%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        marginBottom: 25
    },
    sobreContainer:{
        backgroundColor: "#fff",
        width: "90%",
        height: "58%",
        borderRadius: 20,
        padding: 20,
        alignItems: "center"
    },
    subContainer:{
        marginTop: 25,
        backgroundColor: "#00a8ff",
        borderRadius: 15,
        padding: 15
    },
    button:{
        width: "40%",
        padding: 10,
        backgroundColor: "#00a8ff",
        borderRadius: 60,
        marginTop: 20
    }
})