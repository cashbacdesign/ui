import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import ButtonGroup from '../buttonGroup';
import cx from 'classnames';
import theme from './theme.css';

class Message extends PureComponent {
  render() {
    const { className, children, image, imagePositioning, button, link, ...others } = this.props;

    const classNames = cx(theme['message'], theme[`is-image-${imagePositioning}`], className);
    const hasAction = Boolean(button || link);

    return (
      <Box data-teamleader-ui="message" className={classNames} {...others}>
        {image && <div className={theme['image']}>{image}</div>}
        <Box flex="2">
          {children}
          {hasAction && (
            <ButtonGroup justifyContent={imagePositioning === 'center' ? 'center' : 'flex-end'} marginTop={4}>
              {link}
              {button}
            </ButtonGroup>
          )}
        </Box>
      </Box>
    );
  }
}

Message.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  image: PropTypes.element,
  imagePositioning: PropTypes.oneOf(['center', 'left', 'right']),
  button: PropTypes.element,
  link: PropTypes.element,
};

Message.defaultProps = {
  imagePositioning: 'left',
};

export default Message;
