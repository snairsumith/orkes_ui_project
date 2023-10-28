import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const profileStyle = StyleSheet.create({
  profileBoxContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    padding: 15,
    backgroundColor: colors.white,
    shadowColor: '#8f8f8f',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
    shadowColor: '#060606',
    borderRadius: 10,
  },
  contentContainer: {
    flexShrink: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column',
  },
  profileImage: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  titleText: {
    color: colors.black,
    fontWeight: '700',
    flexShrink: 1,
  },
  dateText: {
    color: colors.gray,
    fontStyle: 'normal',
    fontWeight: '400',
  },
});
