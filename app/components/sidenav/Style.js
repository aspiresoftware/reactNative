'use strict';
import { StyleSheet } from 'react-native';

import Color from './../../styles/color';

const fontSize = 14;
const iconSize = 22;
const paddingSmall = 16;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white
  },
  navItemStyle: {
    padding: paddingSmall,
    fontSize: fontSize,
    fontWeight: 'bold'
  },
  sectionHeadingStyle: {
    padding: paddingSmall,
    color: Color.text_medium,
    fontSize: fontSize
  },
  navSectionStyle: {
    flexDirection: 'row',
    alignItems: 'center'
    // flexWrap:'wrap'
  },
  divider: {
    backgroundColor: Color.background_medium
  },
  textContainer: {},
  iconCotainer: {},
  badgeContainer: {},
  icon: {
    fontSize: iconSize,
    lineHeight: iconSize,
    fontWeight: 'bold',
    color: Color.secondary,
    paddingHorizontal: paddingSmall
  },
  headerContainer: {
    backgroundColor: Color.background_dark
  },
  headerSubtitleContainer: {
    marginLeft: paddingSmall,
    marginBottom: paddingSmall
  },
  image: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderColor: Color.text_light,
    borderRadius: 65,
    margin: paddingSmall
  },
  headerText: {
    color: Color.text_light,
    fontSize: fontSize
  },
  footerContainer: {
    padding: 6,
    paddingHorizontal: paddingSmall,
    backgroundColor: Color.background_dark
  },
  footerText: {
    color: Color.text_light,
    fontSize: fontSize
  }
});
