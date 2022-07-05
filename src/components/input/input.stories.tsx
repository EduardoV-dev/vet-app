import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '.';

export default {
    title: 'UI/Input',
    component: Input,
    argTypes: {
        type: { control: 'select' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputText = Template.bind({});
InputText.args = {
    label: 'My Label',
    name: 'propName',
};

export const InputTextWithPlaceholder = Template.bind({});
InputTextWithPlaceholder.args = {
    label: 'My Label',
    name: 'propName',
    placeholder: 'Enter data',
};

export const InputDate = Template.bind({});
InputDate.args = {
    label: 'My Label',
    name: 'propName',
    type: 'date',
};

export const InputTextArea = Template.bind({});
InputDate.args = {
    label: 'My Label',
    name: 'propName',
    type: 'textarea',
};
