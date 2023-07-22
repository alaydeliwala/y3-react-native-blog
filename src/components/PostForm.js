// TODO: Add a form here that has spaces for the title, content & a submit button.
// TODO DB: DB is updated on form submission
import {Text, View, StyleSheet, TextInput, Pressable} from 'react-native';
import React from 'react';
export const PostForm = (props) => {

  const [content, onChangeContent] = React.useState("");
  const [title, onChangeTitle] = React.useState("");
  
  return(
    <View>
      <Text style={styles.helptext}> Title </Text>
       <TextInput
        editable
        onChangeText={text => onChangeTitle(text)}
        value={title}
        style={styles.textinput}
      />
      <Text style={styles.helptext}> Content </Text>
      <TextInput
        editable
        multiline
        numberOfLines={10}
        maxLength={40}
        onChangeText={text => onChangeContent(text)}
        value={content}
        style={styles.textinput}
      />
      <Pressable style={styles.button} onPress={() => {submitBlogPost(title, content)}}>
        <Text style={styles.buttonText}>Submit Post</Text>
    </Pressable>
    </View>
  )
}

function submitBlogPost(title, content){
  if (title == "" || content == ""){
    console.log("title or content is empty")
  }

  let author = "Jim Halpert"; 
  
  let post = {
    title: title,
    body: content,
    author: author,
    date: {} // TODO add firebase compatible date
  }

  console.log("connect me to firebase") 
  // TODO: Connect to Firebase

}

const styles = StyleSheet.create({
  helptext:{
    flex: 1,
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 20,
    color: 'coral',
    fontWeight: 700
  },
  textinput:{
    backgroundColor: "white",
    fontSize: 16,
    padding: 5,
    borderWidth : 2,
    borderColor: 'coral'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    margin: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'coral',
  },
  buttonText:{
    color: 'white',
    fontSize: 12,
    fontWeight: 700
  }
});