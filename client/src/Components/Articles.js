import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Article from './Article';

const Articles = ({articles, query}) => {    

    const renderArticles = articles.map((article, i) => {        
        return <Article article={article} query={query} key={i}/>
    })    
    return (
        <div className="articles">  
            <p mb-3>
            {query === 'latest' ? 'Latest Articles' : `${query} Articles`}          
            </p>
            <ListGroup>
                {renderArticles}
            </ListGroup>
        </div>
    )
}

export default Articles;