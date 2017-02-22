// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.75,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  emailContainer: {
    width: 270
  },
  profilePicture: {
    height: 55,
    width: 55
  },
  subjectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5
  },
  subjectTextContainer: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    color: "#525253"
  },
  subjectTimeContainer: {
    textAlign: 'right',
    color: "#9ca4ab",
    fontSize: 12,
    fontWeight: '300'
  },
  text: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: '400',
    color: '#525253',
    lineHeight: 20
  }
})
