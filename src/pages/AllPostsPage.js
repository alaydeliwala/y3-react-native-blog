// TODO: This page will be the "home" screen and contain a list of all the posts shown as PostPreviews
import {StyleSheet, ScrollView, FlatList} from 'react-native';
import {PostPreview} from '../components/PostPreview'
import {ViewPostPage} from './ViewPostPage'
import {samplePosts} from '../utils/SamplePostList'



export const AllPostsPage = () => {

    // TODO: Get posts from Firebase

    return(
      <ScrollView>
        <FlatList
          data={samplePosts}
          renderItem={({item}) => <PostPreview details={item}/>}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    )
  }