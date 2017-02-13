import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { BUTTON } from '../identifiers';
import FontIcon from '../font_icon';

class Button extends Component {
  static propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    flat: PropTypes.bool,
    floating: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    label: PropTypes.string,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    primary: PropTypes.bool,
    processing: PropTypes.bool,
    raised: PropTypes.bool,
    theme: PropTypes.shape({
      accent: PropTypes.string,
      button: PropTypes.string,
      flat: PropTypes.string,
      floating: PropTypes.string,
      icon: PropTypes.string,
      inverse: PropTypes.string,
      mini: PropTypes.string,
      neutral: PropTypes.string,
      primary: PropTypes.string,
      raised: PropTypes.string,
      rippleWrapper: PropTypes.string,
      toggle: PropTypes.string,
    }),
    type: PropTypes.string,
  };

  static defaultProps = {
    accent: false,
    className: '',
    flat: false,
    primary: false,
    processing: false,
    type: 'button',
  };

  getLevel = () => {
    if (this.props.primary) {
      return 'primary';
    }
    if (this.props.accent) {
      return 'accent';
    }
    return 'neutral';
  };

  getShape = () => {
    if (this.props.raised) {
      return 'raised';
    }
    if (this.props.floating) {
      return 'floating';
    }
    return 'flat';
  };

  getState = () => {
    if (this.props.processing) {
      return 'processing';
    }
    return '';
  };

  handleMouseUp = (event) => {
    this.buttonNode.blur();
    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }
  };

  handleMouseLeave = (event) => {
    this.buttonNode.blur();
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  render () {
    const {
      children,
      className,
      href,
      icon,
      label,
      theme,
      type,
      processing,
      ...others
    } = this.props;

    const element = href ? 'a' : 'button';
    const level = this.getLevel();
    const shape = this.getShape();
    const state = this.getState();

    const classes = classnames(
      theme.button,
      {
        [theme[level]]: true,
        [theme[shape]]: true,
        [theme[state]]: true,
      },
      className
    );

    const props = {
      ...others,
      href,
      ref: (node) => {
        this.buttonNode = node;
      },
      className: classes,
      disabled: this.props.disabled,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      type: !href ? type : null,
      'data-teamleader-ui': 'button',
    };

    return React.createElement(element, props,
      icon && !processing ? <FontIcon className={theme.icon} value={icon} /> : null,
      processing ? <FontIcon className={theme.icon} value='spinner8' /> : null,
      label,
      children
    );
  }
}

export default themr(BUTTON)(Button);
export { Button };
