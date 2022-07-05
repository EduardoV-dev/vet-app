import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from '.';

export default {
    title: 'UI/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Base = Template.bind({});
Base.args = {
    children: 'Hola Mundo',
};

export const JSX = Template.bind({});
JSX.args = {
    children: <div>Hola Mundo</div>,
};
