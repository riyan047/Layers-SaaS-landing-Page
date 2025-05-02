import { MousePointer } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function Pointer(props: {
    name: string;
    color?: 'red' | 'blue'
}) {
    const { name, color } = props
    return (
        <div className="relative">
            <MousePointer className="size-5" />
            <div>
                <div
                    className={twMerge(" absolute top-full left-full inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none", color ==="red" && "bg-red-500")}>
                    {name}
                </div>
            </div>
        </div>
    )
}