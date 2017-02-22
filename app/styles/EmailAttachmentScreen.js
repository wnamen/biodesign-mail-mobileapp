// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  imageContainer: {
    flex: 2,
    padding: 10,
    backgroundColor: "#f4f4f4",
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#fafafa",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
  },
  leftTab: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})
