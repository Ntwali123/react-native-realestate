import { Image, StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className='font-bold text-green-500 text-lg my-10 font-rubik-bold'>Welcome to ReState</Text>
      <Link className='my-4' href="/sign-in">Sign in</Link>
      <Link className='my-4' href="/explore">Explore</Link>
      <Link className='my-4' href="/profile">Profile</Link>
      <Link className='my-4' href="/properties/1">Property</Link>
    </View>
  );
}
