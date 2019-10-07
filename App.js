import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


class App extends React.Component {
    
    constructor() {
        super();
    }

    render() {


        const todo = [
          'work',
          'swim',
          'study',
          'sleep',
          'run'
        ];
        return (
 

          <View >
                {todo.map((item, index) => {
                    return (
                        <View key={index} style={styles.item}>
                            <Text >{item}</Text>
                        </View>
                    )
                })} 
          </View>
        )
    }
}

const styles = StyleSheet.create({
  item: {
    padding:10,
    marginVertical: 2,
    borderBottomWidth: 2,
  },
})


export default App;