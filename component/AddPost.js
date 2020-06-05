import React, {Component} from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AddContent from '../actions/index';
import {connect} from 'react-redux';
import { generateId } from '../utils/helpers'

class AddPost extends Component {

  state = {
    content:'',
  };

 _PostObj = () => ({
     id: generateId(),
     content: this.state.content,
   });

   handleInputChange = content => {
     this.setState(() => ({
       content
    }));
 };

handlePost = () => {
  Post= this._PostObj();
  console.log("\npost =>", Post);
  //this.props.AddContent();
  // this.props.navigation.navigate("Home");

    this.setState(() => ({
      content: ""
    }));
   }

  render(){

    return (

      <View>

          <TextInput
            style={styles.postcontent}
            //style={[newStyle]}

            placeholder = "Content"
            onChangeText = {this.handleInputChange}
            value={this.state.content}
            //editable={true}
            //multiline={true}
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
  AddContent: (id, word) => dispatch(AddContent(id, word))
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
