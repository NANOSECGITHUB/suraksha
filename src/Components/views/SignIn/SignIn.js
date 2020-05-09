//https://m.youtube.com/watch?v=VK0s1e_YMBw

import React, { component, Component } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

//import { useForm } from "react-hook-form";
//import { RHFInput } from "react-hook-form-input"; 
//import { DevTool } from 'react-hook-form-devtools';
import axios from 'axios'
//import Switch from "@material-ui/core/Switch";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { render } from '@testing-library/react';
// import  '../../../Components/App.css';
import PopUp from './SignUpPopUp'
import './Popup.css';


// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(10),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
// root:{
//       width: '100%',
//   '& > * + *': 
// {
//     marginRight: theme.spacing(2),
//   }},

//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

class SignIn extends Component {
  constructor(props) {
    super(props)
    let status = false;
    this.state = {
      login: {
        mobileno: '',
        password: '',
        status: '',
        menu: ''
      },
      seen: false
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  onChange(e, element) {
    const { login } = this.state;
    login[element] = e.target.value;
    this.setState({ login });
  }

  submitForm(e) {
    e.preventDefault()
    console.log(this.state)
    const { login } = this.state;
    console.log(login)
    axios({
      method: 'post',
      //url:`http://localhost:8080/login`,
      url: `http://localhost:8092/chakrika/webapi/aliens/loginvalidation_mobile`,
      //url: `http://103.213.193.95:8090/chakrika/webapi/aliens/loginvalidation_mobile`,
//      http://103.213.193.95:8090/
      data: login
    })
      .then(res => {
        console.log(res)
        this.setState({
          login: {
            ... this.state.login,
            status: res.data.status,
            menu: res.data.menu
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    localStorage.setItem("token", null)

    const { login } = this.state;
    const { mobileno, password, status, menu } = login;
    console.log('login.menu');
    console.log('login.menu');
    console.log('login.menu..................');
    console.log(login.menu);
    console.log('login.menu..................');
    console.log('login.menu');
    console.log('login.menu');
    if (login.status === 'success') {
      // localStorage.setItem("token","abcdefghijkl")
      localStorage.setItem("token", "abcdefghijkl")

      return <Redirect to="/nav" />
    }
    const responseGoogle = (response) => {
      console.log(response);
    }
    return (
      <div>
        <Container component="main" maxWidth="xs"  >
          <CssBaseline />

          <div >
            <Typography component="h1" variant="h5"  >
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

          Sign-In

        </Typography>


            <form onSubmit={this.submitForm} >
              <br></br>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="mobileno"
                label="Registered Mobile Number"
                name="mobileno"
                autoComplete="off"
                autoFocus
                value={this.state.login.mobileno}
                onChange={e => this.onChange(e, 'mobileno')}

              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.login.password}
                onChange={e => this.onChange(e, 'password')}


              />
              <br></br>
              <br></br>

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
          </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    <br></br>
                Forgot password?
              </Link>
                </Grid>
                <Grid item>
                  <br></br>
                  <div onClick={this.togglePop}>
                    <Link>Don't have an account? Sign Up</Link>
                  </div>
                </Grid>
              </Grid>
            </form>
          </div>
          {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
        </Container>
      </div>

    )
  }

}
export default SignIn;


