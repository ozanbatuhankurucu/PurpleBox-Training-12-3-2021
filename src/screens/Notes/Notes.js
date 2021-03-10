import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Avatar} from 'react-native-paper';
import GoogleLogo from '../..//assets/GoogleLogo.png';
//StyleSheet files
import styles from './Notes.style';

function Notes({navigation}) {
  //SafeAreaView overflow from the top screen of phone
  console.log(styles);
  return (
    <SafeAreaView style={styles.safeAreaCont}>
      <View style={styles.searchBoxTopCont}>
        <View style={styles.searchBoxCont}>
          <View style={styles.drawerIconCont}>
            <Feather
              name="menu"
              color="white"
              size={24}
              onPress={() => navigation.toggleDrawer()}
            />
          </View>
          <View style={styles.searchNotesCont}>
            <Text style={styles.searchNotesText}>Search your notes</Text>
          </View>
          <View style={styles.changeListTypeCont}>
            <Foundation name="list" color="rgba(255,255,255,0.67)" size={25} />
          </View>
          <View style={styles.avatarImageCont}>
            <Avatar.Image
              size={30}
              source={{
                uri:
                  'https://noteup39fd195a01384f328ebc3f5f152b752d35643-dev.s3.eu-central-1.amazonaws.com/public/profilePictures/152714215_181505880088294_3905026331057617941_n.jpg',
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.tabBarCont}>
        <AntDesign
          name="checksquareo"
          color="rgba(255,255,255,0.67)"
          size={25}
        />
        <FontAwesome
          style={styles.bottomBarIconsMargin}
          name="paint-brush"
          color="rgba(255,255,255,0.67)"
          size={25}
        />
        <FontAwesome
          style={styles.bottomBarIconsMargin}
          name="microphone"
          color="rgba(255,255,255,0.67)"
          size={25}
        />
        <FontAwesome
          style={styles.bottomBarIconsMargin}
          name="image"
          color="rgba(255,255,255,0.67)"
          size={25}
        />
        <View style={styles.addNoteBtnTopCont}>
          <TouchableOpacity
            style={styles.addNoteBtnCont}
            onPress={() => navigation.navigate('Create Note')}>
            <Image style={styles.googleAddImage} source={GoogleLogo} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Notes;
