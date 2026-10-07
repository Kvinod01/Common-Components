import Button from "../components/ui_components/Button/Button";

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variants: {
            control: { type: 'radio' },
            options: ['primary', 'outline', 'secondary', 'outline_dashed'],
            description: 'Defines the visual style of the button.',
            defaultValue: 'primary',
        },
        size: {
            control: { type: 'radio' },
            options: ['small', 'medium', 'large'],
            description: 'Defines the size of the button.',
            defaultValue: 'medium',
        },
        disable: {
            control: { type: 'boolean' },
            description: 'Disables the button when true.',
            defaultValue: false,
        },
        prefixIcon: {
            control: null,
            description: 'Icon to be displayed before the button text (e.g., an emoji or simple text).',
            defaultValue: '🚀',
        },
        suffixIcon: {
            control: null,
            description: 'Icon to be displayed after the button text (e.g., an emoji or simple text).',
            defaultValue: '➡️',
        },
        onClick: { action: 'clicked' },
        children: {
            control: { type: 'text' },
            description: 'The content of the button.',
            defaultValue: 'Button Label',
        },
        state: {
            control: { type: 'radio' },
            options: ['default', 'rounded', 'full_rounded'],
            description: 'Defines the shape of the button.',
            defaultValue: 'default',
        },
    },
};

export const Default = {
    args: {
        children: 'Click Me',
        state: "default",
        variants: "primary",
        size: "medium",
        disable: false,
        prefixIcon: null,
        suffixIcon: null,
    },
};

export const PrimaryButton = {
    args: {
        ...Default.args,
        variants: 'primary',
        state: 'default',
        size: 'medium',
        children: 'Primary Action',
    },
};
export const OutlineButton = {
    args: {
        ...Default.args,
        variants: 'outline',
        state: 'rounded',
        size: 'large',
        children: 'Outline Action',
    },
};
export const OutlineDashedButton = {
    args: {
        ...Default.args,
        variants: 'outline_dashed',
        state: 'rounded',
        size: 'large',
        children: 'Outline Dashed Action',
    },
};
export const SecondaryButton = {
    args: {
        ...Default.args,
        variants: 'secondary',
        state: 'rounded',
        size: 'large',
        children: 'Secondary Action',
    },
};
export const IconOnlyButton = {
    args: {
        ...Default.args,
        variants: 'primary',
        state: 'full_rounded',
        size: 'small',
        children: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2_2219)">
                <path d="M12.1734 7.93707C12.1537 7.9097 12.1278 7.8874 12.0977 7.87202C12.0677 7.85664 12.0344 7.84862 12.0007 7.84862C11.9669 7.84862 11.9337 7.85664 11.9036 7.87202C11.8736 7.8874 11.8476 7.9097 11.8279 7.93707L7.06005 14.5264C6.95826 14.6683 7.06005 14.8665 7.23416 14.8665H8.49041C8.76362 14.8665 9.02344 14.7353 9.18416 14.513L11.9993 10.6183L14.8172 14.513C14.9779 14.7353 15.235 14.8665 15.5109 14.8665H16.7672C16.9413 14.8665 17.0431 14.6683 16.9413 14.5264L12.1734 7.93707Z" fill="currentColor" />
                <path d="M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM12 21.9643C6.49821 21.9643 2.03571 17.5018 2.03571 12C2.03571 6.49821 6.49821 2.03571 12 2.03571C17.5018 2.03571 21.9643 6.49821 21.9643 12C21.9643 17.5018 17.5018 21.9643 12 21.9643Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_2_2219">
                    <rect width="24" height="24" fill="currentColor" />
                </clipPath>
            </defs>
        </svg>,
    },
};
export const WithPrefixIcons = {
    args: {
        // Inherit base args
        ...Default.args,
        variants: 'primary',
        state: 'default',
        size: 'medium',
        children: 'Click Me',
        // Using an emoji as a placeholder icon
        prefixIcon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2_3023)">
                <path d="M14.4444 7.05857L7.85509 11.8264C7.82771 11.8462 7.80541 11.8721 7.79003 11.9021C7.77465 11.9322 7.76663 11.9654 7.76663 11.9992C7.76663 12.0329 7.77465 12.0662 7.79003 12.0962C7.80541 12.1263 7.82771 12.1522 7.85509 12.172L14.4444 16.9398C14.5863 17.0416 14.7846 16.9398 14.7846 16.7657V15.5095C14.7846 15.2362 14.6533 14.9764 14.431 14.8157L10.5363 12.0005L14.431 9.18268C14.6533 9.02196 14.7846 8.76482 14.7846 8.48893V7.23268C14.7846 7.05857 14.5863 6.95678 14.4444 7.05857Z" fill="currentColor" />
                <path d="M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM12 21.9643C6.49821 21.9643 2.03571 17.5018 2.03571 12C2.03571 6.49821 6.49821 2.03571 12 2.03571C17.5018 2.03571 21.9643 6.49821 21.9643 12C21.9643 17.5018 17.5018 21.9643 12 21.9643Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_2_3023">
                    <rect width="24" height="24" fill="currentColor" />
                </clipPath>
            </defs>
        </svg>,

    },
};
export const WithSuffixIcons = {
    args: {
        // Inherit base args
        ...Default.args,
        variants: 'outline',
        state: 'default',
        size: 'medium',
        children: 'Click Me',
        // Using an emoji as a placeholder icon
        suffixIcon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2_2916)">
                <path d="M16.1433 11.8254L9.55405 7.0575C9.52202 7.03425 9.48419 7.02032 9.44473 7.01726C9.40528 7.0142 9.36575 7.02212 9.33052 7.04015C9.2953 7.05818 9.26575 7.08561 9.24516 7.1194C9.22457 7.1532 9.21374 7.19203 9.21387 7.23161V8.48786C9.21387 8.76107 9.34512 9.02089 9.56744 9.18161L13.4621 11.9995L9.56744 14.8173C9.34512 14.978 9.21387 15.2352 9.21387 15.5111V16.7673C9.21387 16.9414 9.41208 17.0432 9.55405 16.9414L16.1433 12.1736C16.2612 12.0879 16.2612 11.9111 16.1433 11.8254Z" fill="currentColor" />
                <path d="M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM12 21.9643C6.49821 21.9643 2.03571 17.5018 2.03571 12C2.03571 6.49821 6.49821 2.03571 12 2.03571C17.5018 2.03571 21.9643 6.49821 21.9643 12C21.9643 17.5018 17.5018 21.9643 12 21.9643Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_2_2916">
                    <rect width="24" height="24" fill="currentColor" />
                </clipPath>
            </defs>
        </svg>

    },
};
export const WithPrefixAndSuffixIcons = {
    args: {
        // Inherit base args
        ...Default.args,
        variants: 'primary',
        state: 'default',
        size: 'medium',
        children: 'Click Me',
        // Using an emoji as a placeholder icon
        prefixIcon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2_3023)">
                <path d="M14.4444 7.05857L7.85509 11.8264C7.82771 11.8462 7.80541 11.8721 7.79003 11.9021C7.77465 11.9322 7.76663 11.9654 7.76663 11.9992C7.76663 12.0329 7.77465 12.0662 7.79003 12.0962C7.80541 12.1263 7.82771 12.1522 7.85509 12.172L14.4444 16.9398C14.5863 17.0416 14.7846 16.9398 14.7846 16.7657V15.5095C14.7846 15.2362 14.6533 14.9764 14.431 14.8157L10.5363 12.0005L14.431 9.18268C14.6533 9.02196 14.7846 8.76482 14.7846 8.48893V7.23268C14.7846 7.05857 14.5863 6.95678 14.4444 7.05857Z" fill="currentColor" />
                <path d="M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM12 21.9643C6.49821 21.9643 2.03571 17.5018 2.03571 12C2.03571 6.49821 6.49821 2.03571 12 2.03571C17.5018 2.03571 21.9643 6.49821 21.9643 12C21.9643 17.5018 17.5018 21.9643 12 21.9643Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_2_3023">
                    <rect width="24" height="24" fill="currentColor" />
                </clipPath>
            </defs>
        </svg>,
        suffixIcon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2_2916)">
                <path d="M16.1433 11.8254L9.55405 7.0575C9.52202 7.03425 9.48419 7.02032 9.44473 7.01726C9.40528 7.0142 9.36575 7.02212 9.33052 7.04015C9.2953 7.05818 9.26575 7.08561 9.24516 7.1194C9.22457 7.1532 9.21374 7.19203 9.21387 7.23161V8.48786C9.21387 8.76107 9.34512 9.02089 9.56744 9.18161L13.4621 11.9995L9.56744 14.8173C9.34512 14.978 9.21387 15.2352 9.21387 15.5111V16.7673C9.21387 16.9414 9.41208 17.0432 9.55405 16.9414L16.1433 12.1736C16.2612 12.0879 16.2612 11.9111 16.1433 11.8254Z" fill="currentColor" />
                <path d="M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM12 21.9643C6.49821 21.9643 2.03571 17.5018 2.03571 12C2.03571 6.49821 6.49821 2.03571 12 2.03571C17.5018 2.03571 21.9643 6.49821 21.9643 12C21.9643 17.5018 17.5018 21.9643 12 21.9643Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_2_2916">
                    <rect width="24" height="24" fill="currentColor" />
                </clipPath>
            </defs>
        </svg>
    },
};

export const DisabledButton = {
    args: {
        ...Default.args,
        disable: true,
        variants: 'primary',
        state: 'default',
        size: 'medium',
        children: 'Click Me',
    },
};