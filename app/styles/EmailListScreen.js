// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingLeft: 25,
    paddingVertical: 15,
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(0, 0, 0, 0.2)',
  },
  markerContainer: {
    borderRadius: 10,
    borderWidth: 0.5,
    backgroundColor: '#1cbd9d',
  },
  emailContainer: {
    flexDirection: 'column',
    width: 300
  },
  subjectContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingBottom: 5,
  },
  subjectTextContainer: {
    flex: 1,
    textAlign: 'left',
    fontWeight: '400',
    fontSize: 15,
    color: "#525253",
  },
  subjectTimeContainer: {
    flex: 1,
    textAlign: 'right',
    color: "#9ca4ab",
    fontSize: 12,

  },
  textContainer: {
    flex: 1,
    textAlign: 'left',
    fontSize: 12,
    fontWeight: '400',
    color: '#525253',
    lineHeight: 20,
  },
  subjectText2Container: {
    flex: 1,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 15,
    color: "#525253"
  },
  subjectTime2Container: {
    flex: 1,
    textAlign: 'right',
    color: '#2A9FD8',
    fontSize: 12,
  },
  text2Container: {
    flex: 1,
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#525253'
  },
  emailDeleteContainer: {
    position: 'absolute',
    backgroundColor: ['transparent', 'rgba(255, 255, 255, 0.9)'],
    borderRadius:5,
    padding: 15,
    paddingLeft: 101,
    right: 2,
    top: 10,
  },
  emailDeleteButton: {
    backgroundColor: '#e14646',
    padding: 10,
    borderRadius: 5,
  },
  emailDeleteText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold'
  }
})
