import {StyleSheet, Platform} from 'react-native';
export default StyleSheet.create({
  safeAreaCont: {
    flex: 1,
    backgroundColor: '#202124',
  },
  topCont: {paddingHorizontal: 20, flex: 1},
  topBarCont: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  arrowBackCont: {flex: 1},
  rightIconsCont: {
    flex: 1,
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  topBarIconsMargin: {
    marginLeft: 25,
  },
  titleInput: {color: 'white', fontSize: 22},
  noteInput: {
    color: 'white',
    fontSize: 18,
    marginTop: Platform.OS === 'android' ? 0 : 15,
  },
  FlexGrowOne: {
    flexGrow: 1,
    backgroundColor: '#202124',
  },
  FlexOne: {
    flex: 1,
  },
  aboveKeyboardCont: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editingTime: {color: 'white'},
  bottomModal: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: '#212125',
  },
  bottomModalCont: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 270,
  },
  optionCont: {flexDirection: 'row', alignItems: 'center'},
  optionText: {
    marginLeft: 20,
    fontSize: 17,
    color: 'white',
    fontWeight: '600',
  },
});
