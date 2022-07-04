import { ComponentMeta, ComponentStory } from '@storybook/react';
import App from '../App';

export default {
    title: 'examples/App',
    component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Base = Template.bind({});
