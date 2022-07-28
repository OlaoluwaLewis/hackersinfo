import React, { Fragment, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

function Header() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(
    '',
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const result = await fetch(url);
        const jsonResult = await result.json();
        setData(jsonResult);

      } catch (error) {
        console.log(error);
      }


      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return (
    <Fragment>
      <Navbar>
        <Container>
        <Navbar.Brand href=""><h4 className="ms-3 mb-0">Hacker News</h4></Navbar.Brand>
          <Nav className="justify-content-end">
            <input className='input-group-text'
              type="text"
              value={query}
              onChange={event => setQuery(event.target.value)}
            />
            <Button 
              variant="light"
              className="ms-3"
              type="button"
              onClick={() =>
                setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
              }
            >
              Search
            </Button>
          </Nav>

        </Container>
      </Navbar >

      <Container>
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <ListGroup className="list-group-numbered mb-4">
            {data.hits.map(item => (
              <ListGroup.Item  key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </ListGroup.Item >
            ))}
          </ListGroup>
        )}
      </Container>
    </Fragment>
  );
}

export default Header;