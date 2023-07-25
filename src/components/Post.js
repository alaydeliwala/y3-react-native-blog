import {Card} from 'react-native-paper';
import {Text, StyleSheet, View, Pressable} from 'react-native';
import {db} from '../utils/Firebase';
import { useNavigation } from '@react-navigation/native';

export const Post = (props) => {
  const navigation = useNavigation();
  return(
      <Card style={styles.previewCard}>
        <Text style={styles.header}> {props.details.title} </Text>
        <View style={styles.row}>
            <Text style={styles.details}>{props.details.author}</Text>
            <Text style={styles.details}>{props.details.date.toDate().toDateString()}</Text>
          </View>
        <Text> {props.details.body} </Text>
        <Pressable style={styles.button} onPress={() => {deleteBlogPost(props.details.id, navigation)}}>
          <Text style={styles.buttonText}>Delete Post</Text>
        </Pressable>
      </Card>
  )
}

function deleteBlogPost(id, navigation){
  db.collection("posts").doc(id).delete().then(() => {
    console.log("Document successfully deleted!");
    navigation.goBack();
    
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
}

const styles = StyleSheet.create({
  previewCard: {
    padding: 15,
    margin: 10,
    backgroundColor: 'oldlace',
  },
  header:{
    fontSize: 20,
    color: 'coral',
    fontWeight: 700
  },
  row: {
    flexDirection: "row",
    flexWrap: 'wrap'
  },
  details:{
    flex: 1,
    textAlign: "center",
    color: 'coral',
    fontSize: 12,
    padding: 2
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin: 15,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
  buttonText:{
    color: 'white',
    fontSize: 12,
    fontWeight: 700
  }
})