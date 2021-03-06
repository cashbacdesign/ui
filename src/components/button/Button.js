import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import LoadingSpinner from '../loadingSpinner';
import { UITextBody, UITextDisplay, UITextSmall } from '../typography';
import cx from 'classnames';
import theme from './theme.css';

const textComponentMap = {
  tiny: UITextSmall,
  small: UITextBody,
  medium: UITextBody,
  large: UITextDisplay,
};

class Button extends PureComponent {
  getSpinnerColor() {
    const { color, inverse, level } = this.props;

    switch (level) {
      case 'secondary':
        return 'teal';
      case 'outline':
        return color === 'white' ? 'neutral' : color;
      case 'link':
        return inverse ? 'neutral' : 'aqua';
      default:
        return 'neutral';
    }
  }

  getSpinnerTint() {
    const { color, inverse, level } = this.props;

    switch (level) {
      case 'secondary':
        return 'darkest';
      case 'outline':
        return color === 'white' ? 'lightest' : 'darkest';
      case 'link':
        return inverse ? 'lightest' : 'dark';
      default:
        return 'lightest';
    }
  }

  handleMouseUp = (event) => {
    this.blur();
    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }
  };

  handleMouseLeave = (event) => {
    this.blur();
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  blur() {
    if (this.buttonNode.blur) {
      this.buttonNode.blur();
    }
  }

  render() {
    const {
      children,
      className,
      color,
      level,
      disabled,
      element,
      active,
      fullWidth,
      icon,
      iconPlacement,
      inverse,
      label,
      size,
      type,
      processing,
      ...others
    } = this.props;

    const classNames = cx(
      theme['reset-box-sizing'],
      theme['reset-font-smoothing'],
      theme['button-base'],
      theme['button'],
      theme[level],
      theme[size],
      {
        [theme['has-icon-only']]: (!children && !label) || (Array.isArray(children) && !children[0] && !label),
        [theme[color]]: level === 'outline',
        [theme['is-inverse']]: inverse && level === 'link',
        [theme['is-disabled']]: disabled,
        [theme['is-full-width']]: fullWidth,
        [theme['is-processing']]: processing,
        [theme['is-active']]: active,
      },
      className,
    );

    const props = {
      ...others,
      ref: (node) => {
        this.buttonNode = node;
      },
      className: classNames,
      disabled: element === 'button' ? disabled : null,
      element: element,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      type: element === 'button' ? type : null,
      'data-teamleader-ui': 'button',
    };

    const Text = textComponentMap[size];

    return (
      <Box {...props}>
        {icon && iconPlacement === 'left' && icon}
        {(label || children) && (
          <Text
            element="span"
            maxLines={1}
            marginLeft={icon && iconPlacement === 'left' && 2}
            marginRight={icon && iconPlacement === 'right' && 2}
          >
            {label}
            {children}
          </Text>
        )}
        {icon && iconPlacement === 'right' && icon}
        {processing && (
          <LoadingSpinner
            className={theme['spinner']}
            color={this.getSpinnerColor()}
            size={size === 'small' ? 'small' : 'medium'}
            tint={this.getSpinnerTint()}
          />
        )}
      </Box>
    );
  }
}

Button.propTypes = {
  /** The content to display inside the button. */
  children: PropTypes.any,
  /** A class name for the button to give custom styles. */
  className: PropTypes.string,
  /** The color which the button should have when 'level' is set to 'outline' */
  color: PropTypes.oneOf(['teal', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white']),
  /** A custom element to be rendered */
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Determines which kind of button to be rendered. */
  level: PropTypes.oneOf(['outline', 'primary', 'secondary', 'destructive', 'link', 'timer']),
  /** If true, component will be disabled. */
  disabled: PropTypes.bool,
  /** If true, component will be shown in an active state */
  active: PropTypes.bool,
  /** If true, component will take the full width available. */
  fullWidth: PropTypes.bool,
  /** The icon displayed inside the button. */
  icon: PropTypes.element,
  /** The position of the icon inside the button. */
  iconPlacement: PropTypes.oneOf(['left', 'right']),
  /** If true, component will be rendered in inverse mode (only for the levels "link" and "outline"). */
  inverse: PropTypes.bool,
  /** The textual label displayed inside the button. */
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave: PropTypes.func,
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp: PropTypes.func,
  /** If true, component will show a loading spinner instead of label or children. */
  processing: PropTypes.bool,
  /** Size of the button. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /** Type of the button element. */
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  color: 'teal',
  element: 'button',
  fullWidth: false,
  level: 'secondary',
  iconPlacement: 'left',
  inverse: false,
  processing: false,
  size: 'medium',
  type: 'button',
};

export default Button;
