import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Articles from './Components/Articles';

function App() {

  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([]);

  const retrieveArticles = async (query = '') => {
    const response = await axios.get(`http://localhost:9999/${query}`);    
    return response.data.articles
  }

  useEffect(() => {
    const getAllArticles = async () => {
      const allArticles = await retrieveArticles();  
      if(allArticles) setArticles(allArticles);
      setLoading(false);
    }
    getAllArticles();
  }, [])

  return (
    <Container className="text-center">
      <Header/>
      {
        loading ? 
        <Spinner animation="border" role="status" variant="primary" />
        : <Articles articles={articles}/>
        }    
      <Footer/>
    </Container>
  );
}

export default App;
