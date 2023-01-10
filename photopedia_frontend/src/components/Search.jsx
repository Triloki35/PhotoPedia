import React, {useState, useEffect} from 'react';

import MasnoryLayout from "./MasnoryLayout";
import { client } from "../client";
import { feedQuery, searchQuery } from "../utils/data";
import Spineer from './Spineer';

const Search = ({searchTerm}) => {
  const [pins, setPins] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(searchTerm){
      setLoading(true);
      const query = searchQuery(searchTerm.toLowerCase());

      client.fetch(query)
      .then((data)=>{
        setPins(data);
        setLoading(false);
      })

    }else{
      client.fetch(feedQuery)
      .then((data)=>{
        setPins(data);
        setLoading(false);
      })
    }
    
  }, [searchTerm])
  

  return (
    <div>
    {loading && <Spineer message="Searching for pins..."/>}
    {pins?.length !==0 && <MasnoryLayout pins={pins}/>}
    {pins?.length ===0 && searchTerm !== '' && !loading && (
      <div>No pins found</div>)}
    </div>
  )
}

export default Search