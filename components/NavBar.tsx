import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';

const NavBar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto
            flex justify-between items-center sm:px-16 px-4 py-2">
                <Link href="/" className="flex
            justify-center items-center">
                    <Image
                        src="/new-logo.svg" alt="logo"
                        width={400}
                        height={20}
                        className="object-contain" />
                </Link>

            </nav>
        </header>
    )
}

export default NavBar
