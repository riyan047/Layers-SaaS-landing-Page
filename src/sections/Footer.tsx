import Logo from "@/assets/images/logo.svg";
import githubLogo from "@/assets/images/github-social.svg";
import linkedInLogo from "@/assets/images/linkedin.svg";
import xLogo from "@/assets/images/x-social.svg";

import Image from "next/image";
const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container flex flex-col md:flex-row md:justify-between items-center gap-6">
                <div>
                    <Image src={Logo} alt="Logo" />
                </div>
                <div className="flex justify-between gap-12 flex-col md:flex-row items-center">
                    <nav className="flex gap-6">
                        {footerLinks.map(footerLink => (
                            <a href={footerLink.href} className=" text-white/50 text-sm">{footerLink.label}</a>
                        ))}
                    </nav>
                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/riyan-g" target="_blank"><Image src={linkedInLogo} alt="LinkedIn" className="size-5 " /></a>
                        <a href="https://x.com/Riyan50889755" target="_blank"><Image src={xLogo} alt="X" className="size-5 " /></a>
                        <a href="https://github.com/riyan047" target="_blank"><Image src={githubLogo} alt="Github" className="size-5 " /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
