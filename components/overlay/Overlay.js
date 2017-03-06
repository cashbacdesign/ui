import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { OVERLAY } from '../identifiers';

class Overlay extends Component {
  static propTypes = {
    active: PropTypes.bool,
    backdrop: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    lockScroll: PropTypes.bool,
    onClick: PropTypes.func,
    onEscKeyDown: PropTypes.func,
    theme: PropTypes.shape({
      active: PropTypes.string,
      backdrop: PropTypes.string,
      overlay: PropTypes.string,
    }),
  };

  static defaultProps = {
    lockScroll: true,
  };

  componentDidMount () {
    const { active, lockScroll, onEscKeyDown } = this.props;
    if (onEscKeyDown) {
      document.body.addEventListener('keydown', this.handleEscKey.bind(this));
    }
    if (active && lockScroll) {
      document.body.style.overflow = 'hidden';
    }
  }

  componentWillUpdate (nextProps) {
    if (this.props.lockScroll) {
      const becomingActive = nextProps.active && !this.props.active;
      const becomingUnactive = !nextProps.active && this.props.active;

      if (becomingActive) {
        document.body.style.overflow = 'hidden';
      }

      if (becomingUnactive && !document.querySelectorAll('[data-teamleader-ui="overlay"]')[1]) {
        document.body.style.overflow = '';
      }
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.active && !prevProps.active && this.props.onEscKeyDown) {
      document.body.addEventListener('keydown', this.handleEscKey.bind(this));
    }
  }

  componentWillUnmount () {
    if (this.props.active && this.props.lockScroll) {
      if (!document.querySelectorAll('[data-teamleader-ui="overlay"]')[1]) {
        document.body.style.overflow = '';
      }
    }

    if (this.props.onEscKeyDown) {
      document.body.removeEventListener('keydown', this.handleEscKey);
    }
  }

  handleEscKey = (e) => {
    if (this.props.active && this.props.onEscKeyDown && e.which === 27) {
      this.props.onEscKeyDown(e);
    }
  };

  handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  render () {
    const {
      active,
      className,
      backdrop,
      lockScroll, // eslint-disable-line
      theme,
      onEscKeyDown, // eslint-disable-line
      ...other
    } = this.props; // eslint-disable-line

    return (
      <div
        {...other}
        onClick={this.handleClick}
        className={classnames(
          theme.overlay,
          theme[backdrop],
          {
            [theme.active]: active,
          },
          className
        )}
      />
    );
  }
}

export default themr(OVERLAY)(Overlay);
export { Overlay };
