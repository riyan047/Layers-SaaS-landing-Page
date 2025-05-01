import Image from "next/image";
import Logo from '@/assets/images/logo.svg';
import { MenuIcon } from "lucide-react";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return (
        <section className="py-4 ">
            <div className="container">
                <div className="grid grid-cols-2 border border-white/15 rounded-full p-2 px-4 items-center">
                    <div>
                        <Image src={Logo} alt="Layers logo" className="h-9 w-auto " />
                    </div>
                    <div className="flex justify-end md:hidden">
                        <MenuIcon />
                    </div>
                </div>
            </div>
        </section>
    )
}
