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
  navTextContainer: {
    fontSize: 20,
    fontWeight: '500',
    color: '#525253'
  },
  closeButton: {
    backgroundColor: "white",
    paddingHorizontal: 17,
    paddingVertical: 9,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: "white",
    borderBottomWidth: 0.75,
    borderBottomColor: '#d6d7da',
  },
  closeText: {
    color: '#525253',
    fontSize: 12,
    fontWeight: 'bold'
  },
  sendButton: {
    backgroundColor: "#1cbd9d",
    paddingHorizontal: 17,
    paddingVertical: 9,
    borderColor: 'black',
    borderRadius: 3,
    shadowColor: 'gray',
  },
  sendText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold'
  }
})
