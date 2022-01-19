import React from "react";
import { Text,View, StyleSheet, Button, Alert, ActivityIndicator, ScrollView, FlatList, TouchableOpacity } from "react-native";


const Component =()=>{
  let alertbtn =()=> Alert.alert(
    'Upadte available',
    'this alert only work with mobile and working perfectly',
    [{
       text:"ask me later",
       onPress:()=> console.log("ask me later")
    },
    {
      text:"cancel",
      onPress:()=> console.log("cancel btn")
   },
   {
    text:"ok btn",
    onPress:()=> console.log("ok btn")
 },
  ]
  )

  const Data = [
    { id:'1', name:"musaif",},
    { id:'2', name:"khan",},
    { id:'3', name:"ajuu",},
    { id:'4', name:"noman",},
    { id:'5', name:"manu",},
    { id:'6', name:"srivalli",},
    { id:'7', name:"musaif",},
    { id:'8', name:"khan",},
    { id:'9', name:"ajuu",},
    { id:'10', name:"noman",},
    { id:'11', name:"manu",},
    { id:'12', name:"srivalli",},
  
  
  ]
  return(<>
      <Text onPress={()=>{
        alert("you touched me");
      }} style={styles.container}>Musaif first netive App
      </Text>
    <View style={{padding:20, marginTop:50}}>
      {/* <Button onPress={()=>{
        alert("you clicked the button");}} title="click me"/> */}

        {/* <Button onPress={()=>{
        alert("you clicked the button");}} title="click me" color="green"/> */}
        {/* <Button title="disabled btn" disabled/> */}

        <Button title="click" color="red" onPress={alertbtn}/>
    
      {/* loading */}
      <Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dolorem numquam quidem. Aut, omnis? Sequi natus, excepturi officia soluta ratione voluptatibus, optio ipsam ad atque placeat magni ea consectetur possimus!
      </Text>
    {/* <ActivityIndicator size="large" color="#00ff00" /> */}
    </View>


{/* //scroll vertical or horizontal */}
    
  
     {/* {
       Data.map(items =>
         <Text style={{fontSize:20,}} key={items.id}>{items.name} </Text>
       )
     } */}

        {/* <FlatList
          data={Data}
          renderItem={({item}) =><Text style={{fontSize:20,}}>{item.name} </Text>}

          keyExtractor={item =>item.id}
        /> */}



  <Text style={{fontSize:30}}> Fetching Data </Text>
         <FlatList
          data={Data}
          renderItem={({item}) =>
          <TouchableOpacity onPress={()=>{
            alert("u clicked me : " + item.id)
          }}>
          <Text style={{fontSize:20,}}>{item.name} </Text>

          </TouchableOpacity>}

          keyExtractor={item =>item.id}
          
        /> 
    <View style={{padding:50}}>

        <Button onPress={()=>{
          alert("blue btn trigger")
        }} title="click me" />
    </View>


            

  
    
  </>)
};



//css styling below code
const styles=StyleSheet.create({
  container:{
    marginTop:18,
    color:"red",
    backgroundColor: '#cbf1b0',
         alignItems: 'center',
         justifyContent: 'center',
         textAlign:"center",
         position:"absolute",
         width:"100%",
         top:'2%',
         fontSize:24

  },
})

export default Component;

























