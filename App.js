import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Container, Content, Input, Item, Button, Icon, CheckBox} from 'native-base';



class App extends React.Component {
    
  constructor(props) {
    
    super(props)
    
    this.state = {
      todo : [
        {id: 0, task : 'Work', isChecked: false},
        {id: 1, task : 'Swim', isChecked: false},
        {id: 2, task : 'Study', isChecked: false},
        {id: 3, task : 'Sleep', isChecked: false},
        {id: 4, task : 'Run', isChecked: false}
      ],
 
      Holder: '',
      status:'add',
      id_update:0
    }
 
  }

add_todo=()=>{

   //Adding Items To Array.
   this.state.todo.push({id : 5, task : this.state.Holder});
   this.setState({Holder:''})
}

onDelete=(deleteItem)=>{
  const {todo} = this.state
  const filtercheck = todo.filter(function(item){return item.id != deleteItem.id})
  this.setState({todo:filtercheck})
}

check=(id)=>{
  let index = this.state.todo.findIndex((x)=> x.id == id)
  this.setState((state)=>{
    if (state.todo[index].isChecked==false){
      return state.todo[index].isChecked = true
    }else{
      return state.todo[index].isChecked = false
    }
  })
}

update_todo=()=>{
  const array = [...this.state.todo]
 array[this.state.id_update].task = this.state.Holder
 this.setState({todo : array, Holder:"", status:"add"})
 
}
onUpdate=(item,id)=>{
  
  this.setState({id_update:id, Holder : item.task,status : 'update'})

}

    render() {


        
        return (

        <Container>
        <Content>
          <View style={styles.add_todo}>
          <Item regular style={styles.input}>
          <Input placeholder='New Todo' onChangeText={(text)=>{this.setState({Holder:text})}} value={this.state.Holder}/>
          </Item>
          {this.state.status=='add'? <Button success onPress={()=> this.add_todo()} style={styles.button}><Text> ADD </Text></Button> 
          :
          <Button success onPress={()=> this.update_todo()} style={styles.button}><Text> UPDATE </Text></Button> }
          </View>
          
          

          <View>
                {this.state.todo.map((item, index) => {
                  
                    return (
                        <View key={item.id} style={styles.item} >
                            <CheckBox onPress={()=> this.check(item.id)} checked={item.isChecked} style={styles.CheckBox} />
                            <Text style={styles.list}>{item.task}</Text> 
                            <Icon onPress={()=>this.onUpdate(item,item.id)} name="pen" type="FontAwesome5" style={styles.pen}/>
                            <Icon onPress={()=>this.onDelete(item)} name="trash" style={styles.trash}/>
                        </View>
                    )
                    
                })} 
          </View>

        </Content>
      </Container>
        )
    }
}

const styles = StyleSheet.create({
  item: {
    padding:10,
    marginVertical: 2,
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  input: {
    flex:8,
    height: 50,
    marginRight:15
  },
  button : {
    flex:2,
    height: 50,
    justifyContent: "center"
  },
  add_todo : {
    flexDirection: "row",
    margin: 10,
    paddingTop : 10,
    paddingBottom : 30
  },
  list : {
    flex: 8,
    marginStart: 30
  },
  CheckBox : {
  },
  trash : {
    color: "red",
  },
  pen : {
    fontSize: 20,
    marginRight:20,
    marginTop: 3,
    color : "skyblue"
  }
})


export default App;