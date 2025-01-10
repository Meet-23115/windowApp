import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigate } from 'react-router-native'

export default function Home() {
    const navigate = useNavigate();
  return (
    <View>
      <Text>Home</Text>
      <Button title='click' onPress={()=>navigate('/Login')} ></Button>
    </View>
  )
}