import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/home/Header'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'
import { db } from '../firebase'



const HomeScreen = ({navigation}) => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    db.collectionGroup('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => (
          {id: doc.id, ...doc.data()})))
    })
  })
  return (
    <SafeAreaView >
    <Header navigation={navigation} />
    <Stories />
    
    <ScrollView>
    {posts.map ((post, index) => (
        <Post post={post} key={index}/>
    ))}
    </ScrollView>
    <BottomTabs icons={bottomTabIcons}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '',
        flex: 1,
    }
})

export default HomeScreen