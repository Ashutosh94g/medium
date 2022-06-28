import { Link } from "solid-app-router";

const Header = () => {
    return (
        <header class="flex justify-between p-5 max-w-7xl mx-auto">
            <div class="flex items-center space-x-5">
                <Link href="/">
                    <img class="w-44 object-contain cursor-pointer" src="/src/assets/medium_logo.png" alt="medium_logo" />
                </Link>
                <div class="hidden md:inline-flex items-center space-x-5">
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3 class="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
                </div>
            </div>
            <div class="flex items-center space-x-6 text-green-600">
                <h3>Sign In</h3>
                <h3 class="border px-4 py-1 rounded-full border-green-600">Getting Started</h3>
            </div>
        </header>
    )
}

export default Header;