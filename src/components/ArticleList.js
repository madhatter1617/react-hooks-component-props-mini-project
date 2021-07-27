import Article from"./Article"

function ArticleList (prop){

    return( //assign a unique key prop to each Article
        <main>
        <Article 
        
        artTitle ={prop.title} 
        artDate ={prop.date} 
        artPre={prop.preview}
        />

        
        </main>     
    )
}
export default ArticleList 