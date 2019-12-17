import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { IconInfoBadgedSmallFilled, IconMarkerSmallOutline } from '@teamleader/ui-icons';
import { Icon, Input, Label, TextSmall, Tooltip } from '../../index';

const sizes = ['small', 'medium', 'large'];
const TooltippedIcon = Tooltip(Icon);

export default {
  title: 'Form elements/Label',

  parameters: {
    info: {
      propTablesExclude: [Input],
    },
  },
};

export const label = () => (
  <Label
    helpText={text('Help text', 'Optional')}
    htmlFor="input1"
    inverse={boolean('Inverse', false)}
    required={boolean('Required', false)}
    size={select('Size', sizes, 'medium')}
    connectedLeft={
      boolean('Toggle connected left', false) ? (
        <Icon>
          <IconMarkerSmallOutline />
        </Icon>
      ) : (
        undefined
      )
    }
    connectedRight={
      boolean('Toggle connected right', false) ? (
        <TooltippedIcon tooltip={<TextSmall>This is the label tooltip text</TextSmall>} tooltipSize="small">
          <IconInfoBadgedSmallFilled />
        </TooltippedIcon>
      ) : (
        undefined
      )
    }
  >
    Input label
    <Input id="input1" placeholder="I am the placeholder" />
  </Label>
);