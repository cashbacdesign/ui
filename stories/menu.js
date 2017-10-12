import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from 'storybook-addon-a11y';
import { withInfo } from '@storybook/addon-info';
import styles from '@sambego/storybook-styles';
import { Menu, MenuItem, MenuDivider } from '../components';
import { baseStyles, centerStyles } from '../.storybook/styles';

storiesOf('Menus', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(checkA11y)
  .addDecorator(styles({ ...baseStyles, ...centerStyles }))
  .add('Menu', () => (
    <Menu onSelect={action('select')} selectable={false} selected>
      <MenuItem value="foo" caption="Caption" />
      <MenuItem onClick={action('click')} value="bar" caption="Caption & Shortcut" shortcut="Ctrl + P" />
      <MenuItem caption="Disabled ..." disabled shortcut="Ctrl + P" />
      <MenuDivider />
      <MenuItem caption="Caption & Icon" icon="check" />
      <MenuItem caption="Caption, Icon & Shortcut" icon="list_bulleted" shortcut="Ctrl + P" />
      <MenuItem caption="Disabled ..." icon="flag" shortcut="Ctrl + P" disabled />
    </Menu>
  ));