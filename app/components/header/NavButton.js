import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native";

import Style from './Style';

const NavButton = props => {
  let _openNavigation = () => {
    props.navigation.navigate("DrawerToggle");
  };
  return (
    <TouchableOpacity onPress={_openNavigation}>
      <Icon name="menu" style={Style.navMenuIcon} />
    </TouchableOpacity>
  );
};

export default NavButton;
