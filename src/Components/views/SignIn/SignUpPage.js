import React,{component, Component}from 'react';
import {Redirect} from'react-router-dom';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
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
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import CancelIcon from '@material-ui/icons/Cancel';
import SinnUpPopUp from './SignUpPopUp';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

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


// const useStyles = makeStyles((theme) => ({
//     button: {
//       margin: theme.spacing(1),
//     },
//   }));
  
 class SignUpPage extends Component {
     constructor(props){
         super(props)
         this.state={
             user:{ 
               firstname:'',
               lastname:'',
               username:'',
               mopbileno:'',
               email:'',
               password:'',
               confirmpwd:''
            }
             
         }
        
         this.onChange=this.onChange.bind(this);
         this.submitForm=this.submitForm.bind(this);
        }
         exitWindow = ()=>{
                 this.props.closeWindow();
         }
   
      
     
     onChange(e, element) {
      const { user } = this.state;
      user[element] = e.target.value;
      this.setState({ user });
    }

    submitForm(e){
      e.preventDefault()
      console.log(this.state)
       const{user}=this.state;
       console.log(user)
          axios({
                method:'post',
                url:`http://localhost:8080/user`,
                data:user
              })
            .then(res=>{
                 console.log(res)
                })
            .catch(err=>{ 
              console.log(err)
               })

    }

  render(){
   
    const { user } = this.state;
    const { firstname,lastname,username,mobileno, password,confirmpwd } = user;
    // const classes = useStyles();
   
return(

<div>
    <Container component="main" maxWidth="md">
        <CssBaseline />
        <div >
          <nav>
        <Typography component="h1" variant="h5">
       
          User Registration
        
       <br/>
        </Typography>
        </nav>
        <Divider variant="middle" />
       
        <form  onSubmit={this.submitForm}  >
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
          
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Enter First Name"
            name="firstname"
            autoComplete="off"
            autoFocus
            value={this.state.user.firstname}
            onChange={e => this.onChange(e, 'firstname')}
           />
          
         </Grid>
         <Grid item xs={12} sm={6}>
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Enter Last Name"
            name="lastname"
            autoComplete="off"
            
            value={this.state.user.lastname}
            onChange={e => this.onChange(e, 'lastname')}
           />

       </Grid>
       <Grid item xs={12} sm={6}>
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Enter User Name"
            name="username"
            autoComplete="off"
            
            value={this.state.user.username}
            onChange={e => this.onChange(e, 'username')}
           />
           </Grid>
           <Grid item xs={12} sm={6}>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Enter your Mobile Number"
            name="mobileno"
            autoComplete="off"
            
            value={this.state.user.mobileno}
            onChange={e => this.onChange(e, 'mobileno')}
           />
           </Grid>
           <Grid item xs={12} sm={6}>
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            validators={['required']}
            errorMessage={['This value is required']}
            label="Enter Password"
            name="password"
            autoComplete="off"
            value={this.state.user.password}
            onChange={e => this.onChange(e, 'password')}
           />
           </Grid>
           <Grid item xs={12} sm={6}>
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Re-enter Password"
            name="confirmpwd"
            autoComplete="off"
            
            value={this.state.user.confirmpwd}
            onChange={e => this.onChange(e, 'confirmpwd')}
           />
            </Grid>
          </Grid>       
          <br/>
          <Divider variant="middle" />
          <br/>
          <Grid item xs={12} sm={12}>
          <Button px={2}
                  variant="contained"
                  color="secondary"
                //   className={classes.button}
                  startIcon={<CancelIcon />}
                  onClick={this.exitWindow}
             >
              Cancel
             </Button>
               
             <Button  
             type="submit"
                  variant="contained"
                  color="primary"
                //   className={classes.button}
                  startIcon={<AddIcon />}
             >
              Add User
             </Button>
             </Grid>
         </form>
         </div>
 </Container>
</div>
)
}
 }
export default SignUpPage;
