import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextSmall } from '../typography';
import Box from '../box';

export default class WarningText extends PureComponent {
  render() {
    const { children, className, inverse, ...others } = this.props;

    return (
      <Box
        className={className}
        alignItems="center"
        data-teamleader-ui="warning-text"
        display="flex"
        marginTop={2}
        {...others}
      >
        <TextSmall color="gold" element="span" marginLeft={1} tint={inverse ? 'light' : 'dark'}>
          {children}
        </TextSmall>
      </Box>
    );
  }
}

WarningText.propTypes = {
  /** The displayed text */
  children: PropTypes.node,
  /** The class name for the wrapper to give custom styles */
  className: PropTypes.string,
  /** Determines if the component will be rendered in inverse mode */
  inverse: PropTypes.bool,
};

WarningText.defaultProps = {
  children: 'This is the warning text',
  inverse: false,
};
