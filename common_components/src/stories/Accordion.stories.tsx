import type { JSX } from "react";
import Accordion from "../components/ui_components/Accordion/Accordion";

export default {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        items: { control: 'object' },
        accordionOpenIcon: { control: null },
        accordionCloseIcon: { control: null },
        disabled: { control: 'boolean' },
        heading: { control: 'text' },
        subHeading: { control: 'text' },
    },
    decorators: [
        (Story: () => JSX.Element) => (
            <div style={{ width: '600px'}}>
                <Story />
            </div>
        ),
    ],
}

export const Default = {
    args: {
        heading: 'Frequently Asked Questions',
        subHeading: 'Here are some of the most common questions we receive.',
        items: [
            {
                titleIcon: "❓",
                title: "What is your return policy?",
                content: "You can return any item within 30 days of purchase for a full refund."
            },
            {
                titleIcon: "🚚",
                title: "Do you offer international shipping?",
                content: "Yes, we ship to most countries worldwide. Shipping fees and delivery times vary depending on the destination."
            },
            {
                titleIcon: "💳",
                title: "What payment methods do you accept?",
                content: "We accept all major credit cards, PayPal, and Apple Pay."
            }
        ],
        accordionOpenIcon: <span>-</span>,
        accordionCloseIcon: <span>+</span>
    }
}
export const WithoutHeadings = {
    args: {
        ...Default.args,
        heading: undefined,
        subHeading: undefined,
    }
}
export const NoIcons = {
    args: {
        ...Default.args,
        accordionOpenIcon: null,
        accordionCloseIcon: null
    }
}
export const DisabledAccordion = {
    args: {
        ...Default.args,
        disabled: true
    }
}
export const CustomIcons = {
    args: {
        ...Default.args,
        accordionOpenIcon: <span>🔽</span>,
        accordionCloseIcon: <span>▶️</span>
    }
}
export const WithDisabledItem = {
    args: {
        heading: 'Help Center',
        subHeading: 'Find answers to common questions below.',
        items: [
            {
                titleIcon: "❓",
                title: "What is your return policy?",
                content: "You can return any item within 30 days of purchase for a full refund.",
            },
            {
                itemDisabled: true,
                titleIcon: "🚚",
                title: "Do you offer international shipping?",
                content: "Yes, we ship to most countries worldwide. Shipping fees and delivery times vary depending on the destination.",
            },
            {
                // titleIcon: "💳",
                title: "What payment methods do you accept?",
                content: "We accept all major credit cards, PayPal, and Apple Pay.",
            }
        ],
        accordionOpenIcon: <span>-</span>,
        accordionCloseIcon: <span>+</span>,
    }
}