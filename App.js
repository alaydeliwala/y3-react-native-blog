import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AllPostsPage} from './src/pages/AllPostsPage';
import {ProfilePage} from './src/pages/ProfilePage';
import {WritePostPage} from './src/pages/WritePostPage';
import {ViewPostPage} from './src/pages/ViewPostPage';
import { NavigationContainer } from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen screen="allposts" name="All Posts Page" options={{headerShown:false}} component={HomeTabView} />
      <Tab.Screen screen="writepost" name="Write Post" component={WritePostPage} />
      <Tab.Screen screen="profile" name="Profile" component={ProfilePage} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeTabView() {
  return (

    <Stack.Navigator intialRouteName="All Posts">
        <Stack.Screen
          screen="home"
          name="Home"
          component={AllPostsPage}
        />
        <Stack.Screen
          screen="viewpost"
          name="View Post"
          component={ViewPostPage}
        />
      </Stack.Navigator>
  );
}
