import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';

export const Touchable = (props) => (
  <TouchableHighlight
    style={[ styles.wrapper, props.styles ]}
    {...props}>
    <View>
      {props.children}
    </View>
  </TouchableHighlight>
);

Touchable.propTypes = {
  children: PropTypes.any.isRequired,
  styles: PropTypes.object
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'lightcoral',
    padding: 20,
    borderRadius: 3
  },
  text: {
    color: '#FFF'
  }
});
