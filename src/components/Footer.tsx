import logo from "../assets/logo-text.png";

function Footer() {
    return (
        <footer className="border-t border-slate-100 bg-white">
            {/* Main Footer */}
            <div className="mx-auto flex max-w-356.25 flex-col gap-12 px-6 py-14 md:flex-row md:justify-between md:px-24 md:py-16 z">
            {/* left side */}
                <div className="max-w-90">
                    {/* Logo */}
                    <img className="h-auto w-31.25"
                    src={logo} alt="DevStack Logo" />

                    {/* Paragraph */}
                    <p className="mt-5 text-sm leading-6 text-slate-500">
                        Curated tools, technologies, and resources for developers building
                        modern software
                    </p>

                    {/* Sosial Media Link */}
                    <div className="mt-6 flex gap-6">
                        <a href="#" className="text-sm font-medium text-slate-600 transition hover:text-pink-500">GitHub</a>

                        <a href="#" className="text-sm font-medium text-slate-600 transition hover:text-pink-500">Twitter</a>

                        <a href="#" className="text-sm font-medium text-slate-600 transition hover:text-pink-500">LinkedIn</a>
                    </div>
                </div>

            {/* right side */}
                <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:gap-20">
                    <div>
                        <h6 className="text-xs font-bold tracking-wider text-slate-900">
                            PRODUCT
                        </h6>
                        <ul className="mt-5 space-y-3">
                            <li><a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                                    Technologies
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-xs font-bold tracking-wider text-slate-900">
                            COMPANY
                        </h6>
                        <ul className="mt-5 space-y-3">
                            <li>
                                <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                                    About
                                </a>
                            </li>
                            <li><a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                                    Carrers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-xs font-bold tracking-wider text-slate-900">
                            LEGAL
                        </h6>
                        <ul className="mt-5 space-y-3">
                            <li>
                                <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                                    Carrers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                                    Term of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Lower Footer */}
            <div className="mx-auto flex max-w-356.25 flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-24">
                <p className="text-xs text-slate-400">
                    © 2026 Dev Stack. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="text-xs text-slate-400 hover:text-slate-900">
                        Privecy
                    </a>
                    <a href="#" className="text-xs text-slate-400 hover:text-slate-900">
                        Term
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;