import React, { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

function List() {
    const [news, setNews] = useState();

    useEffect(() => {
      fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story")
        .then((res) => {
  
          return res.json();
        })
        .then((data) => setNews(data))
        .catch((err) => console.log(err));
    }, []);
  

    return (
      <Container>
        <ListGroup className="list-group-numbered">
        {news?.hits.map((item) => (
         <ListGroup.Item key="{item.title}"><a href={item.url}>{item.title!=null &&item.title}</a> ({item.author})</ListGroup.Item>
      ))}
        </ListGroup>
      </Container>
    );
  }

  export default List;