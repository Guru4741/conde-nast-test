import React from 'react';
import {Link} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'

const Article = ({article}) => {    

    return (
        <ListGroup.Item>                                        
            <Link to={`/latest/${article.title.slice(0,20)}`}>
                {article.title}            
            </Link>                             
        </ListGroup.Item>
    )
}

export default Article;