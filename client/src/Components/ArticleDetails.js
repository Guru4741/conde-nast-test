import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'

const ArticleDetails = ({articles}) => {
    
    const {title} = useParams();

    const article = articles.filter((article) => {     
        return article.title.slice(0,20).trim() === title.trim()
    })
    
    return (
        <>
        {article.length ?    
            <Card>
                <Card.Header>{article[0].title}</Card.Header>              
                <Card.Img variant="top" src={article[0].urlToImage} />
                <Card.Body>
                    <Card.Text>
                        {article[0].content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"><b>Published At : </b>{article[0].publishedAt} <b>Author : </b>{article[0].author}</small>
                </Card.Footer>            
            </Card>  
            :   <Alert variant="info">
                    No Articles Found
                </Alert>
            }                     
            </>
    )
}

export default ArticleDetails