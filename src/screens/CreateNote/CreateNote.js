import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Button,
  ScrollView,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {Modalize} from 'react-native-modalize';
import styles from './CreateNote.style';
function CreateNote({navigation}) {
  const [noteTitle, setNoteTitle] = useState('');
  const [note, setNote] = useState('');
  const [editingTime, setEditingTime] = useState(null);
  const modalizeRef = useRef(null);

  const openModal = () => {
    modalizeRef.current?.open();
  };
  console.log(noteTitle, note);
  function dismissKeyboard() {
    Keyboard.dismiss();
  }
  function getCurrentTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    setEditingTime(hours + ':' + mins);
  }
  useEffect(() => {
    dismissKeyboard();
    getCurrentTime();
  }, []);
  return (
    <>
      <SafeAreaView style={styles.safeAreaCont}>
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.FlexGrowOne}>
          <ScrollView bounces={false} style={styles.FlexOne}>
            <View style={styles.topCont}>
              <View style={styles.topBarCont}>
                <View style={styles.arrowBackCont}>
                  <IonIcons
                    name="arrow-back-outline"
                    color="rgba(255,255,255,0.67)"
                    size={26}
                    onPress={() => navigation.goBack()}
                  />
                </View>

                <View style={styles.rightIconsCont}>
                  <MaterialCommunityIcons
                    name="pin-outline"
                    color="rgba(255,255,255,0.67)"
                    size={26}
                  />
                  <MaterialCommunityIcons
                    style={styles.topBarIconsMargin}
                    name="bell-plus-outline"
                    color="rgba(255,255,255,0.67)"
                    size={24}
                  />
                  <MaterialCommunityIcons
                    style={styles.topBarIconsMargin}
                    name="file-download-outline"
                    color="rgba(255,255,255,0.67)"
                    size={24}
                  />
                </View>
              </View>

              <TextInput
                style={styles.titleInput}
                placeholder="Title"
                placeholderTextColor="rgba(255,255,255,0.67)"
                selectionColor={'white'}
                onChangeText={(text) => setNoteTitle(text)}
              />
              <TextInput
                style={styles.noteInput}
                placeholder="Note"
                placeholderTextColor="rgba(255,255,255,0.67)"
                selectionColor={'white'}
                onChangeText={(text) => setNote(text)}
              />
            </View>
          </ScrollView>
          <View style={styles.aboveKeyboardCont}>
            <FontAwesome
              name="plus-square-o"
              color="rgba(255,255,255,0.67)"
              size={24}
              onPress={() => {
                dismissKeyboard();
                openModal();
              }}
            />
            <Text style={styles.editingTime}>Editing time: {editingTime}</Text>
            <Entypo
              name="dots-three-vertical"
              color="rgba(255,255,255,0.67)"
              size={24}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
      <Modalize
        ref={modalizeRef}
        modalHeight={270}
        modalStyle={styles.bottomModal}>
        <View style={styles.bottomModalCont}>
          <View style={styles.optionCont}>
            <Entypo
              name="dots-three-vertical"
              color="rgba(255,255,255,0.67)"
              size={22}
            />
            <Text style={styles.optionText}>Take picture</Text>
          </View>
          <View style={styles.optionCont}>
            <Entypo
              name="dots-three-vertical"
              color="rgba(255,255,255,0.67)"
              size={22}
            />
            <Text style={styles.optionText}>Take picture</Text>
          </View>
          <View style={styles.optionCont}>
            <Entypo
              name="dots-three-vertical"
              color="rgba(255,255,255,0.67)"
              size={22}
            />
            <Text style={styles.optionText}>Take picture</Text>
          </View>
          <View style={styles.optionCont}>
            <Entypo
              name="dots-three-vertical"
              color="rgba(255,255,255,0.67)"
              size={22}
            />
            <Text style={styles.optionText}>Take picture</Text>
          </View>
          <View style={styles.optionCont}>
            <Entypo
              name="dots-three-vertical"
              color="rgba(255,255,255,0.67)"
              size={22}
            />
            <Text style={styles.optionText}>Take picture</Text>
          </View>
        </View>
      </Modalize>
    </>
  );
}

export default CreateNote;
