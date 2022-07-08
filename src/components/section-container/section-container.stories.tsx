import { ComponentMeta, ComponentStory } from '@storybook/react';
import SectionContainer from '.';
import Card from '../card';

export default {
    title: 'UI/SectionContainer',
    component: SectionContainer,
    args: {
        subtitle: 'Basic Subtitle',
        subtitleHightlightedText: 'Hello World',
        title: 'Basic Section Container',
    },
} as ComponentMeta<typeof SectionContainer>;

const Template: ComponentStory<typeof SectionContainer> = (args) => (
    <SectionContainer {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
    children: 'Basic String Children',
};

export const JSX = Template.bind({});
JSX.args = {
    children: <Card>Basic JSX Children</Card>,
};
