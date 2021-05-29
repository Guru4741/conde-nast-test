import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Articles from './Components/Articles';
import ArticleDetails from './Components/ArticleDetails';
import Search from './Components/Search';

function App() {

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const retrieveArticles = async (query = '') => {
    const response = await axios.get(`http://localhost:9999/${query}`);    
    return response.data.articles;
  }

  const submitSearchHandler = (article) => {    
      setLoading(true);
      const getAllArticles = async (article) => {
        const allArticles = await retrieveArticles(article);  
        if(allArticles) setArticles(allArticles);        
        setLoading(false);       
      }
      getAllArticles(article);
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
      <Router>
        <Switch>
          <Route exact path="/">
          <Search submitSearchHandler={submitSearchHandler}/>
            {
              loading ? 
              <Spinner animation="border" role="status" variant="primary" />
              : <Articles articles={articles}/>
            }
          </Route>
          <Route path="/:article/:title">        
            {
              loading ? 
              <Spinner animation="border" role="status" variant="primary" />        
              : <ArticleDetails articles={articles}/>
            }
          </Route>
        </Switch>
      </Router>          
      <Footer/>
    </Container>
  );
}

export default App;
