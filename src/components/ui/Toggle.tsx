import * as React from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

import { Switch } from '@headlessui/react';

interface IToggleProps {
    toggleFn: (toggleState: boolean) => void;
    defaultState: boolean;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Toggle: React.FunctionComponent<IToggleProps> = ({ toggleFn, defaultState }) => {
    const [enabled, setEnabled] = React.useState(defaultState);

    const onToggle = (checked: boolean) => {
        setEnabled(checked);
        toggleFn(checked);
    };

    return (
        <Switch
            checked={enabled}
            onChange={(checked) => onToggle(checked)}
            className={classNames(
                enabled ? 'bg-slate-600' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none '
            )}
        >
            <span className="sr-only">Use setting</span>
            <span
                className={classNames(
                    enabled ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                )}
            >
                <span
                    className={classNames(
                        enabled ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                        'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                    )}
                    aria-hidden="true"
                >
                    <SunIcon className="h-4 w-4 text-gray-400" />
                </span>
                <span
                    className={classNames(
                        enabled ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                        'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                    )}
                    aria-hidden="true"
                >
                    <MoonIcon className="h-4 w-4 text-slate-600" />
                </span>
            </span>
        </Switch>
    );
};

export default Toggle;
