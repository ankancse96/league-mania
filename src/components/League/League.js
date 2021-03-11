import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const League = (props) => {
    const {strLeague,idLeague,strSport} = props.league;
   
    return (
   
    <Col md={6} xl={4} l={4}>
   <Container>
    
    <Card style={{ width: '15rem', height: '12rem',margin:"5px",marginLeft:"35px",backgroundColor:"#42a1f5",color:"#fff",textAlign:"center"}}>
    
    <Card.Body>
    <Card.Title><h6>{strLeague}</h6></Card.Title>
    <Card.Text>  <p>Type: {strSport}</p></Card.Text>
    <Link to={`/league/id=${idLeague}`}>
            <Button style={{paddingTop:"10px"}}  variant="warning">Explore <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>
            </Link>
  </Card.Body>

    </Card>
    </Container>
    </Col>
   
    );
};

export default League;