import React, {Component} from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
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
    console.log("\n PostsList.js :Posts =>", posts);



    const SummaryCard = ({ id, content }) => (
    <TouchableOpacity>
      <Text>{content}</Text>
    </TouchableOpacity>
  );

    return  Object.values(posts).length > 0 ? (
            <View>
              <FlatList
                data={Object.values(posts)}
                renderItem={({ item }) => (
                  <SummaryCard
                    id = {item.id}
                    content={item.content}
                  />
                )}
                keyExtractor={(item, index) => item.content}
              />
            </View>
          ) : (
            <View>
              <Text>You don't have any decks yet.</Text>
              <Text>Add Decks Below!</Text>
            </View>
          );

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
