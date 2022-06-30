import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'

const LOGIN_LOGO =  '/Users/markcrocker/Desktop/talk-to-me/assets/TalkLogo1.png'

const LoginScreen = ({navigation}) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={{uri: LOGIN_LOGO, height: 100, width: 100}}/>
      </View>
      <View>
      <LoginForm navigation={navigation} />
      </View>
    </View>
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
})

export default LoginScreen