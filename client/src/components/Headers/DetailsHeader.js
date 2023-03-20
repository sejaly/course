import React from 'react'
import { Container, Row, Col } from "reactstrap";
const DetailsHeader = () => {
  return (
    <>
     
     <div
     className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
     style={{
       minHeight: "600px",
       
       backgroundSize: "cover",
       backgroundPosition: "center top"
     }}
     >
        <span className="mask bg-gradient-default opacity-8">
            <Container className="d-flex align-items-center" fluid>
                <Row>
                    <Col lg="7" md="10">
                    <h1 className="display-2 text-white">{this.props.title}</h1>
					<h2 className="display-4 text-white">{this.props.subtitle}</h2>
                    <p className="text-white mt-0 mb-5">{this.props.info}</p>
                    
                    </Col>
                </Row>
            </Container>
        </span>

        
     </div>
    
    </>
  )
}

export default DetailsHeader
