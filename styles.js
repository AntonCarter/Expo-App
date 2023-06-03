import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
//var Dimensions = require('Dimensions');


var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    width: 100, 
    height: 55,
    marginTop: 20
  },

  nav: {
    marginTop: 0,
  },


  navCenterTitle: {
      fontSize: 17,
      fontWeight: "600",
  },


  navTitle: {
    color: '#df4723' 
  },

  navTitleInactive: {
    color: '#404040' 
  },


  navButton  : {
    color: '#df4723' 
  },

  logoffButton : {
    color: '#df4723' 
  },

  containerLogin: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  color: {
  	color: '#df4723'
  },

  disabledColorGreyText: {
    //color: '#B8B8B8'
    color: '#CCCCD0'
   },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  img: {
  	width: 90,
  	height: 90,
  	borderRadius: 45,
  	margin: 10,
  	backgroundColor: '#fff',
  },

  image: {
    width:  100,
  	height: 100,
  },

  imgRow: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		padding: 1,
  },
  textInput: {
    width: deviceWidth,
    padding: 15,
    backgroundColor: '#fff',
    height: 100
  },

  bold: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },

  headline: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 0,
    paddingBottom: 15
  },

  headlineLeft: {
    textAlign: 'left', // <-- the magic
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 0,
    paddingBottom: 15
  },

  headlineLeftSoft: {
    textAlign: 'left', // <-- the magic
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 0,
    paddingBottom: 15,
    color: 'grey'
  },

  headlineSoft: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 0,
    paddingBottom: 15,
    color: 'grey'
  },

  button: {
	  borderRadius: 15,
	  borderWidth: 1,
	  borderColor: '#df4723',
	  textAlign: 'center',
	  color: '#df4723',
	  padding: 15,
	  margin: 15,
	  fontSize: 18,
	  fontWeight: 'bold',
  },

  card: {
    width: deviceWidth*.9,
    height: deviceHeight*.7,
  },
  cardDescription: {
    padding:15,
    justifyContent: "flex-end",  // moves content to end of bottom of page
    flex: 1

  },

  cardInfo: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding:10

  },
  cardLayout: {
    flex:1,
    marginStart: 0,
    marginEnd: 0,
    marginVertical: 6
  },
  feedCardLayout: {
    marginStart: 0,
    marginEnd: 0,
    marginVertical: 7,
    padding:0
  },


  testBottom : {
    marginBottom: 200,
    paddingBottom: 200
  },




  circle: {
    width: 12,
    height: 12,
    borderRadius: 50
  },

  solidYellowCircle: {
    backgroundColor: 'blue'
  },

  solidGreenCircle: {
    backgroundColor: 'green'
  },

  infoText: {
    fontSize: 12,
    color: '#2D3332',
    marginLeft: 6
  },


/************* Home *************/

sliderTextContainer: {
  width: 320,
  flexDirection: 'row',
  justifyContent: 'space-between'
},



/****** Login Styles *******************/

  bgImage: {
    flex: 0,
    top: 0,
    left: 0,

    backgroundColor:"#612B81",
    

    width: deviceWidth,
    height: deviceHeight,


     justifyContent: 'center',
    alignItems: 'center',
  },
  
  loginView: {
    marginTop: 150,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: 'transparent',
    width: deviceWidth -100,
    height: deviceHeight,
  },



  loginTitle: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  travelText: {
    color: 'white',
    fontSize: 30,
   // fontFamily: 'bold',
    fontWeight: 'bold'
  },
  plusText: {
    color: 'white',
    fontSize: 30,
    //fontFamily: 'regular',
    fontWeight: 'normal'
  },
  loginInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerView: {
    marginTop: 20,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },



  /****** Settings Styles *******************/

  settingsContainer: {
    backgroundColor :'#F5F4F5'
  },
  
  inputContainer : {
    backgroundColor : '#FFF'
  },

  inputFont : {
    fontSize:16
  },

  inputLeftText : {
    paddingRight:30, 
    color:'grey', 
    fontSize:16 
  },

  headerSection: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    fontSize: 17,
    color:'black'
  },

  separatorComponent: {
    backgroundColor: 'white',
  },
  
  separator: {
    //marginLeft: 58,
  },



  


})

module.exports = styles


