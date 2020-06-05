import React, {Component} from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AddContent from '../actions/index';
import {connect} from 'react-redux';
import { generateId } from '../utils/helpers'

class AddPost extends Component {

  state = {
    content:"",
    height: 40
  }

    _PostObj =() => ({
      id: generateId(),
      content: this.state.content,
    })

    handleInputChange = content => {
      this.setState(() => ({
        content
        }));
 };

  updateSize = (height) => {
    this.setState({
      height
    });
  }

handlePost = () => {
  post= this._PostObj();
  this.props.AddContent(post.id, post.content);
  this.props.navigation.navigate("Home");

  this.setState(() => ({
content: ""
}));

}
     render(){
       const {title, content, height} = this.state

       let newStyle = {
      height
    }
    return (

      <View>



      <TextInput
        style={styles.postcontent}
        //style={[newStyle]}
        lable= 'conent'
        placeholder = "Content"
        onChangeText = {this.handleInputChange}
        value={content}
        editable={true}
        multiline={true}
        //onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
      />

      <TouchableOpacity
      style={styles.submit}
      onPress={this.handlePost}
      >
      <Text>Submit</Text>
      </TouchableOpacity>

      </View>

    )
  }
}

const mapDispatchToProps = dispatch => ({
  AddContent: (id, content) => dispatch(AddContent(id, content))
});

export default connect(
  null, mapDispatchToProps
)(AddPost);

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
