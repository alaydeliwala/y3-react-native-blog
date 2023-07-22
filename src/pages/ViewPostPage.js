// TODO: A page where you can view the full post
import { StyleSheet, View, FlatList } from 'react-native';
import { Post } from '../components/Post';

export const ViewPostPage = ({route, navigation}) => {
    return(
      <View>
        <Post details={route.params}/>
      </View> 
    )
}

const styles = StyleSheet.create({
    container: {
    },
});
