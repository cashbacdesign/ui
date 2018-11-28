import React, { PureComponent } from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';
import { IconCloseBadgedSmallFilled, IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import Icon from '../icon';
import ValidationText from '../validationText';
import { COLOR } from '../../constants';
import theme from './theme.css';
import cx from 'classnames';

class Select extends PureComponent {
  getClearIndicatorStyles = base => {
    const { inverse } = this.props;

    return {
      ...base,
      color: inverse ? COLOR.TEAL.LIGHTEST : COLOR.TEAL.DARK,
      '&:hover': {
        color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
      },
      cursor: 'pointer',
      svg: {
        height: '14px',
        width: '14px',
      },
    };
  };

  getControlStyles = (base, { isDisabled, isFocused }) => {
    const { error, inverse, size } = this.props;

    const commonStyles = {
      ...base,
      minHeight: size === 'small' ? '30px' : size === 'medium' ? '36px' : '48px',
    };

    if (inverse) {
      return {
        ...commonStyles,
        backgroundColor: isDisabled ? COLOR.TEAL.DARK : COLOR.TEAL.NORMAL,
        '&:hover': {
          borderColor: error ? COLOR.RUBY.LIGHT : COLOR.TEAL.LIGHT,
        },
        borderColor: error
          ? COLOR.RUBY.LIGHT
          : isFocused
            ? COLOR.TEAL.LIGHT
            : isDisabled
              ? COLOR.TEAL.DARK
              : COLOR.TEAL.NORMAL,
        boxShadow: error ? `0 0 0 1px ${COLOR.RUBY.LIGHT}` : isFocused ? `0 0 0 1px ${COLOR.TEAL.LIGHT}` : 'none',
      };
    }

    return {
      ...commonStyles,
      backgroundColor: isDisabled ? COLOR.NEUTRAL.NORMAL : COLOR.NEUTRAL.LIGHTEST,
      '&:hover': {
        borderColor: error ? COLOR.RUBY.DARK : COLOR.NEUTRAL.DARKEST,
      },
      borderColor: error
        ? COLOR.RUBY.DARK
        : isFocused
          ? COLOR.NEUTRAL.DARKEST
          : isDisabled
            ? COLOR.NEUTRAL.NORMAL
            : COLOR.NEUTRAL.DARK,
      boxShadow: error ? `0 0 0 1px ${COLOR.RUBY.DARK}` : isFocused ? `0 0 0 1px ${COLOR.NEUTRAL.DARKEST}` : 'none',
    };
  };

  getGroupStyles = base => {
    const { inverse } = this.props;

    return {
      ...base,
      borderBottomColor: inverse ? COLOR.TEAL.LIGHT : COLOR.NEUTRAL.NORMAL,
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      '&:last-child': {
        borderWidth: 0,
      },
    };
  };

  getGroupHeadingStyles = base => {
    const { inverse } = this.props;

    return {
      ...base,
      color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
      fontSize: '12px',
      fontWeight: '700',
      letterSpacing: '0.6px',
      padding: '0 6px',
    };
  };

  getInput = base => {
    const { size, value } = this.props;

    return {
      ...base,
      marginLeft: value && value.length === 0 && size !== 'large' ? '6px' : '2px',
    };
  };

  getMenuStyles = base => ({
    ...base,
    backgroundColor: this.props.inverse ? COLOR.TEAL.NORMAL : COLOR.NEUTRAL.LIGHTEST,
    zIndex: 300,
  });

  getMultiValueStyles = base => {
    const { inverse } = this.props;

    return {
      ...base,
      borderColor: inverse ? COLOR.TEAL.DARK : COLOR.NEUTRAL.NORMAL,
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '4px',
      margin: '1px',
    };
  };

  getMultiValueLabelStyles = base => {
    const { inverse, size } = this.props;

    return {
      ...base,
      backgroundColor: inverse ? COLOR.TEAL.DARK : COLOR.NEUTRAL.LIGHT,
      borderRadius: 0,
      color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
      fontFamily: 'Inter-UI-Medium',
      fontSize: size === 'small' ? '12px' : '14px',
      lineHeight: size === 'small' ? '1' : '18px',
      padding: size === 'large' ? '9px' : '6px',
    };
  };

  getMultiValueRemoveStyles = base => {
    const { inverse } = this.props;

    return {
      ...base,
      backgroundColor: inverse ? COLOR.TEAL.DARK : COLOR.NEUTRAL.LIGHT,
      borderRadius: 0,
      color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
      '&:hover': {
        backgroundColor: inverse ? COLOR.TEAL.DARKEST : COLOR.NEUTRAL.NORMAL,
        color: inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
      },
      paddingLeft: '6px',
      paddingRight: '6px',
      transition: 'background-color .35s cubic-bezier(.4, 0, .2, 1)',
    };
  };

  getOptionStyles = (base, { isDisabled, isFocused, isSelected }) => {
    const commonStyles = {
      ...base,
      padding: '8px 12px',
    };

    if (this.props.inverse) {
      return {
        ...commonStyles,
        color: isDisabled ? COLOR.TEAL.LIGHT : isFocused ? COLOR.TEAL.DARK : COLOR.NEUTRAL.LIGHTEST,
        backgroundColor: isFocused ? COLOR.TEAL.LIGHT : isSelected ? COLOR.TEAL.DARK : COLOR.TEAL.NORMAL,
        '&:active': {
          backgroundColor: isDisabled ? COLOR.TEAL.NORMAL : COLOR.TEAL.DARK,
        },
      };
    }

    return {
      ...commonStyles,
      color: isDisabled ? COLOR.NEUTRAL.DARK : isSelected && !isFocused ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARK,
      backgroundColor: isFocused ? COLOR.NEUTRAL.NORMAL : isSelected ? COLOR.NEUTRAL.DARKEST : COLOR.NEUTRAL.LIGHTEST,
      '&:active': {
        backgroundColor: isDisabled ? COLOR.NEUTRAL.LIGHTEST : COLOR.NEUTRAL.NORMAL,
      },
    };
  };

  getPlaceholderStyles = (base, { isDisabled, isMulti }) => {
    const { inverse, size } = this.props;

    const commonStyles = {
      ...base,
      marginLeft: isMulti && size !== 'large' ? '6px' : '2px',
      marginRight: isMulti && size !== 'large' ? '6px' : '2px',
    };

    if (inverse) {
      return {
        ...commonStyles,
        color: isDisabled ? COLOR.TEAL.NORMAL : COLOR.TEAL.LIGHT,
      };
    }

    return {
      ...commonStyles,
      color: COLOR.NEUTRAL.DARKEST,
    };
  };

  getSingleValueStyles = base => ({
    ...base,
    color: this.props.inverse ? COLOR.NEUTRAL.LIGHTEST : COLOR.TEAL.DARKEST,
  });

  getValueContainerStyles = (base, { isMulti }) => {
    const { size } = this.props;

    return {
      ...base,
      minHeight: size === 'small' ? '28px' : size === 'medium' ? '34px' : '46px',
      padding: isMulti && size !== 'large' ? '0' : '0 4px',
    };
  };

  getStyles = () => ({
    clearIndicator: this.getClearIndicatorStyles,
    control: this.getControlStyles,
    group: this.getGroupStyles,
    groupHeading: this.getGroupHeadingStyles,
    input: this.getInput,
    menu: this.getMenuStyles,
    multiValue: this.getMultiValueStyles,
    multiValueLabel: this.getMultiValueLabelStyles,
    multiValueRemove: this.getMultiValueRemoveStyles,
    option: this.getOptionStyles,
    placeholder: this.getPlaceholderStyles,
    singleValue: this.getSingleValueStyles,
    valueContainer: this.getValueContainerStyles,
  });

  getClearIndicator = () => ({ innerProps }) => {
    const { inverse } = this.props;

    return (
      <Icon color={inverse ? 'teal' : 'neutral'} display="flex" tint={inverse ? 'lightest' : 'darkest'} {...innerProps}>
        <IconCloseBadgedSmallFilled />
      </Icon>
    );
  };

  getDropDownIndicator = () => () => {
    const { inverse } = this.props;

    return (
      <Icon
        alignItems="center"
        className={theme['dropdown-indicator']}
        color={inverse ? 'teal' : 'neutral'}
        display="flex"
        justifyContent="center"
        tint={inverse ? 'lightest' : 'darkest'}
      >
        <IconChevronDownSmallOutline />
      </Icon>
    );
  };

  render() {
    const { components, error, inverse, helpText, size, ...otherProps } = this.props;

    const boxProps = pickBoxProps(otherProps);
    const restProps = omitBoxProps(otherProps);

    const wrapperClassnames = cx(theme[`is-${size}`], {
      [theme['has-error']]: error,
      [theme['is-inverse']]: inverse,
    });

    return (
      <Box className={wrapperClassnames} {...boxProps}>
        <ReactSelect
          className={theme['select']}
          components={{
            ClearIndicator: this.getClearIndicator(),
            DropdownIndicator: this.getDropDownIndicator(),
            IndicatorSeparator: null,
            ...components,
          }}
          styles={this.getStyles()}
          {...restProps}
        />
        <ValidationText error={error} help={helpText} inverse={inverse} />
      </Box>
    );
  }
}

Select.propTypes = {
  /** Override default components with your own. Pass an object with correct the key and its replacing component */
  components: PropTypes.object,
  /** If true, it*/
  creatable: PropTypes.bool,
  /** The text string/element to use as error message below the input. */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The text string to use as help text below the input. */
  helpText: PropTypes.string,
  /** Boolean indicating whether the select should render as inverse. */
  inverse: PropTypes.bool,
  /** Size of the input element. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Selected option value(s) */
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),
};

Select.defaultProps = {
  creatable: false,
  inverse: false,
  size: 'medium',
};

export default Select;
