import React from 'react';
import {Link} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'

const Article = ({article, query}) => {  
    
    const path = query ? query : 'latest';

    return (
        // Each article is linked to a href with url as first 20 characters of the article's title 
        <ListGroup.Item>                                                    
            <Link to={`/${path}/${article.title.slice(0,20)}`}>
                {article.title}            
            </Link>                             
        </ListGroup.Item>
    )
}

export default Article;