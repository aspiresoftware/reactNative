
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import Style from './Style';

const Title = props => {
  const { text, ...attributes } = props;

  return (
    <Text style={Style.Headertitle}>
      {text}
    </Text>
  );
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;