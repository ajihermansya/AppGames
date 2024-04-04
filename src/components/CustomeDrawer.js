import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import React, { useContext } from 'react';
import {
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

const CustomerDrawer = (props) => {
    const {logout } = useContext(AuthContext)
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#8200d6' }}>
                <ImageBackground
                    source={require('../assets/images/menu-bg.jpeg')}
                    style={{ padding: 20 }}>
                    <Image
                        source={require('../assets/images/user-profile.jpg')}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                    />
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                            fontFamily: 'Roboto-Medium',
                            marginBottom: 5,
                        }}>
                        Mohamad Aji Hermansya
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', fontFamily: 'Roboto-Regular' }}>
                            500 Coins
                        </Text>
                        <FontAwesome name="coins" size={14} color="white" />
                    </View>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="share-social-outline" size={22} />
                        <Text style={{ 
                            fontSize: 15, 
                            fontFamily: 'Roboto-Medium', 
                            marginLeft: 5 }}>Tell a Friend</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => { logout()}} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="log-out-outline" size={22} />
                        <Text style={{ 
                            fontSize: 15, 
                            fontFamily: 'Roboto-Medium', 
                            marginLeft: 5 }}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomerDrawer;
