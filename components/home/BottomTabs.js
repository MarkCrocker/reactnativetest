import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'



export const bottomTabIcons = [
    {
        name: 'Home',
        active:
            'https://img.icons8.com/fluency-systems-filled/144/home.png',
        inactive:
        'https://img.icons8.com/fluency-systems-regular/48/home.png'
    },
    {
        name: 'Search',
        active:
            'https://img.icons8.com/ios-filled/500/search--v1.png',
            inactive:
            'https://img.icons8.com/ios/500/search--v1.png'
    },
    {
        name: 'Reels',
        active:
            'https://img.icons8.com/ios-filled/50/instagram-reel.png',
            inactive:
            'https://img.icons8.com/ios/500/instagram-reel.png'
    },
    {
        name: 'Shop',
        active:
            'https://img.icons8.com/fluency-systems-filled/48/shopping-bag-full.png',
            inactive:
            'https://img.icons8.com/fluency-systems-regular/48/shopping-bag-full.png'
        },
    {
        name: 'Profile',
        active:
            'https://randomuser.me/api/portraits/lego/6.jpg',
            inactive:
            'https://randomuser.me/api/portraits/lego/6.jpg'
    },
]

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive}} 
        style={[styles.icon, 
        icon.name === 'Profile' ? styles.profilePic() : null,
        activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab) : null,
        ]} />
        </TouchableOpacity>
    )
  return (
    <View style={styles.wrapper}>
        <Divider width={1} orientation='vertical' />
    <View style={styles.container}>
     {icons.map((icon, index)=> (
        <Icon key={index} icon={icon} />
     ))}
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        zindex: 999,
        backgroundColor: '#ffffff'
        
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 1,
        paddingTop: 10,
    },

    icon: {
        width: 30,
        height: 30,
    },

    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor: '#fff',
    }),
})  

export default BottomTabs