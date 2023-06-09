import { destroyModal } from "../../utils/modal"

export default function Header({ title }) {

    return(
        <header className="h-14 flex items-center justify-between px-4 border-gray-300 border-b text-sm font-medium">
            <h6>{title}</h6>
            <button onClick={destroyModal} className="w-9 h-9 rounden hover:bg-gray-100 flex items-center justify-center">x</button>
        </header>
    )
}