import { useEffect, useState } from "react";
import Header from "./Components/Header";
import List from "./Components/List";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';

function App() {
  // const [news, setNews] = useState();

  // useEffect(() => {
  //   fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story")
  //     .then((res) => {

  //       return res.json();
  //     })
  //     .then((data) => setNews(data))
  //     .catch((err) => console.log(err));
  // }, []);
  
  //console.log("hi",news)
  return (
    <>
     <Header />
     <List />

     {/* <div className="App">
      {news?.hits.map((item) => (
         <p key="{item.title}">{item.title!=null &&item.title}</p>
      ))}
    </div> */}
    </>
   
  );
}

export default App;
