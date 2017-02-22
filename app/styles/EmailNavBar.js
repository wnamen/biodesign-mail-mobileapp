// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f4f4f4",
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  navButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navButtons: {
    paddingLeft: 20,
  },
  inboxButton: {
    backgroundColor: "white",
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "white",
    borderBottomWidth: 0.75,
    borderBottomColor: '#d6d7da',
  },
  inboxText: {
    color: '#525253',
    fontSize: 12,
    fontWeight: 'bold'
  }
})
