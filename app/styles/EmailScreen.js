// @flow

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  emailTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
    paddingHorizontal: 15,
    backgroundColor: "#fafafa",
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: "#525253",
    fontWeight: 'bold'
  },
  currentEmailRow: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subjectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subjectTextContainer: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    color: "#525253"
  },
  subjectIconContainer: {
    textAlign: 'left',
  },
  currentEmailSubtext: {
    fontWeight: '300',
    fontSize: 12,
    paddingBottom: 8,
    color: "#525253"
  },
  currentEmailSubtime: {
    fontWeight: '200',
    fontSize: 11,
    paddingBottom: 7,
    color: "#525253"
  },
  currentEmailTextContainer: {
    paddingTop: 10,
    paddingBottom: 5
  },
  currentEmailText: {
    color: "#525253",
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20
  },
  moreButton: {
    backgroundColor: '#9ca4ab',
    borderWidth: 0.1,
    borderRadius: 4,
  },
  attachmentTitleContainer: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  attachmentTitle: {
    color: "#525253",
    fontSize: 12,
    fontWeight: '300'
  },
  attachmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    backgroundColor: "#1cbd9d",
    paddingHorizontal: 7,
    paddingVertical: 9,
    borderRadius: 2,
  },
  attachmentText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#1E90FF',
    textAlign: 'left',
    paddingLeft: 15
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: "#fafafa",
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 45,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  tabText: {
    color: '#9ca4ab',
    fontSize: 15,
    fontWeight: '300',
    paddingHorizontal: 10
  }
})
