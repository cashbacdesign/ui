import React from 'react';
import { storiesOf } from '@storybook/react';
import { Store, State } from '@sambego/storybook-state';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { IconWarningBadgedMediumOutline } from '@teamleader/ui-icons';
import { Banner, Box, Button, ButtonGroup, COLORS, Dialog, DialogBase, Heading3, TextBody } from '../src';

const sizes = ['small', 'medium', 'large', 'fullscreen'];

const store = new Store({
  active: false,
});

const handleActiveToggle = () => {
  store.set({ active: !store.get('active') });
  console.log('handleActiveToggle');
};

const dialogBaseProps = {
  backdrop: select('backdrop', ['dark'], 'dark'),
  onEscKeyDown: handleActiveToggle,
  onOverlayClick: handleActiveToggle,
  size: select('size', sizes, 'medium'),
};

storiesOf('Dialogs', module)
  .addParameters({
    info: {
      propTablesExclude: [Box, Button, ButtonGroup, Banner, TextBody, Heading3, State],
    },
  })
  .add('DialogBase', () => {
    return (
      <Box>
        <Button onClick={handleActiveToggle} label="Open a dialog base" />
        <State store={store}>
          <DialogBase {...dialogBaseProps}>
            <Box padding={4}>
              <TextBody>Here you can add arbitrary content.</TextBody>
            </Box>
          </DialogBase>
        </State>
      </Box>
    );
  })
  .add('Dialog', () => {
    const passHeaderIcon = boolean('pass a headerIcon', false);

    return (
      <Box>
        <Button onClick={handleActiveToggle} label="Open a dialog" />
        <State store={store}>
          <Dialog
            headerColor={select('headerColor', COLORS, 'neutral')}
            headerIcon={passHeaderIcon && <IconWarningBadgedMediumOutline />}
            onCloseClick={handleActiveToggle}
            primaryAction={{
              label: text('primaryAction.label', 'Confirm'),
              onMouseUp: () => console.log('primaryAction.onMouseUp'),
            }}
            secondaryAction={{
              label: text('secondaryAction.label', 'Cancel'),
              onMouseUp: () => console.log('secondaryAction.onMouseUp'),
            }}
            tertiaryAction={{
              label: text('tertiaryAction.label', 'Read more'),
              onMouseUp: () => console.log('tertiaryAction.onMouseUp'),
            }}
            size={select('size', sizes, 'medium')}
            title={text('title', 'Dialog title')}
            {...dialogBaseProps}
          >
            <TextBody>Here you can add arbitrary content.</TextBody>
          </Dialog>
        </State>
      </Box>
    );
  });
