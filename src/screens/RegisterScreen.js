//rnfes
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FacebookSvg from '../assets/images/misc/facebook.svg';
import GoogleSvg from '../assets/images/misc/google.svg';
import RegSvg from '../assets/images/misc/registration.svg';
import TwitterSvg from '../assets/images/misc/twitter.svg';
import CustomeButton from '../components/CustomeButton';
import InputField from '../components/InputField';

const RegisterScreen = ({navigation}) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [dobLabel, setDobLabel] = useState('Date of Birth')

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <RegSvg
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
          Register !
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

        <Text
          style={{
            textAlign: 'center',
            color: '#666',
            marginBottom: 30,
          }}>
          Or, register with email ...
        </Text>

        <InputField
          label={'Full Name'}
          icon={
            <Icon
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />

        <InputField
          label={'Email Id'}
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
        />

        <InputField
          label={'Confirm Password'}
          icon={
            <Icon
              name="lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />

        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 30,
          }}>
          <Icon
            name="calendar-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          <TouchableOpacity onPress={() => setOpen(true) }>
            <Text style={{color:'#666', marginLeft:5, marginTop:5}}>
          {dobLabel}
            </Text>
          </TouchableOpacity>
        </View>

        <DatePicker
        modal
        open={open}
        date={date}
        mode={'date'}
        maximumDate={new Date('2005-01-01')}
        minimumDate={new Date('1980-01-01')}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          setDobLabel(date.toDateString())
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />

        <CustomeButton label={'register'} onPress={() => {}} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Already registered? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
