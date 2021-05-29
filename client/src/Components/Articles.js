import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Article from './Article';

const Articles = ({articles}) => {    

    const renderArticles = articles.map((article, i) => {        
        return <Article article={article} key={i}/>
    })    
    return (
        <div className="articles">            
            <ListGroup>
                {renderArticles}
            </ListGroup>
        </div>
    )
}

export default Articles;