import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigate } from 'react-router-native'

export default function Login() {
    const navigate = useNavigate();
  return (
    <View>
      <Text>Login</Text>
      <Button title='click' onPress={()=>navigate('/')} ></Button>
    </View>
  )
}