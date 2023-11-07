import { HomeIcon } from '@heroicons/react/20/solid';

export type BreadCrumb = {
    name: string;
    href: string;
};

export type BreadCrumbs = Array<BreadCrumb>;

export default function Example (
    {
        breadCrumbs,
    }: {
        breadCrumbs: BreadCrumbs | undefined | null;
    },
) {
    if (!breadCrumbs) {
        return null;
    }

    return (
        <nav className="flex border-b border-gray-200 bg-white" aria-label="Breadcrumb">
            <ol className="mx-auto flex w-full max-w-4xl space-x-4 px-4 sm:px-6 lg:px-8">
                <li className="flex">
                    <div className="flex items-center">
                        <a href="/" className="text-gray-400 hover:text-gray-500">
                            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                        </a>
                    </div>
                </li>
                {breadCrumbs.map((crumb) => (
                    <li key={crumb.name} className="flex">
                        <div className="flex items-center">
                            <svg
                                className="h-full w-6 flex-shrink-0 text-gray-200"
                                viewBox="0 0 24 44"
                                preserveAspectRatio="none"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                            </svg>
                            <a
                                href={crumb.href}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                            >
                                {crumb.name}
                            </a>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
