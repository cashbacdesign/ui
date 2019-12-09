import React from 'react';
import { select } from '@storybook/addon-knobs/react';
import { IconHelpBadgedMediumOutline } from '@teamleader/ui-icons';
import { Badge, Button, Link, StatusLabel, TextBody, TextDisplay, TextSmall, Tooltip } from '../../index';

const colors = ['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'inverse'];
const sizes = ['small', 'medium'];
const positions = ['horizontal', 'vertical', 'top', 'bottom', 'left', 'right'];

const TooltippedButton = Tooltip(Button);
const TooltippedBadge = Tooltip(Badge);
const TooltippedLink = Tooltip(Link);
const TooltippedStatusLabel = Tooltip(StatusLabel);
const TooltippedStrong = Tooltip('strong');

const textBodyTooltipContent = <TextBody>I am body sized tooltip text</TextBody>;
const textSmallTooltipContent = <TextSmall>I am small sized tooltip text</TextSmall>;

export default {
  title: 'Tooltip',

  parameters: {
    info: {
      propTablesExclude: [TextSmall, TextDisplay, TextBody],
    },
  },
};

export const basic = () => (
  <TooltippedButton
    tooltip={textSmallTooltipContent}
    tooltipColor={select('Color', colors, 'white')}
    tooltipPosition={select('Position', positions, 'horizontal')}
    tooltipSize={select('Size', sizes, 'medium')}
  >
    Hover me to see a tooltip
  </TooltippedButton>
);

export const withIcon = () => (
  <TextDisplay>
    <TooltippedStrong
      tooltip={textSmallTooltipContent}
      tooltipColor={select('Color', colors, 'white')}
      tooltipIcon={<IconHelpBadgedMediumOutline />}
      tooltipPosition={select('Position', positions, 'horizontal')}
      tooltipSize={select('Size', sizes, 'medium')}
    >
      Hover me
    </TooltippedStrong>
  </TextDisplay>
);

export const fromBadge = () => (
  <TextDisplay>
    I'm display text with a{' '}
    <TooltippedBadge
      tooltip={textSmallTooltipContent}
      tooltipColor={select('Color', colors, 'white')}
      tooltipPosition={select('Position', positions, 'horizontal')}
      tooltipSize={select('Size', sizes, 'medium')}
    >
      hover me
    </TooltippedBadge>{' '}
    tooltip action
  </TextDisplay>
);

export const fromButton = () => (
  <TooltippedButton
    tooltip={textBodyTooltipContent}
    tooltipColor={select('Color', colors, 'white')}
    tooltipPosition={select('Position', positions, 'horizontal')}
    tooltipSize={select('Size', sizes, 'medium')}
  >
    Hover me
  </TooltippedButton>
);

export const fromLink = () => (
  <TooltippedLink
    tooltip={textBodyTooltipContent}
    tooltipColor={select('Color', colors, 'white')}
    tooltipPosition={select('Position', positions, 'horizontal')}
    tooltipSize={select('Size', sizes, 'medium')}
    href="#"
    inherit={false}
  >
    Hover me
  </TooltippedLink>
);

export const fromStatusLabel = () => (
  <TooltippedStatusLabel
    tooltip={textSmallTooltipContent}
    tooltipColor={select('Color', colors, 'white')}
    tooltipPosition={select('Position', positions, 'horizontal')}
    tooltipSize={select('Size', sizes, 'medium')}
  >
    Hover me
  </TooltippedStatusLabel>
);

fromStatusLabel.story = {
  name: 'From StatusLabel',
};

export const fromInlineElements = () => (
  <TextBody>
    I'm body text with a{' '}
    <TooltippedStrong
      tooltip={textBodyTooltipContent}
      tooltipColor={select('Color', colors, 'white')}
      tooltipPosition={select('Position', positions, 'horizontal')}
      tooltipSize={select('Size', sizes, 'medium')}
    >
      hover me
    </TooltippedStrong>{' '}
    tooltip action
  </TextBody>
);

fromInlineElements.story = {
  name: 'From inline elements',
};
