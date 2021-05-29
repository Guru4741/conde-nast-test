import React from 'react';
import Card from 'react-bootstrap/Card';

const Footer = () => {
    return (
        <Card className="mt-5">
            <Card.Footer>
                <small className="text-muted">Copyright &copy; 2021</small>
            </Card.Footer>
      </Card>    
    )
}

export default Footer;