import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from '.';

export default {
    title: 'UI/Card',
    component: Card,
    args: {
        children: 'Hello World',
        className: 'Extravagant Class',
        style: {},
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Base = Template.bind({});

export const JSX = Template.bind({});
JSX.args = {
    children: <div>Hola Mundo</div>,
};

export const WithCSSProps = Template.bind({});
WithCSSProps.args = {
    style: { backgroundColor: 'red' },
};
