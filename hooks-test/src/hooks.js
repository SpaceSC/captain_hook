import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]); // set default state of data as []
  const [loading, setLoading] = useState(true); // set default state of loading as true
  async function fetchUrl() { // fetch with async function // at first, fetch returns with a promise and this promise will be fulfilled with the response of the url (server)
    const response = await fetch(url); // await only works inside async functions, we save the response into a variable, fetch gets a url, but it takes time to load (first it's a promise), promise fills itself with the response
    const json = await response.json(); // .json(); method tries to convert the response to js object

    // catching errors goes here
    /*
     useEffect(() => {
    fetch('link')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  */

    setData(json); // set state of data to be the json when images are loaded
    setLoading(false); // set loading to false when images are loaded
  }

  // useEffect updates only once, and runs fetchUrl()
  useEffect(() => { // 
    fetchUrl();
  }, []);
  return [data, loading];
}
export { useFetch };