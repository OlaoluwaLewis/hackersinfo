import React, { Fragment, useState, useEffect } from 'react';


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
      <nav>  
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
      </button>

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}

      </nav>
    </Fragment>
  );
}

export default Header;