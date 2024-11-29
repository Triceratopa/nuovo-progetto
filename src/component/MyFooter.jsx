import React from "react";
import { Container,Row,Col,Button } from "react-bootstrap";

const MyFooter=()=>{
    return(
        <footer>
            <Container>
                <Row>
                    <Col>
                    <ul style={{listStyleType:'none'}}>
                        <li>
                            <a href="">Audiodescrizione</a>
                        </li>
                        <li>
                            <a href="">Rapporti con gli investitori</a>
                        </li>
                        <li>
                            <a href="">Note legali</a>
                        </li>
                        <li>
                            <a href="">Preferenze pubbliche</a>
                        </li>
                        <li>
                        <Button variant="outline-secondary">Codice di servizio</Button>
                        </li>
                        <li>
                            <p>1997-2024 Netflix, Inc.</p>
                        </li>
                    
                    </ul>
                    </Col>
                    <Col><ul style={{listStyleType:'none'}}>
                    <li>
                            <a href="">Centro assistenza</a>
                        </li>
                        <li>
                            <a href="">Opportunità di lavoro</a>
                        </li>
                        <li>
                            <a href="">Preferenze per i cookie</a>
                        </li></ul></Col>
                        <Col><ul style={{listStyleType:'none'}}>
                    <li>
                            <a href="">Carte regalo</a>
                        </li>
                        <li>
                            <a href="">Condizioni di utilizzo</a>
                        </li>
                        <li>
                            <a href="">Informazioni sull'azienda</a>
                        </li></ul></Col>
                        <Col><ul style={{listStyleType:'none'}}>
                    <li>
                            <a href="">Media Center</a>
                        </li>
                        <li>
                            <a href="">Privacy</a>
                        </li>
                        <li>
                            <a href="">Contattaci</a>
                        </li></ul></Col>
                </Row>
            </Container>
        </footer>
    )
}
export default MyFooter
