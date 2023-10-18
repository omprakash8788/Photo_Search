import { createContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Photo from "./components/Photo";
import SearchImage from "./components/SearchImage";
import useAxios from "./hooks/useAxios";
import { useState } from "react";

// create context api
export const ImageContext = createContext();

function App() {
  const [searchImage , setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );
  // console.log(response);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  };

  return (
    <ImageContext.Provider value={value}>
      <Navbar>
        <SearchImage />
      </Navbar>
      <Photo />
    </ImageContext.Provider>
  );
}

export default App;
