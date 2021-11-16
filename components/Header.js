import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon } from '@heroicons/react/outline'

export default function Header() {
    return (
        <nav className="flex sticky bg-white top-0 border-b-2 h-16">
            <div className="flex items-center justify-center w-48 ">
                <h1 className="text-2xl mx-6 font-bold">Courses</h1>
            </div>
            <section className="flex w-full mx-10 items-center justify-between">
                <div className="flex items-center space-x-3">
                    <SearchIcon className="h-5" />
                    <p className="text-lg text-gray-600">Search...</p>
                </div>
                <div className="flex items-center space-x-3">
                    <BellIcon className="h-5" />
                    <div className="w-10 h-10 cursor-pointer flex text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-2xl font-medium items-center justify-center rounded-full">N</div>
                </div>
            </section>
        </nav>
    )
}
