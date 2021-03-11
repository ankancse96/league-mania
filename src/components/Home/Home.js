import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../Header/Header';
import League from '../League/League';


const Home = () => {
    const [leagues,setLeagues] = useState([]);
         useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(response => response.json())
        .then(data => setLeagues(data.leagues.slice(0,15)))
  },[])
    return (
        <div  style={{backgroundColor:"#0E0A2A",color:"#fff"}}>
        <Header></Header>
       

        
        <Row>
            {
                leagues.map(league=><League league={league} key={league.idLeague}></League>)
            }
       </Row>
       </div>
    );
};

export default Home;