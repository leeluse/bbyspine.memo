import CommonBtn from "../button/CommonBtn";
import PlusIcon from "../icons/PlusIcon";

export default function Header() {
    return (
        <header className="h-fit p-5 flex flex-col gap-5 justify-between items-end sm:items-center sm:flex-row sm:gap-0">
            <Logo />
            <CommonBtn label="Add book" color="blue" icon={<PlusIcon />} />
        </header>
    )
}


export function Logo() {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="brand-title">bbyspine.memo</h1>
            <p className="brand-desc">your tiny archive. every book is a place to collect images, scraps and things you don't want to forget.</p>
        </div>
    )
}