import { StyleSheet, Text, View } from 'react-native';

export const Post = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.details.title}</Text>
            <Text>{props.details.body}</Text>
            <Text>{props.details.author}</Text>
            <Text>{props.details.date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
});