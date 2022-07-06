import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withFormik } from '@bbbtech/storybook-formik';
import Input from '.';

export default {
    title: 'UI/Input',
    component: Input,
    decorators: [withFormik],
    parameters: {
        formik: {
            initialValues: {
                ownerName: '',
                dischargeDate: '',
                symptoms: '',
            },
            onSubmit: (values: unknown) => console.log(values),
        },
    },
    argTypes: {
        type: { control: 'select', options: ['text', 'date', 'textarea'] },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputText = Template.bind({});
InputText.args = {
    label: 'My Label',
    name: 'ownerName',
    type: 'text',
};

export const InputTextWithPlaceholder = Template.bind({});
InputTextWithPlaceholder.args = {
    label: 'My Label',
    name: 'ownerName',
    placeholder: 'Enter data',
    type: 'text',
};

export const InputDate = Template.bind({});
InputDate.args = {
    label: 'My Label',
    name: 'dischargeDate',
    type: 'date',
};

export const InputTextArea = Template.bind({});
InputTextArea.args = {
    label: 'My Label',
    name: 'symptoms',
    type: 'textarea',
};
