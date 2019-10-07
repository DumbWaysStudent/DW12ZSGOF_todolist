import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Container, Content, Input, Item, Button, Icon} from 'native-base';



class App extends React.Component {
    
  constructor(props) {
    
    super(props)
 
    this.state = {
      todo : [
        {id: 0, task : 'Work'},
        {id: 1, task : 'Swim'},
        {id: 2, task : 'Study'},
        {id: 3, task : 'Sleep'},
        {id: 4, task : 'Run'}
      ],
 
      Holder: ''
 
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
    render() {


        
        return (

        <Container>
        <Content>
          <View style={styles.add_todo}>
          <Item regular style={styles.input}>
          <Input placeholder='New Todo' onChangeText={(text)=>{this.setState({Holder:text})}} value={this.state.Holder}/>
          </Item>
          <Button success onPress={()=> this.add_todo()} style={styles.button}><Text> ADD </Text></Button>
          </View>
          
          

          <View>
                {this.state.todo.map((item, index) => {
                  
                    return (
                        <View key={item.id} style={styles.item} >
                            <Text style={styles.list}>{item.task}</Text> 
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
  },
  list : {
    flex: 5
  },
  trash : {
    color: "red",
  }
})


export default App;