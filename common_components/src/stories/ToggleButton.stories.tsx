import { useState } from "react";

import type { Decorator, Meta, StoryObj } from '@storybook/react';
import ToggleButton from "../components/ui_components/ToggleButton/ToggleButton";
interface ToggleButtonProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
    label: React.ReactNode
    size?: 'small' | 'medium' | 'large';
    labelClassName?: string
};

const StateDecorator: Decorator<ToggleButtonProps> = (Story, context) => {
    // Read the initial 'checked' state from the story args
    const [checked, setChecked] = useState(context.args.checked!);

    // Get the action logger from the context.
    // The name 'onChange' is what you defined in argTypes
    const storybookOnChange = context.args.onChange as (checked: boolean) => void;

    // Create a combined handler
    const handleChange = (newChecked: boolean) => {
        // 1. Update the local state
        setChecked(newChecked);

        // 2. Call the action logger if it exists, so the event shows in the Actions panel
        if (storybookOnChange) {
            storybookOnChange(newChecked);
        }
    };

    // Return the Story component, passing the state and the combined handler
    return <Story
        {...context.args}
        checked={checked}
        onChange={handleChange} // <-- Pass the new combined handler
    />;
};

const meta: Meta<ToggleButtonProps> = {
    title: 'Components/ToggleButton',
    component: ToggleButton,
    decorators: [StateDecorator],
    argTypes: {
        size: {
            control: { type: 'radio', options: ['small', 'medium', 'large'] },
            defaultValue: 'small',
            description: 'Size of the Toggle Button',
        },
        labelClassName: {
            control: 'text',
            defaultValue: 'text-sm',
            description: 'CSS classes for the label text',
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
            description: 'Disable the Toggle Button',
        },
        checked: {
            control: 'boolean',
            defaultValue: false,
            description: 'Checked state of the Toggle Button',
        },
        label: {
            control: 'text',
            defaultValue: 'Toggle Me',
            description: 'Label text for the Toggle Button',
        },
        onChange: {
            action: 'toggled',
            description: 'Event handler for toggle state change'

        }
    },

};

export default meta;
type Story = StoryObj<ToggleButtonProps>;


export const Default: Story = {
    args: {
        size: 'medium',
        labelClassName: 'text-base',
        disabled: false,
        checked: false,
        label: 'Enable Feature',
    }
}