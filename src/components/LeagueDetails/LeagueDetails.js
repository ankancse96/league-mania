import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import male from '../../images/male.png';
import female from '../../images/female.png';
import logo from '../../images/club.jpg'
import './LeagueDetails.css'
import { useParams } from 'react-router';
import {  Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast,faFlag,faFutbol,faTransgender } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const LeagueDetails = () => {
    let {leagueName} = useParams();
    const[league,setLeague]=useState([]);
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?${leagueName}`
        fetch(url)
        .then(response=>response.json())
        .then(data=>setLeague(data.leagues[0]))
    },[leagueName])

       
    return (
        
        <div  style={{backgroundColor:"#0E0A2A",color:"#fff"}}>
            <div className="details-header">
            
            <img src={logo} alt="error"/>
            <div className="header-text">
            
            <img src={league.strLogo} alt="error"/>
           
            
              
            </div>
            </div>
        
        <div className="twin-container">
            <div className="left-container">
            <h4>{league.strLeague}</h4>
            <h5><FontAwesomeIcon icon={faPodcast} ></FontAwesomeIcon> Founded : {league.intFormedYear}</h5>
            <p><FontAwesomeIcon icon={faFlag} ></FontAwesomeIcon> Country : {league.strCountry}</p>
            <p><small><FontAwesomeIcon icon={faFutbol} ></FontAwesomeIcon> Sport Type : {league.strSport}</small></p>
            <p><small><FontAwesomeIcon icon={faTransgender} ></FontAwesomeIcon> Gender : {league.strGender}</small></p>
            
            </div>
            <div className="right-container">
            {
                league.strGender === "female" ? <img src={female} alt=""/>
                : <img src={male} alt=""/>
                
            }
            
            </div>
        </div>
        <div >
            <Container>
            <p>{league.strDescriptionEN}</p>
            <div className="contact-link">
              
                    <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} style={{fontSize:"40px",marginBottom:"10px"}}></FontAwesomeIcon></a>
                    <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} style={{fontSize:"40px",color:"blue",marginBottom:"10px"}}></FontAwesomeIcon></a>
                    <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} style={{fontSize:"40px",color:"red",marginBottom:"10px"}} ></FontAwesomeIcon></a>
                    
                
            </div>
            </Container>
        </div>
        
        </div>
       
    );
};

export default LeagueDetails;