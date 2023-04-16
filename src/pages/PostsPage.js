import { StyleSheet, View, FlatList } from 'react-native';
import { Post } from '../components/Post';

export const PostsPage = () => {
    const posts = [{
        id: 1,
        title: "Hello World",
        body: "Lorem Ipsum",
        author: "Yasoob Rasheed",
        date: "April 15th, 2023"
    }]

    return (
        <View style={styles.container}>
            <Post details={posts[0]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
});
