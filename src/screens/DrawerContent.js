import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export function DrawerContent(props) {
  const paperTheme = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: '#212125'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://noteup39fd195a01384f328ebc3f5f152b752d35643-dev.s3.eu-central-1.amazonaws.com/public/profilePictures/152714215_181505880088294_3905026331057617941_n.jpg',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>ozanx</Title>
                <Caption style={styles.caption}>Ozan Batuhan Kurucu</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Entypo name="light-bulb" color="#7E8286" size={size} />
              )}
              label="Notes"
              labelStyle={{color: 'white'}}
              onPress={() => {
                props.navigation.navigate('Notes');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Ionicons
                  name="notifications-outline"
                  color="#7E8286"
                  size={size}
                />
              )}
              label="Reminders"
              labelStyle={{color: 'white'}}
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <View style={styles.bottomHr} />
            <DrawerItem
              icon={({color, size}) => (
                <Feather name="plus" color="#7E8286" size={size} />
              )}
              label="Create new label"
              labelStyle={{color: 'white'}}
              onPress={() => {
                props.navigation.navigate('BookmarkScreen');
              }}
            />
            <View style={styles.bottomHr} />
            <DrawerItem
              icon={({color, size}) => (
                <Foundation name="archive" color="#7E8286" size={size} />
              )}
              label="Archive"
              labelStyle={{color: 'white'}}
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome name="trash-o" color="#7E8286" size={size} />
              )}
              label="Trash"
              labelStyle={{color: 'white'}}
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />
            <View style={styles.bottomHr} />
            <DrawerItem
              icon={({color, size}) => (
                <Feather name="settings" color="#7E8286" size={size} />
              )}
              label="Settings"
              labelStyle={{color: 'white'}}
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Feather name="help-circle" color="#7E8286" size={size} />
              )}
              label="Help and feedback"
              labelStyle={{color: 'white'}}
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
          </Drawer.Section>
          <Drawer.Section
            title={<Text style={{color: 'white'}}>Preferences</Text>}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.preference}>
                <Text style={{color: 'white'}}>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: 'white',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: 'white',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  bottomHr: {
    borderBottomColor: '#7E8286',
    borderBottomWidth: 0.3,
  },
});
