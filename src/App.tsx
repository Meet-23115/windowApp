
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import "../global.css";
import { NativeRouter, Route, Routes } from 'react-router-native';

//screens
import Home from './screens/Home';
import Login from './screens/Login';


export default function App() {
  return (
    <NativeRouter>
    <View >
      <Routes>
      <Route  path="/" Component={Home} />
      <Route path="/Login" Component={Login} />
      </Routes>
     
    </View>
  </NativeRouter>
  );
}

