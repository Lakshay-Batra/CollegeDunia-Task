import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.css';
import colleges from './colleges';

function App() {
  const [Colleges, setColleges] = useState(colleges.slice(0, 10));
  const [numberOfFetches, setNumberOfFetches] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    }
    setIsFetching(true);
  }
  // Adding scroll event listener 
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  function fetchMoreColleges() {
    // If system has already fetched all the colleges OR upper limit exceeds the total number of colleges then "else"
    if ((numberOfFetches + 1) * 10 >= colleges.length) {

      // This condition will tell whether number of fetches are less than maximum number of fetches we can have
      // If yes then "if block"
      if ((colleges.length / 10) >= numberOfFetches) {
        
        const newFetch = colleges.slice(numberOfFetches * 10, colleges.length);
        setNumberOfFetches(numberOfFetches + 1);
        setIsFetching(false);
        setColleges(prevValue => {
          return [...prevValue, ...newFetch];
        });
      }

    } else {
      const newFetch = colleges.slice(numberOfFetches * 10, (numberOfFetches + 1) * 10);
      setNumberOfFetches(numberOfFetches + 1);
      setIsFetching(false);
      setColleges(prevValue => {
        return [...prevValue, ...newFetch];
      });
    }
    setColleges(prevValue => {
      return [...prevValue]
    })
  }

  // Calling fetchMoreListItems when isFetching is true
  useEffect(() => {
    if (!isFetching) return;
    fetchMoreColleges();
  }, [isFetching]);


  return (
    <div className="App">
      {Colleges.map(college => {
        return <Card key={college.college_name} college={college} />
      })}
    </div>
  );
}

export default App;
