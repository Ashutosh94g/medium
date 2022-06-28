const Banner = () => {
    return (
        <div class="flex justify-between items-center bg-yellow-300 border-y border-black py-10 lg:py-0">
            <div class="px-10 space-y-5">
                <div class="text-6xl max-w-xl font-serif">
                    <span class="underline decoration-black decoration-4">Medium</span> is a place to read, write, and connect
                </div>
                <div>
                    It's easy and free to post your thinking on any topic and connect with millions of readers
                </div>
            </div>
            <img class="hidden md:inline-flex h-32 lg:h-full" src="/src/assets/Medium.png" alt="Medium Logo" />
        </div>
    )
}

export default Banner;