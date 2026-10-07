import { useState } from 'react';
import RadioButton from '../components/ui_components/RadioButton/RadioButton';

/**
 * Meta configuration for the RadioButton component stories.
 */
export default {
    title: 'Components/RadioButton',
    component: RadioButton,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        options: {
            control: 'object',
            description: 'The list of radio button options to render. `[{ label: ReactNode, value: string }]`',
        },
        name: {
            control: 'text',
            description: 'The name attribute for the radio button group.',
        },
        size: {
            control: { type: 'radio' },
            options: ['small', 'medium', 'large'],
            description: 'Defines the size of the radio button.',
            defaultValue: 'medium',
        },
        isSelected: {
            control: null,
            description: 'Function to determine if an option is selected. (Managed by story state)',
        },
        onChange: {
            action: 'changed',
            description: 'Event handler for value changes.',
        },
        // This arg is used by the template, not the component itself
        initialValue: {
            control: null,
            description: 'Optional initial value for the template to select.'
        }
    },
    // Default args shared by all stories
    args: {
        name: 'default-group',
        options: [
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' },
            { label: 'Cherry', value: 'cherry' },
        ],
        size: 'medium',
        initialValue: null, // Default initial value is null
    },
};

/**
 * A template for rendering the RadioButton component with state management.
 * This function wraps the component to handle the `isSelected` and `onChange` props.
 */
const RadioButtonTemplate = (args: any) => {
    // Use args.initialValue, fallback to first option, or null
    const defaultSelection = args.initialValue || (args.options.length > 0 ? args.options[0].value : null);
    const [selectedValue, setSelectedValue] = useState(defaultSelection);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
        args.onChange && args.onChange(event); // Propagate action to Storybook logs
    };

    const isSelected = (value: string) => value === selectedValue;

    return (
        <div className="p-8 min-w-[200px]">
            <h2 className="text-xl font-bold mb-4 text-gray-700 capitalize">
                Select an Option ({args.size})
            </h2>
            <RadioButton
                {...args} // Passes size, options, name
                isSelected={isSelected}
                onChange={handleChange}
            />
        </div>
    );
};


// Default story: Renders the component with default args
export const Default = {
    render: RadioButtonTemplate,
    args: {
        // Set initial value to the first item from default args
        initialValue: 'apple',
    }
};

// Small size story
export const Small = {
    render: RadioButtonTemplate,
    args: {
        size: 'small',
        name: 'small-group',
        initialValue: 'apple',
    },
};
export const Medium = {
    render: RadioButtonTemplate,
    args: {
        size: 'medium',
        name: 'medium-group',
        initialValue: 'apple',
    },
};

// Large size story
export const Large = {
    render: RadioButtonTemplate,
    args: {
        size: 'large',
        name: 'large-group',
        initialValue: 'apple',
    },
};

// Story with a pre-selected value
export const Preselected = {
    render: RadioButtonTemplate,
    args: {
        name: 'preselected-group',
        initialValue: 'banana',
    },
};

// Story demonstrating rich React Node labels
export const WithRichLabels = {
    render: RadioButtonTemplate,
    args: {
        name: 'rich-labels-group',
        options: [
            {
                label: <span className="font-bold text-red-600">Red Option (Bold)</span>,
                value: 'red'
            },
            {
                label: <span className="italic text-blue-600">Blue Option (Italic)</span>,
                value: 'blue'
            },
            {
                label: <span>Default Option <i>with icon</i> 🚀</span>,
                value: 'default'
            },
        ],
        // Set initial value for this specific story
        initialValue: 'red',
    },
};