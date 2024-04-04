//rnfes
import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import GoogleSvg from '../assets/images/misc/google.svg';
import FacebookSvg from '../assets/images/misc/facebook.svg';
import TwitterSvg from '../assets/images/misc/twitter.svg';
import LoginSvg from '../assets/images/misc/login.svg';
import CustomeButton from '../components/CustomeButton';
import InputField from '../components/InputField';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPa] = useState(null);

  const {login} = useContext(AuthContext)
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <LoginSvg
            height={300}
            width={300}
            style={{
              transform: [{rotate: '-5deg'}],
            }}
          />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login !
        </Text>


        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcon
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
        />

<InputField
          label={'Password'}
          icon={
            <Icon
              name="lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
          fieldButtonLabel={"Forgot"}
          fieldButtonFunction={() => {}}
        />
        
        <CustomeButton
          label={'Login'}
          onPress={()=> {
          login()
          }}
        />

        <Text
          style={{
            textAlign: 'center',
            color: '#666',
            marginBottom: 30,
          }}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <GoogleSvg height={24} width={24} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FacebookSvg height={24} width={24} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <TwitterSvg height={24} width={24} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', justifyContent:'center', marginBottom:30}}>
        <Text>New to the app? </Text>
        <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
          <Text style={{color:'#AD40AF', fontWeight:'700'}}>Register</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
