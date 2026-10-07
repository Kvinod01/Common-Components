import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";

interface AccordionItem {
    titleIcon?: React.ReactNode;
    title: string;
    content: string;
    itemDisabled?: boolean;
}

interface AccordionProps {
    items: AccordionItem[];
    accordionOpenIcon?: React.ReactNode;
    accordionCloseIcon?: React.ReactNode;
    disabled?: boolean;
    heading?: string;
    subHeading?: string;
}

// --- Accordion Component ---

const Accordion = (props: AccordionProps) => {
    const {
        heading,
        subHeading,
        items = [],
        accordionOpenIcon,
        accordionCloseIcon,
        disabled = false
    } = props;

    return (
        <div className="p-6 md:p-8 bg-white dark:bg-gray-900 rounded-xl shadow-2xl transition-colors duration-500">
            {heading && <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">{heading}</h2>}
            {subHeading && <p className="text-lg font-normal text-gray-600 dark:text-gray-400 mb-6">{subHeading}</p>}

            <div className="space-y-3">
                {items.map((item, index) => (
                    <Disclosure key={index}>
                        {({ open }) => (
                            <div className="rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg overflow-hidden">
                                <DisclosureButton
                                    className={`
                                        flex w-full justify-between items-center px-5 py-4 text-left text-lg font-semibold
                                        ${disabled || item.itemDisabled
                                            ? 'cursor-not-allowed opacity-50 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-600'
                                            : 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }
                                        focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/50 rounded-lg transition-all duration-200
                                    `}
                                    disabled={disabled || item.itemDisabled}
                                >
                                    <div className="flex items-center">
                                        {item.titleIcon && <span className="mr-3">{item.titleIcon}</span>}
                                        <span>{item.title}</span>
                                    </div>

                                    <div className="shrink-0 transition-transform duration-200">
                                        {open
                                            ? accordionOpenIcon || null
                                            : accordionCloseIcon || null
                                        }
                                    </div>
                                </DisclosureButton>

                                <Transition
                                    enter="transition duration-300 ease-out"
                                    enterFrom="transform scale-y-95 opacity-0 origin-top"
                                    enterTo="transform scale-y-100 opacity-100 origin-top"
                                    leave="transition duration-200 ease-out"
                                    leaveFrom="transform scale-y-100 opacity-100 origin-top"
                                    leaveTo="transform scale-y-95 opacity-0 origin-top"
                                >
                                    <DisclosurePanel className="px-5 pt-0 pb-4 text-gray-600 dark:text-gray-300 text-base border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-850">
                                        <div className='pt-4'>
                                            {item.content}
                                        </div>
                                    </DisclosurePanel>
                                </Transition>
                            </div>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    );
};
export default Accordion;