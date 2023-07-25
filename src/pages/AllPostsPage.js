// TODO: This page will be the "home" screen and contain a list of all the posts shown as PostPreviews
import {ScrollView, FlatList} from 'react-native';
import {PostPreview} from '../components/PostPreview'
import {db} from '../utils/Firebase'
import {useState, useEffect} from 'react'


export const AllPostsPage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
      db.collection('posts').get().then((querySnapshot) => {
        let listOfPosts = [];
        querySnapshot.forEach((doc) => {
          let tmpdoc = doc.data()
          tmpdoc.id = doc.id
          listOfPosts.push(tmpdoc)
        })
        setPosts(listOfPosts)
      })
    });

    return(
      <ScrollView>
        <FlatList
          data={posts}
          renderItem={({item}) => <PostPreview details={item}/>}
        />
      </ScrollView>
    )
  }