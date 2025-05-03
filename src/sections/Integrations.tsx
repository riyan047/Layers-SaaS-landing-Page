import Tag from "@/components/Tag";
import Image from "next/image";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionLogo from "@/assets/images/notion-logo.svg";
import slackLogo from "@/assets/images/slack-logo.svg";
import relumeLogo from "@/assets/images/relume-logo.svg";
import framerLogo from "@/assets/images/framer-logo.svg";
import githubLogo from "@/assets/images/github-logo.svg";

const integrations = [
    { name: "Figma", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: notionLogo, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: slackLogo, description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: relumeLogo, description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: framerLogo, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: githubLogo, description: "GitHub is the leading platform for code collaboration." },
];

export default function Integrations() {
    return (
        <section>
            <div className="py-24 overflow-hidden">
                <div>
                    <Tag>Integrations</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6">
                    Plays well with <span className="text-lime-400">others</span>
                </h2>
                <p className="text-white/50 mt-4 text-lg">Layers seamlessly connects with yours favorite tools, makingit easy to plug into any workflow and collaborate across platforms. </p>
                <div>
                    {integrations.map(integration => (
                        <div key={integration.name}>
                            <div>
                                <Image
                                    src={integration.icon}
                                    alt={`${integration.name} icon`} />
                            </div>
                            <h3>{integration.name}</h3>
                            <p>{integration.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
