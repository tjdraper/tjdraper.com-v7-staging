import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames (...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Component (
    {
        currentUrlPath,
    }: {
        currentUrlPath: string;
    },
) {
    const navigation = [
        {
            name: 'Blog',
            href: '/tjdraper.com-v7',
            slug: 'blog',
            current: false,
        },
        {
            name: 'About',
            href: '/tjdraper.com-v7/about',
            slug: 'about',
            current: false,
        },
        {
            name: 'RSS',
            href: '/tjdraper.com-v7/blog/feed.xml',
            slug: 'rss',
            current: false,
        },
        {
            name: 'Blue Ocean Docker',
            href: 'https://www.blueoceandocker.com',
            current: false,
        },
    ];

    const segments = currentUrlPath.split('/');

    if (segments[0] === '') {
        segments.shift();
    }

    let primarySegment = segments[0];

    if (primarySegment === '') {
        primarySegment = 'blog';
    }

    navigation.forEach((item) => {
        item.current = item.slug === primarySegment;
    });

    return (
        <Disclosure as="nav" className="bg-tjd-red-600 shadow">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-4xl">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:ml-6 sm:block w-full">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-tjd-red-800 text-white' : 'text-gray-100 hover:bg-tjd-red-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium',
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="text-white text-xl font-bold mr-6">TJ Writes Software</div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
