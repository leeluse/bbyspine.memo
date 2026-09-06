const COLOR = {
    blue: "bg-linear-to-b from-btn-blue-light to-btn-blue-mid border-btn-border text-btn-blue",
    pink: "bg-linear-to-b from-btn-pri-bg-start to-btn-pri-bg-end border-btn-pri-border text-btn-pri-text",
} as const;


export default function CommonBtn({
    label,
    color = "blue",
    icon,
    onClick,
}: {
    label: string;
    color?: keyof typeof COLOR;
    icon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <button
            onClick={onClick}
            className={`w-fit cursor-pointer rounded-full px-4 py-3 shadow-2xs border h-fit flex items-center gap-1.5 text-[13px] leading-none tracking-[.015em] font-semibold ${COLOR[color]}`}>
            {icon}
            <span>{label}</span>
        </button>
    )
}

