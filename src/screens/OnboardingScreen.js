//rnef
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
  
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GamingImg from '../assets/images/misc/gaming.svg';
    

const OnboardingScreen = ({navigation}) => {
        return (
          <SafeAreaView
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}>
            <View style={{marginTop:20}}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'black',
                  fontFamily: 'Inter-Bold'
                }}>
                GAME LAST
              </Text>
            </View>
      
            <View 
            style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <GamingImg width={300} height={300} style={{ transform: [{ rotate: '-15deg' }] }} />
            </View>
      
            <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
              style={{
                backgroundColor: '#AD40AF',
                padding: 20,
                width: '90%',
                borderRadius: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom:50
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                  fontFamily: 'Roboto-MediumItalic',
                }}
              >Let's Begin</Text>
              <MaterialIcons
                name="arrow-forward-ios"
                size={22}
                color="#fff" />
      
            </TouchableOpacity>
      
          </SafeAreaView>
        );
}

export default OnboardingScreen

const styles = StyleSheet.create({})