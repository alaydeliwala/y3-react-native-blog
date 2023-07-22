// TODO: Create a card that can show some preview about the Post
// TODO NAV: Navigate to a Post page with full post visible

import {Card} from 'react-native-paper';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const PostPreview = (props) => {
  const navigation = useNavigation();
  return(
    <TouchableOpacity onPress={() => navigation.navigate("View Post", props.details)}>
      <Card style={styles.previewCard}>
        <Text style={styles.header}> {props.details.title} </Text>
        <View style={styles.row}>
            <Text style={styles.details}>{props.details.author}</Text>
            <Text style={styles.details}>{props.details.date}</Text>
          </View>
        <Text> {getBodyPreview(props.details.body)} </Text>
      </Card>
    </TouchableOpacity>
  )
}

function getBodyPreview(body){
  let preview = body.substring(0, 100)
  preview = preview + "..."
  return preview
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
  }
})