import React from "react";
import { useFetch } from "./hooks";
import './Photos.css';

function Photos() {
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/photos?albumId=1" // fetch data from here
  );
  return (
    <>
      <h1>Photos</h1>
      {loading ? ( //if still loading, display: "Loading..."
        "Loading..."
      ) : ( //if images are loaded
        <ul>
          {data.map(({ id, title, url }) => ( //map through data, fill keys and alts
            <li key={`photo-${id}`}>
              <img alt={title} src={url} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Photos; // export component