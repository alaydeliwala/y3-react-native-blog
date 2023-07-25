// TODO: A page where you can view the full post
import { View } from 'react-native';
import { Post } from '../components/Post';

export const ViewPostPage = ({route}) => {
    return(
      <View>
        <Post details={route.params}/>
      </View> 
    )
}
