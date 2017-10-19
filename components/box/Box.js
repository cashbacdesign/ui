import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

const spacings = [0, 1, 2, 3, 4, 5, 6, 7, 8];

class Box extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    element: PropTypes.node,
    marginBottom: PropTypes.oneOf(spacings),
    marginTop: PropTypes.oneOf(spacings),
  };

  static defaultProps = {
    element: 'div',
    marginBottom: 0,
    marginTop: 0,
  };

  render() {
    const { children, className, element, marginBottom, marginTop, ...others } = this.props;

    const classNames = cx(
      theme['box'],
      {
        [theme[`margin-bottom-${marginBottom}`]]: marginBottom > 0,
        [theme[`margin-top-${marginTop}`]]: marginTop > 0,
      },
      className,
    );

    const Element = element;

    return (
      <Element className={classNames} {...others}>
        {children}
      </Element>
    );
  }
}

export default Box;
