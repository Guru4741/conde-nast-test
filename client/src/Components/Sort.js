import React, {useState}from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

const Sort = ({sortByHandler}) => {

    const [selectedOption, setSelectedOption] = useState("publishedAt");

    const handleSort = (event) => {
        const selectedOption = event.target.value
        setSelectedOption(selectedOption)
        sortByHandler(selectedOption);
    }    

    return (
            <>
                <Form.Group as={Row} className="mb-3" controlId="formGridState">
                    <Form.Label column="true" sm={2}>Sort Articles By : </Form.Label>
                    <Col sm={10}>
                        <Form.Control as="select" defaultValue={selectedOption} onChange={handleSort}>
                            <option value="relevancy">Relevancy</option>
                            <option value="popularity">Popularity</option>
                            <option value="publishedAt">Published At</option>                           
                        </Form.Control>
                    </Col>
                </Form.Group>
            </>
        )
    }

export default Sort;