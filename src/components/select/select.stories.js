import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { boolean, select, number, text } from '@storybook/addon-knobs';
import { Avatar, Box, Label, Select, AsyncSelect, TextBody } from '../../index';
import { customOptions, groupedOptions, options } from '../../static/data/select';

const sizes = ['small', 'medium', 'large'];

/* eslint react/prop-types: 0 */
const CustomOption = ({ children, data, innerProps, isFocused, isSelected, isDisabled, selectProps }) => {
  const boxStyles = {
    backgroundColor: isFocused ? '#e4e4e6' : isSelected ? '#82828c' : '#fff',
    '&:active': {
      backgroundColor: isDisabled ? '#fff' : '#e4e4e6',
    },
  };

  const textStyles = {
    color: isDisabled ? '#c0c0c4' : isSelected && !isFocused ? '#fff' : '#344b63',
  };

  return (
    <Box paddingVertical={2} paddingHorizontal={2} display="flex" alignItems="center" {...innerProps} style={boxStyles}>
      <Avatar imageUrl={data.avatar} size="tiny" marginRight={2} />
      <TextBody style={textStyles} maxLines={selectProps.truncateOptionText ? 1 : undefined}>
        {children}
      </TextBody>
    </Box>
  );
};

export default {
  component: Select,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/Select'),

  parameters: {
    info: {
      propTablesExclude: [Label],
    },
  },
};

export const basic = () => (
  <Select
    closeMenuOnSelect={boolean('Close menu on select', true)}
    creatable={boolean('creatable', false)}
    inverse={boolean('Inverse', false)}
    isClearable={boolean('Clearable', false)}
    isDisabled={boolean('Disabled', false)}
    isMulti={boolean('Multi select', false)}
    isSearchable={boolean('Searchable', false)}
    options={options}
    placeholder="Select your favourite(s)"
    size={select('Size', sizes, 'medium')}
    truncateOptionText={boolean('Truncate option text', false)}
    hideSelectedOptions={boolean('Hide selected options', false)}
    menuWidth={text('Menu width', undefined)}
    error={text('error', '')}
    helpText={text('helpText', '')}
    success={text('success', '')}
    warning={text('warning', '')}
    width={text('width', undefined)}
  />
);

export const grouped = () => (
  <Select
    closeMenuOnSelect={boolean('Close menu on select', true)}
    creatable={boolean('creatable', false)}
    inverse={boolean('Inverse', false)}
    isClearable={boolean('Clearable', false)}
    isDisabled={boolean('Disabled', false)}
    isMulti={boolean('Multi select', false)}
    isSearchable={boolean('Searchable', false)}
    options={groupedOptions}
    placeholder="Select your favourite(s)"
    size={select('Size', sizes, 'medium')}
    truncateOptionText={boolean('Truncate option text', false)}
    hideSelectedOptions={boolean('Hide selected options', false)}
    error={text('error', '')}
    helpText={text('helpText', '')}
    success={text('success', '')}
    warning={text('warning', '')}
    width={text('width', undefined)}
  />
);

export const customOption = () => (
  <Select
    closeMenuOnSelect={boolean('Close menu on select', true)}
    components={{
      Option: CustomOption,
    }}
    creatable={boolean('creatable', false)}
    inverse={boolean('Inverse', false)}
    isClearable={boolean('Clearable', false)}
    isDisabled={boolean('Disabled', false)}
    isMulti={boolean('Multi select', false)}
    isSearchable={boolean('Searchable', false)}
    options={customOptions}
    placeholder="Select your favourite(s)"
    size={select('Size', sizes, 'medium')}
    truncateOptionText={boolean('Truncate option text', false)}
    hideSelectedOptions={boolean('Hide selected options', false)}
    error={text('error', '')}
    helpText={text('helpText', '')}
    success={text('success', '')}
    warning={text('warning', '')}
    width={text('width', undefined)}
  />
);

export const async = () => {
  const loadOptions = (searchTerm, pageSize = 10, pageNumber = 1) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const options = [];
        for (let i = 0; i < pageSize; i += 1) {
          const optionNr = (pageNumber - 1) * pageSize + i + 1;
          options.push({
            value: `${searchTerm}${optionNr}`,
            label: `${searchTerm} ${optionNr}`,
          });
        }
        resolve(options);
      }, 500);
    });
  };

  return (
    <AsyncSelect
      loadOptions={loadOptions}
      cacheOptions={boolean('cacheOptions', true)}
      creatable={boolean('creatable', false)}
      paginate={boolean('paginate', true)}
      pageSize={number('pageSize', 10)}
      closeMenuOnSelect={boolean('closeMenuOnSelectj', true)}
      inverse={boolean('inverse', false)}
      isClearable={boolean('isClearable', false)}
      isDisabled={boolean('isDisabled', false)}
      isMulti={boolean('isMulti', false)}
      options={options}
      placeholder="Select your favourite(s)"
      size={select('size', sizes, 'medium')}
      truncateOptionText={boolean('Truncate option text', false)}
      hideSelectedOptions={boolean('hideSelectedOptions', false)}
      error={text('error', '')}
      helpText={text('helpText', '')}
      success={text('success', '')}
      warning={text('warning', '')}
      width={text('width', undefined)}
    />
  );
};
