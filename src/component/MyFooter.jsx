import React from "react";
import { Container,Row,Col,Button } from "react-bootstrap";


const MyFooter=()=>{
    return(
        <footer className="mt-5 bg-dark">
            <Container>
                <Row>
                    <Col>
                    <ul style={{listStyleType:'none'}}>
                        <li  className="text-decoration-none text-white">
                            <a href="" style={{color: 'white', textDecoration: 'none'}} >Audiodescrizione</a>
                        </li>
                        <li>
                            <a href="" style={{color: 'white', textDecoration: 'none'}}>Rapporti con gli investitori</a>
                        </li>
                        <li>
                            <a href="" style={{color: 'white', textDecoration: 'none'}}>Note legali</a>
                        </li>
                        <li>
                            <a href="" style={{color: 'white', textDecoration: 'none'}}>Preferenze pubbliche</a>
                        </li>
                        <li>
                        <Button variant="outline-secondary" className="mt-3">Codice di servizio</Button>
                        </li>
                        <li>
                            <p style={{color: 'white', textDecoration: 'none'}}>1997-2024 Netflix, Inc.</p>
                        </li>
                    
                    </ul>
                    </Col>
                    <Col><ul style={{listStyleType:'none'}}>
                    <li>
                            <a href="" style={{color: 'white', textDecoration: 'none'}}>Centro assistenza</a>
                        </li>
                        <li>
                            <a href="" style={{color: 'white', textDecoration: 'none'}}>Opportunità di lavoro</a>
                        </li>
                        <li>
                            <a href="" style={{color: 'white', textDecoration: 'none'}}>Preferenze per i cookie</a>
                        </li></ul></Col>
                        <Col><ul style={{listStyleType:'none'}}>
                    <li>
                            <a href="" style={{color: 'white', textDecoration: 'none'}}>Carte regalo</a>
                        </li>
                        <li>
                            <a href="" style={{color: 'white', textDecoration: 'none'}}>Condizioni di utilizzo</a>
                        </li>
                        <li>
                            <a href="" style={{color: 'white', textDecoration: 'none'}}>Informazioni sull'azienda</a>
                        </li></ul></Col>
                        <Col><ul style={{listStyleType:'none'}}>
                    <li>
                            <a href="" style={{color: 'white', textDecoration: 'none'}}>Media Center</a>
                        </li>
                        <li>
                            <a href="" style={{color: 'white', textDecoration: 'none'}}>Privacy</a>
                        </li>
                        <li>
                            <a href="" style={{color: 'white', textDecoration: 'none'}}>Contattaci</a>
                        </li></ul></Col>
                </Row>
            </Container>
        </footer>
    )
}
export default MyFooter
