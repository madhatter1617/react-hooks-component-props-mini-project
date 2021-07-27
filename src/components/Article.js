import { data } from "browserslist"
import blogData from "../data/blog"

function Article (prop){    
    return( 
        <div>//Make a Article component as a child of ArticleList
        {blogData.posts.map((art) => {
    return(
        <article key={art.id}> 
            <h3> {art.title} </h3>
            <small defaultValue="January 1,1970"> {art.date} </small>
            <p> {art.preview} </p>
            <p>{art.minutes}</p>
        </article>
    )


        })}
        </div>
    )
}
            



export default Article