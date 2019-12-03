import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import AvatarOverlay from './AvatarOverlay';

class AvatarImage extends PureComponent {
  render() {
    const { children, editable, image, imageAlt, imageClassName, onImageChange, size, ...others } = this.props;

    return (
      <div className={theme['avatar-image']} {...others} data-teamleader-ui="avatar-image">
        <img alt={imageAlt} src={image} className={cx(theme['image'], imageClassName)} />
        {editable && (size === 'large' || size === 'hero') && <AvatarOverlay onClick={onImageChange} />}
        {children && <div className={theme['children']}>{children}</div>}
      </div>
    );
  }
}

AvatarImage.propTypes = {
  /** Component that will be placed top right of the avatar image. */
  children: PropTypes.any,
  /** An image source or an image element. */
  image: PropTypes.string,
  /** An alternative text for the image element. */
  imageAlt: PropTypes.string,
  /** A class name for the image to give custom styles. */
  imageClassName: PropTypes.string,
};

export default AvatarImage;
