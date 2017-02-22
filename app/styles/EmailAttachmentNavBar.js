// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f4f4f4",
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  mailButton: {
    backgroundColor: "white",
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "white",
    borderBottomWidth: 0.75,
    borderBottomColor: '#d6d7da',
  },
  mailText: {
    color: '#525253',
    fontSize: 12,
    fontWeight: 'bold'
  },
  attachmentTitle: {
    color: '#525253',
    fontWeight: '600',
    fontSize: 18,
    paddingLeft: 55
  }
})
