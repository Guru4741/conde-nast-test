import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

const Article = ({article}) => {    

    return (
        <ListGroup.Item>                                        
                {article.title}                        
        </ListGroup.Item>
    )
}

export default Article;