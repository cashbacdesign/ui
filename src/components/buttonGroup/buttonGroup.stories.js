import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Store, State } from '@sambego/storybook-state';
import { IconAddMediumOutline } from '@teamleader/ui-icons';
import Button from '../button';
import ButtonGroup from './ButtonGroup';

const store = new Store({
  value: 'option2',
});

const handleChangeValue = (value, event) => {
  store.set({ value });
};

export default {
  component: ButtonGroup,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Button group'),
};

export const Normal = (args) => (
  <ButtonGroup {...args}>
    <Button label="Button 1" />
    <Button label="Button 2" />
    <Button icon={<IconAddMediumOutline />} />
  </ButtonGroup>
);

export const withActive = () => (
  <State store={store}>
    <ButtonGroup segmented value="option2" onChange={handleChangeValue} level="secondary">
      <Button label="Option 1" value="option1" />
      <Button label="Option 2" value="option2" />
      <Button label="Option 3" value="option3" />
    </ButtonGroup>
  </State>
);

withActive.story = {
  name: 'With active',
};
