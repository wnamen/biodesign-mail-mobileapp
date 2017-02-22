// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  emailDetailFields: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  emailTextField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 5000,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  emailLabel: {
    color: '#9ca4ab', 
    fontSize: 15
  },
  addressBookContainer: {
    backgroundColor: '#fafafa',
    flexDirection: 'column',
  },
  addressBookRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  addressTextContainer: {
    paddingLeft: 20
  },
  addressName: {
    color: '#525253',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 20
  },
  addressEmail: {
    fontSize: 12,
    lineHeight: 20,
    color: '#525253'
  }
})
