const COLOR = {
    'blue': 'bg-linear-to-r from-btn-blue-light to-btn-blue-mid border-btn-border text-btn-blue'
} as const;

export default function CommonBtn({
    label,
    color = 'blue',
    icon
}: {
    label: string,
    color?: keyof typeof COLOR,
    icon?: React.ReactNode
}) {
    return (
        <button className={`w-fit cursor-pointer rounded-full px-4 py-2 text-sm border h-fit flex items-center gap-1.5 font-medium ${COLOR[color]}`}>
            {icon}
            <span>{label}</span>
        </button>
    )
}

