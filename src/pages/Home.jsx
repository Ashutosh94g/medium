import { ArticleList, Banner } from "../components";

import { Posts } from "../utils/FetchPosts";

const Home = () => {
    const list = Posts();
    return (
        <main class="max-w-7xl mx-auto">
            <Banner />
            <ArticleList list={list} />
        </main>
    )
}

export default Home;