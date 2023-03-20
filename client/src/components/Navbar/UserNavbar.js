import React from 'react'
import {Link } from 'react-router-dom'
import {Form,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    DropdownMenu,
    DropdownItem,
    Navbar,
    Container,
    Button} from 'reactstrap'
const UserNavbar = () => {
    rendercart=()=>{
        if(this.props.match.path === '/student'){
            return(
                 <Link to="../../auth/cart">
                    <i className="fas fa-shopping-cart fa-3x ml-4" style={{color: "white"}}></i>
                 </Link>
                );
        }
    }
    renderProfileLink = () => {
        if (this.props.user.role === "student") {
          return `/student/profile/${this.props.user._id}`
        } else {
          return `/admin/teacher/${this.props.user._id}`
        }
      }
      renderDropDownOption = () => {
        if (this.props.match.path === "/student") {
          return(
            <DropdownItem to="../../auth/cart" tag={Link}>
              <i className="ni ni-cart" />
              <span>Cart</span>
            </DropdownItem>
          )
        } else if (this.props.user.role === "admin") {
          return(
            <DropdownItem to="/admin/user-profile" tag={Link}>
              <i className="ni ni-settings-gear-65" />
              <span>Settings</span>
            </DropdownItem>
          )
        }
      }
      logout = () => {
        localStorage.removeItem("token")
        this.props.history.push({
          pathname: "/auth/login"
        })
      }
  return (
    <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/"
            >
              {this.props.brandText}
            </Link>
            <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search" type="text" />
                </InputGroup>
              </FormGroup>
            </Form>
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="..."
                        src={this.props.user.avatar}
                      />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                        {this.props.user.first_name} {this.props.user.last_name}
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>
                  <DropdownItem to={this.renderProfileLink()} tag={Link}>
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Schedule</span>
                  </DropdownItem>
                  {/* <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-support-16" />
                    <span>Support</span>
                  </DropdownItem> */}
                  {
                    this.renderDropDownOption()
                  }
                  <DropdownItem divider />
                  <DropdownItem onClick={this.logout}>
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            {
              this.renderCart()
            }
          </Container>
        </Navbar>
  )
}

export default UserNavbar
