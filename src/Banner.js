import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search'

function Banner() {
  const [showSearch, setShowSearch] = useState
  (false);
  return (
    <div className='banner'>
      <div className= 'banner_search'>
        {showSearch && <Search/>}
        <Button onClick = {() => setShowSearch(!showSearch)}
        className='banner_searchButton'
        variant='outlined'>
        {showSearch
        ? "Hide" :
        "Pre-order your Meals"
         }
        
        </Button>
      </div>
       <div className='banner_info'>
         <h1>Hunger is a problem we love to solve </h1>
         <h5>
          A taste of our meals is like a magic potion
         </h5>
         <Button variant='outlined'>Order Nearby</Button>
       </div>
    </div>
  )
}

export default Banner
