import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '.';

export default {
    title: 'UI/Button',
    component: Button,
    args: {
        children: 'Button',
        color: 'bluelish',
        onClick: () => console.log('clicked'),
        type: 'button',
    },
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ['none', 'bluelish', 'red'],
        },
        type: {
            control: { type: 'radio' },
            options: ['button', 'submit'],
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    color: 'none',
};

export const BluelishColor = Template.bind({});

export const RedColor = Template.bind({});
RedColor.args = {
    color: 'red',
};

export const WithRadius = Template.bind({});
WithRadius.args = {
    rounded: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};
