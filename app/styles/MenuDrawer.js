// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48464E'
  },
  sectionTitles: {
    color: '#c2c7d0',
    backgroundColor: '#504D57',
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontWeight: '600'
  },
  contentContainer: {
    paddingBottom: 10,
  },
  contentRowContainer: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 15

  },
  contentSelectedRowContainer: {
    flexDirection: 'row',
    backgroundColor: '#1d79ec',
    paddingVertical: 8,
    paddingHorizontal: 15

  },
  sectionContent: {
    color: '#c2c7d0',
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 10,
  },
  groupTopContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#504D57',
  }
})
