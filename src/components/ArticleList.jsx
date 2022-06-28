import { For } from "solid-js"
import { Article } from "./index"

const ArticleList = (props) => {
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6">
        <For each={props.list}>
            {(article) => <Article {...article} />}
        </For>
        </div>
    )
}

export default ArticleList;