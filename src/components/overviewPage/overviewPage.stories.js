import React from 'react';
import { text } from '@storybook/addon-knobs';
import { addStoryInGroup, COMPOSITIONS } from '../../../.storybook/utils';
import { IconChevronDownSmallOutline } from '@teamleader/ui-icons';
import Button from '../button';
import ButtonGroup from '../buttonGroup';
import OverviewPage from './OverviewPage';
import { COLOR } from '../../constants';
import { TextBody } from '../typography';

export default {
  component: OverviewPage,
  title: addStoryInGroup(COMPOSITIONS, 'OverviewPage'),

  parameters: {
    backgrounds: {
      default: 'Neutral light',
      values: [
        { name: 'Neutral lightest', value: COLOR.NEUTRAL.LIGHTEST },
        { name: 'Neutral light', value: COLOR.NEUTRAL.LIGHT },
      ],
    },
    info: {
      propTables: false,
    },
  },
};

export const composition = () => (
  <OverviewPage>
    {header()}
    {body()}
  </OverviewPage>
);

composition.story = {
  name: 'Composition',
  parameters: {
    info: {
      propTables: [OverviewPage],
    },
  },
};

export const body = () => (
  <OverviewPage.Body>
    <TextBody>Here you can add arbitrary content.</TextBody>
  </OverviewPage.Body>
);

body.story = {
  name: 'Body',
  parameters: {
    info: {
      propTables: [OverviewPage.Body],
    },
  },
};

export const header = () => <OverviewPage.Header title={text('title', 'I am the overview page title')} />;

header.story = {
  name: 'Header',
  parameters: {
    info: {
      propTables: [OverviewPage.Header],
    },
  },
};

export const headerWithActions = () => (
  <OverviewPage.Header title={text('title', 'I am the overview page title')}>
    <ButtonGroup>
      <Button>Export</Button>
      <Button icon={<IconChevronDownSmallOutline />} iconPlacement="right">
        Import
      </Button>
      <Button level="primary">Add item</Button>
    </ButtonGroup>
  </OverviewPage.Header>
);

headerWithActions.story = {
  name: 'Header with actions',
  parameters: {
    info: {
      propTables: [OverviewPage.Header],
    },
  },
};
