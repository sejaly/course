import React from 'react'
import axios from 'axios'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
const AdminRegister = () => {
    state = {
		first_name: '',
		middle_name: '',
		last_name: '',
		email: '',
		password: ''
	}
    sendDataToState = (event, input) => {
        let state = this.state
        state[input] = event.target.value
        this.setState({state})
        }

       submitForm = (e) => {
     e.preventDefault();
     axios.post(`${process.env.REACT_APP_API_PORT}/signup`, {
           first_name: this.state.first_name,
           middle_name: this.state.middle_name,
           last_name: this.state.last_name,
           email: this.state.email,
           password: this.state.password
       })
     .then(res => {
       if (res.status === 200) {
               localStorage.setItem('token', res.data.token )
         this.props.history.push('/admin/index');
       } else {
         const error = new Error(res.error);
         throw error;
       }
     })
     .catch(err => {
       console.error(err);
       alert('Error signing up please try again');
     });
   }
  return (
    <div>
      
    </div>
  )
}

export default AdminRegister
