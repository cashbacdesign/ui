import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { Island, TextBody } from '../components';
import styles from '@sambego/storybook-styles';

const colors = ['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white'];
const sizes = ['small', 'medium', 'large'];

storiesOf('Island', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(
    styles({
      fontFamily: 'ProximaNova-Semibold, trebuchet ms, Verdana, Arial, sans-serif',
    }),
  )
  .add('colors', () => (
    <div>
      {colors.map(color => (
        <Island color={color}>
          <TextBody>I am a {color} island.</TextBody>
        </Island>
      ))}
      <Island dark>
        <TextBody>I am a dark island.</TextBody>
      </Island>
    </div>
  ))
  .add('sizes', () => (
    <div>
      {sizes.map(size => (
        <Island size={size}>
          <TextBody>I am a {size} island.</TextBody>
        </Island>
      ))}
    </div>
  ));
