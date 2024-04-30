import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#dfe9e2',
    },
    searchBox: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#000',
      height: 50,
      borderRadius: 5,
      margin: 10,
      width: '80%',
    },
    textInput: {
      flex: 1,
      fontSize: 18,
    },
    searchIcon: {
      margin: 5,
      marginLeft: 10,
      marginRight: 20,
      height: 25,
      width: 25,
      alignItems: 'center',
    },
    scrollView: {
      marginHorizontal: 10, // leivonta: 20, tiedot 15, ruokaisa 20
      marginBottom: 20,
      marginTop:10,
    },
    view: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#dfe9e2',
    },
    text: {
      fontSize: 16,
      marginBottom: 10,
    },
    name: {
      fontSize: 17, // leivonta 18, tiedot 18, haku 18, ruokaisa 18
      fontWeight: 'bold',
      paddingHorizontal: 8,
      marginBottom: 3,
      marginTop:5,
    }, // tiedot:
    detailsContainer: {
      flex:1,
      margin: 10,
    }, //tiedot:
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop:5,
    }, //tiedot:
    list: {
        fontSize: 16,
        marginLeft: 20,
        marginTop: 10,
    },
   // ruokaisa:
      imageCook: {
      width:"100%",
      height:100,
      resizeMode:"cover",
      padding:0,
    },
    itemContainer: {
      marginTop: 10, // leivonta 20, ruokaisa 20
      backgroundColor: 'white', // leivonta ja ruokaisa '#7a82e5'
      borderRadius: 8, // leivonta ja ruokaisa 10
      borderColor: '#000', // eit oimi
      padding: 10, // ei nähtävästi vaikuta; leivonta 20, ruokaisa 20
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
    }, //ei käytössä
    card: {
      marginTop: 10,
      marginLeft: 20,
      backgroundColor: 'white',
      borderRadius: 8,
      borderColor: '#000', // eit oimi
      padding: 10, // ei nähtävästi vaikuta
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
      width:'80%',
    },
    flatlist: {
      marginBottom:40,
      marginRight:20,
    },
    carousel: {
      marginTop: 15,
    },
  });

  export default styles;