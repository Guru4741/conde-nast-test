import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Sort from './Sort';

const Search = ({submitSearchHandler}) => {

    const [sortArticles, setSortArticles] = useState("publishedAt");
    const [searchedArticle, setSearchedArticle] = useState("");

    const searchedArticleHandler = (e) => {
        setSearchedArticle(e.target.value);
      }

    const sortByHandler = (sortBy) => {        
        setSortArticles(sortBy);
    }      
      
    const submitHandler = (e) => {
        e.preventDefault();        
        submitSearchHandler(searchedArticle, sortArticles);
    }

    return (
            <>
                <Form onSubmit={submitHandler}>                                           
                        <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                            <Form.Label column="true" sm={2}>Search by article name : </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="text" placeholder="Search Article By Name" onChange={searchedArticleHandler} value={searchedArticle}/>
                            </Col>
                        </Form.Group>                          
                            <Sort sortByHandler={sortByHandler}/>                                                                            
                        <Form.Row className="justify-content-center">
                        <Button className="justify-content-start mb-4" variant="primary" type="submit">
                            Search Articles
                        </Button>
                    </Form.Row>
                </Form>
            </>
        )
    }   

export default Search;