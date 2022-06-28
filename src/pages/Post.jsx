import { useParams } from "solid-app-router"

import { PostBySlug } from "../utils/FetchPosts"

const Post = () => {
    const params = useParams();
    const post = PostBySlug(params.slug);
    return (
        <main>
            <img class="w-full h-40 object-cover" src={post.img} alt={post.title} />
            <article class="max-w-4xl mx-auto p-5">
                <h1 class="text-4xl mt-10 mb-3">{post.title}</h1>
                <h2 class="text-lg font-light text-gray-500 mb-2">{post.discription}</h2>
                <div class="flex items-center space-x-2">
                    <img class="h-10 w-10 rounded-full object-cover" src={post.author.img} alt={post.author.name} />
                    <p class="font-extralight text-sm">Blog Post By <span class="text-green-600">{post.author.name}</span> - Published at {new Date(post._created_at).toLocaleDateString()}</p>
                </div>
                <div class="mt-5">
                    {post.body}
                </div>

                <hr class="max-w-lg my-5 mx-auto border border-yellow-500" />
                <form class="flex flex-col p-5 max-w-2xl mx-auto mb-10">
                    <h3 class="text-sm text-yellow-500">Enjoyed this article?</h3>
                    <h4 class="text-3xl font-bold">Leave a Comment below!</h4>
                    <hr class="mt-2 py-3" />
                    <label class="block mb-5">
                        <span class="text-grey-700">Name</span>
                        <input class="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none hover:ring" type="text" placeholder="Name" />
                    </label>
                    <label class="block mb-5">
                        <span class="text-grey-700">Email</span>
                        <input class="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none hover:ring" type="email" placeholder="Email" />
                    </label>
                    <label class="block mb-5">
                        <span class="text-grey-700">Comment</span>
                        <textarea class="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-yellow-500 outline-none hover:ring" row={8} placeholder="Name" />
                    </label>
                </form>
            </article>
        </main>
    )
}

export default Post;