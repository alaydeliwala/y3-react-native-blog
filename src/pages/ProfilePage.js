// TODO: Create a page to hold your users profile

import {View, Text, StyleSheet, Image} from 'react-native'
import {Card} from 'react-native-paper'

export const ProfilePage = () => {

  return(
    <View >
      <Card style={styles.container}>
        <Image 
          source={require('../../assets/jim.png')}  
          style={styles.profilePic}
        />
        <Text style={styles.name}> Jim Halpert </Text>
        <Text style={styles.hometown}> Scranton, PA </Text>
      </Card>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    margin: 20,
    flex: 1,
    backgroundColor: 'oldlace',
  }, 
  name:{
    flex: 1,
    padding: 2,
    fontSize: 20
  },
  hometown:{
    flex: 1,
    padding: 2,
    fontSize: 16
  },
  profilePic:{
    width: 100,
    height: 100,
    borderRadius: 200,
    alignSelf: "center",
    padding: 2,
    marginBottom: 5
  }
});