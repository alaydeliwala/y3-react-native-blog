// TODO: Create a page with a form to submit a new Post
import { StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { PostForm } from '../components/PostForm';

export const WritePostPage = () => {

  return(
    <ScrollView>
      <Card style={styles.card}>
        <PostForm/>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    backgroundColor: 'oldlace',
  }
})