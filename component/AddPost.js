import React, {Component} from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AddContent from '../actions/index';

class AddPost extends Component {

  state = {
    title:'',
    content:'',
    height: 40
  }
  updateSize = (height) => {
    this.setState({
      height
    });
  }

handlePost = () => {
  this.AddContent();
  this.setState({
    title:"",
    content:"",
  })


}
     render(){
       const {title, content, height} = this.state

       let newStyle = {
      height
    }
    return (

      <View>

      <TextInput
        style={styles.titleBox}
        lable= 'title'
        placeholder = "Enter the title"
        onChangeText={title => this.setState({title})}
        value={title}
        />

      <TextInput
        style={styles.postcontent}
        //style={[newStyle]}
        lable= 'conent'
        placeholder = "Content"
        onChangeText={content => this.setState({content})}
        value={content}
        editable={true}
        multiline={true}
        //onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
      />

      <TouchableOpacity
      style={styles.submit}
      onPress={()=>this.handlePost}
      >
      <Text>Submit</Text>
      </TouchableOpacity>

      </View>

    )
  }
}
export default AddPost;

const styles= StyleSheet.create({

  titleBox:{
    fontSize: 15,
    margin: 30,
    marginBottom: 5,
    padding: 10,
    borderColor: "#000000",
    borderWidth: 1,
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 10,
  },
  postcontent:{
    fontSize: 20,
    margin: 30,
    marginTop: 10,
    padding: 10,
    borderColor: "#000000",
    borderWidth: 1,
    backgroundColor: "#fff",
    height: 120,
    borderRadius: 10,
  },
  submit:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }

})
