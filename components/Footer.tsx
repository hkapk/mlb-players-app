import Image from "next/image";
import Link from 'next/link';

import { footerLinks } from "@/constants";

const Footer = () => {
    return (
        <footer className="flex flex-column text-black-100 mt-5 border-t border-gray-100">
            <div className="flex max-md:flex-col
            flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Image src="/new-logo.svg" alt="logo"
                        width={200} height={20}
                        className="object-contain" />
                    <p className="text-base
                text-gray-700">
                        Quickstats 2023 <br />
                        All rights reserved &copy;
                    </p>
                </div>
                <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
                    {footerLinks.map((item) => (
                        <div key={item.title}
                            className="flex flex-col gap-6 text-base min-w-[170px]">
                            <h3 className="font-bold"> {item.title}</h3>
                            {item.links.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.url}
                                    className="text-gray-500"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
