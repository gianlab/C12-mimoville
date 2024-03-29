import React from "react";
import '../styles/SearchPage.css'; 

const SearchPage = () => {
   return (
      <div>
         <nav id="nav">
            <div>
               <h1>Mimoville</h1>
               <img src="/assets/Mimoville-logo.png" alt="Mimoville Logo"></img>
               <form role="search" id="form">
                  <input type="search" placeholder="Find Your Getaway" id="search"></input>
                  <button type="submit">Search</button>
               </form>
            </div>
         </nav>

         <main id="main">
            <div className="listing"></div>
         </main>
      </div>
   );
};

export default SearchPage;