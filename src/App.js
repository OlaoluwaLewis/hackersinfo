import { useEffect, useState } from "react";
import Header from "./Components/Header";
import './App.css';

function App() {
  const [news, setNews] = useState();

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story")
      .then((res) => {

        return res.json();
      })
      .then((data) => setNews(data))
      .catch((err) => console.log(err));
  }, []);
  
  //console.log("hi",news)
  return (
    <>
     <Header />
     
     <div className="App">
      {news?.hits.map((item) => (
         <p key="{item.title}">{item.title!=null &&item.title}</p>
      ))}
          
      

    </div>
    </>
   
  );
}

export default App;
