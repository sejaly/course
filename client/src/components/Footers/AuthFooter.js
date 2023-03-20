import React from 'react'
import {Nav , NavLink , Container , Row , Col , NavItem} from reactstrap
const AuthFooter = () => {
  return (
    <>
        <footer className="py-5">
          <Container>
            <Row className="align-items-center justify-content-xl-between">
              <Col xl="6">
                <div className="copyright text-center text-xl-left text-muted">
                  © 2023{" Sejal Yadav"}
      
                </div>
              </Col>
              <Col xl="6">

              </Col>
            </Row>
          </Container>
        </footer>
      </>
  )
}

export default AuthFooter
