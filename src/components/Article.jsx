import { Link } from "solid-app-router"

const Article = (props) => {
    return (
        <Link href={`/post/${props.slug}`} class="group cursor-pointer border rounded-lg overflow-hidden">
            <img class="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={props.img} alt={props.title} />
            <div class="flex justify-between items-center p-5 bg-white">
                <div>
                    <p class="text-lg font-bold">{props.title}</p>
                    <p class="text-xs">{props.discription} by {props.author.name}</p>
                </div>
                <img class="h-12 w-12 rounded-full object-cover" src={props.author.img} alt={props.author.name} />
            </div>
        </Link>
    )
}

export default Article;