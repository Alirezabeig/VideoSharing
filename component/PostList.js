import React, {Component} from 'react';
import { Text, View, FlatList } from 'react-native';
import {receiveContent} from '../actions/index';
import {connect} from 'react-redux';
import {retrievePosts } from '../utils/api'

class PostList extends Component {

  componentDidMount(){
    retrievePosts()
    .then( posts => this.props.receiveContent(posts))
  }

  render(){

    const {posts} = this.props;
    console.log("\n Posts List :Posts =>", posts);
    return (

      <View>


              <Text >
                The content
              </Text>



          
      </View>
    )
  }
}
const mapStateToProps = posts => ({
  posts
});

const mapDispatchToProps = dispatch => ({
  receiveContent: posts => dispatch(receiveContent(posts))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
