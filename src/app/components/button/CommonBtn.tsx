const COLOR = {
  blue: "bg-btn-blue text-secondary-foreground border-border",
  pink: "bg-btn-pink text-primary-foreground border-primary/40",
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
      className={`flex h-fit w-fit cursor-pointer items-center gap-1.5 rounded-full border px-4 py-3 text-[13px] leading-none font-semibold tracking-[.015em] shadow-2xs ${COLOR[color]}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
