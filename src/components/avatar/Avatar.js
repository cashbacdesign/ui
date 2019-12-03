import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AvatarAdd from './AvatarAdd';
import AvatarAnonymous from './AvatarAnonymous';
import AvatarImage from './AvatarImage';
import AvatarInitials from './AvatarInitials';
import AvatarOverlay from './AvatarOverlay';
import Box, { pickBoxProps, omitBoxProps } from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { colorsWithout } from '../../constants';

const colors = colorsWithout(['neutral']);

const hashCode = hexString => parseInt(hexString.substr(-5), 16);

const getColor = id => (id ? colors[Math.abs(hashCode(id)) % colors.length] : 'neutral');

class Avatar extends PureComponent {
  renderComponent = () => {
    const { creatable, imageUrl, fullName, id, ...others } = this.props;
    const propsWithoutBoxProps = omitBoxProps(others);

    if (creatable) {
      return <AvatarAdd {...propsWithoutBoxProps} />;
    }

    if (imageUrl) {
      return <AvatarImage image={imageUrl} imageAlt={fullName} {...propsWithoutBoxProps} />;
    }

    if (fullName && id) {
      return <AvatarInitials color={getColor(id)} name={fullName} {...propsWithoutBoxProps} />;
    }

    return <AvatarAnonymous {...propsWithoutBoxProps} />;
  };

  render() {
    const { className, editable, imageUrl, fullName, id, onImageChange, size, shape, ...others } = this.props;
    const avatarClassNames = cx(theme['avatar'], theme[`is-${size}`], theme[`is-${shape}`], className);
    const boxProps = pickBoxProps(others);

    return (
      <Box className={avatarClassNames} {...boxProps}>
        {this.renderComponent()}
        {editable && (size === 'large' || size === 'hero') && <AvatarOverlay onClick={onImageChange} />}
      </Box>
    );
  }
}

Avatar.propTypes = {
  /** If true, an add user icon will be shown. */
  creatable: PropTypes.bool,
  /** If true, an overlay will be shown with edit icon. */
  editable: PropTypes.bool,
  /** The image url to show as an avatar. */
  imageUrl: PropTypes.string,
  /** When no image available, avatar initials will be based on this string. */
  fullName: PropTypes.string,
  /** Expects a uuid to determine the avatar initials background color. */
  id: PropTypes.string,
  /** Callback function that is fired when user clicks the edit icon. */
  onImageChange: PropTypes.func,
  /** The shape of the avatar. */
  shape: PropTypes.oneOf(['circle', 'rounded']),
  /** The size of the avatar. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'hero']),
};

Avatar.defaultProps = {
  creatable: false,
  shape: 'circle',
  size: 'medium',
};

export default Avatar;
