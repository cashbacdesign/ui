import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';

class WidgetBody extends PureComponent {
  render() {
    const { children, ...others } = this.props;

    return (
      <Box padding={4} {...others}>
        {children}
      </Box>
    );
  }
}

WidgetBody.propTypes = {
  /** The content to display inside the widget body. */
  children: PropTypes.any,
};

export default WidgetBody;
