import React, { Component,setState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Divider from '@material-ui/core/Divider';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
//import Styles from '../Navigation/Styles.css'
import { textAlign } from '@material-ui/system';
import { responsiveFontSizes } from '@material-ui/core';


const card={
  marginLeft:'80px',
  marginRight:'80px',
  marginTop:'10px',
  paddingTop:'0rem',
  textAlign:'center'
}
const button={
  float:'right',
  justify:'right',
  
}
// const styles = muiBaseTheme => ({
//   card: {
//     maxWidth: 300,
//     margin: "auto",
//     transition: "0.3s",
//     boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
//     "&:hover": {
//       boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
//     }
//   },
//   media: {
//     paddingTop: "56.25%"
//   },
//   content: {
//     textAlign: "left",
//     padding: muiBaseTheme.spacing.unit * 3
//   },
//   divider: {
//     margin: `${muiBaseTheme.spacing.unit * 3}px 0`
//   },
//   heading: {
//     fontWeight: "bold"
//   },
//   subheading: {
//     lineHeight: 1.8
//   },
//   avatar: {
//     display: "inline-block",
//     border: "2px solid white",
//     "&:not(:first-of-type)": {
//       marginLeft: -muiBaseTheme.spacing.unit
//     }
//   }
// });
class Resident extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resident: {
        buildingType: '',
        blockName: '', floorNo: '',doorNo:'',
        occupancyType: "", name: '', mobileNo: '',
        alternateNo: '', email: '', membersCount: ''
      },
      selectControl:{
        aprt_id:'010101',bldg_type_id:'',block_id:'',floor_id:''
      },
      bldgType:[],
      blockType:[],
      floorNo:[],
      doorNo:[],

    vehicleType: '',
	  vehicleNumber:'',
	  vehicleParkingSlot:'',
    vehicle: [{ vehicleType: '' },{ vehicleNumber: '' },{ vehicleParkingSlot:'' }]
    };

    
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  
  handleNameChange = evt => {
    this.setState({ vehicleType: evt.target.value });
	};
  handleVehicleTypeChange = idx => evt => {
    const newVehicle = this.state.vehicle.map((vehicle, sidx) => {
      if (idx !== sidx) return vehicle;
      return { ...vehicle, vehicleType: evt.target.value};
    });
	 this.setState({ vehicle: newVehicle });
}

handleVehicleNumberChange = idx => evt => {
  const newVehicle = this.state.vehicle.map((vehicle, sidx) => {
    if (idx !== sidx) return vehicle;
    return { ...vehicle, vehicleNumber: evt.target.value };
  });
 this.setState({ vehicle: newVehicle });
}
handleVehicleParkingSlotChange = idx => evt => {
  const newVehicle = this.state.vehicle.map((vehicle, sidx) => {
    if (idx !== sidx) return vehicle;
    return { ...vehicle, vehicleParkingSlot: evt.target.value};
  });

  this.setState({ vehicle: newVehicle });
};

handleAddVehicle = () => {
  this.setState({
  vehicle: this.state.vehicle.concat([{ vehicleType: "" }]),
  vehicle: this.state.vehicle.concat([{ vehicleNumber: "" }]),
  vehicle: this.state.vehicle.concat([{ vehicleParkingSlot: "" }])
  });
};

handleRemoveVehicle = idx => () => {
  this.setState({
    vehicle: this.state.vehicle.filter((s, sidx) => idx !== sidx)
  });
};

/**/
  onChange(e, element) {
    const { resident } = this.state;
    resident[element] = e.target.value;
    this.setState({ resident });
  }

  submitForm(e) {
    e.preventDefault()
    console.log(this.state)
    const { resident } = this.state;
    console.log(resident)
    axios({
      method: 'post',
      url: `http://localhost:8080/resident`,
      data: resident
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentWillMount(){
    const aprtid='010101'
    axios({
       method:'get',
      url:`http://localhost:8080/getBuilding/${aprtid}`})
      .then(res=>{
        console.log(res) 
        this.setState({bldgType:res.data})
        console.log(this.state.bldgType)
    })
    .catch(err=>{
      console.log(err)
    })
  }

async getByBlock(value){
    console.log(`Heloooooooo2/ ${value}`)
 await this.setState(prevState=>({
       selectControl:{...prevState.selectControl,
      bldg_type_id:value}
    })) 
     const selectControl=this.state.selectControl
    console.log(this.state.selectControl)
    axios({
     method:'post',
     url:'http://localhost:8080/getBlock',
     data:selectControl
     })
    .then(res=>{
       console.log(res) 
       this.setState({blockType:res.data})
       console.log(this.state.blockType)
   })
    .catch(err=>{
     console.log(err)
    })
    }

    async getByFloor(value){
      console.log(`Heloooooooo3/ ${value}`)
   await this.setState(prevState=>({
         selectControl:{...prevState.selectControl,
        block_id:value}
      })) 
       const selectControl=this.state.selectControl
      console.log(this.state.selectControl)
      axios({
       method:'post',
       url:'http://localhost:8080/getFloor',
       data:selectControl
       })
      .then(res=>{
         console.log(res) 
         this.setState({floorNo:res.data})
         console.log(this.state.floorNo)
     })
      .catch(err=>{
       console.log(err)
      })
      } 

      async getByDoor(value){
        console.log(`Heloooooooo4/ ${value}`)
     await this.setState(prevState=>({
           selectControl:{...prevState.selectControl,
          floor_id:value}
        })) 
         const selectControl=this.state.selectControl
        console.log(this.state.selectControl)
        axios({
         method:'post',
         url:'http://localhost:8080/getDoor',
         data:selectControl
         })
        .then(res=>{
           console.log(res) 
           this.setState({doorNo:res.data})
           console.log(this.state.doorNo)
       })
        .catch(err=>{
         console.log(err)
        })
        } 


  render(styles){
   
      
return(
  <form  onSubmit={this.submitForm}  >
  <Card style={card} raised='true'>
  <CardContent>
<div>
    <Container  component="main" maxWidth="lx">
    
        <CssBaseline />
        <div >
        <Typography component="h1" variant="h5" align='left'>
          Resident's Information
          {/* <Button style={button}>
          LOGOUT
          </Button> */}
        <Divider variant="middle" />
        </Typography>
    <Grid container spacing={1}   >
      
        <Grid item xs={12} sm={4}>
        <FormControl  fullWidth variant="outlined" margin='normal' >
        <InputLabel htmlFor="buildingType">Building Type</InputLabel>
          <Select 
          variant="outlined" 
          native 
          label="buildingType" 
          autoFocus 
          name="buildingType"
          onChange={(e)=>this.getByBlock(e.target.value)}>
           <option aria-label="None" value="" />
            {this.state.bldgType.map(bldg=>( 
             <option
             key={bldg.bldg_Type_id}
             value={bldg.bldg_Type_id}
             >
                {bldg.bldg_type} 
              </option>
             ))}
           </Select>
           </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
        <FormControl  fullWidth variant="outlined" margin='normal' >
        <InputLabel htmlFor="blockName">Block Name</InputLabel>
          <Select 
          variant="outlined" 
          native 
          label="blockName" 
          autoFocus 
          name="blockName"
           onChange={(e)=>this.getByFloor(e.target.value)}> 
           <option aria-label="None" value="" />
            {this.state.blockType.map(block=>( 
             <option
             key={block.block_id}
             value={block.block_id}
             >
                {block.block_name} 
              </option>
             ))}
           </Select>
           </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
        <FormControl  fullWidth variant="outlined" margin='normal' >
        <InputLabel htmlFor="floorNo">Floor No</InputLabel>
          <Select 
          variant="outlined" 
          native 
          label="floorNo" 
          autoFocus 
          name="floorNo"
           onChange={(e)=>this.getByDoor(e.target.value)}>  
           <option aria-label="None" value="" />
            {this.state.floorNo.map(floor=>( 
             <option
             key={floor.floor_id}
             value={floor.floor_id}
             >
                {floor.floor_id} 
              </option>
             ))}
           </Select>
           </FormControl>
        </Grid> 
        <Grid item xs={12} sm={2}>
        <FormControl  fullWidth variant="outlined" margin='normal' >
        <InputLabel htmlFor="doorNo">Door No</InputLabel>
          <Select 
          variant="outlined" 
          native 
          label="doorNo" 
          autoFocus 
          name="doorNo">
           {/* onChange={(e)=>this.getByDoor(e.target.value)}>   */}
           <option aria-label="None" value="" />
            {this.state.doorNo.map(door=>( 
             <option
             key={door.door_id}
             value={door.door_id}
             >
                {door.door_id} 
              </option>
             ))}
           </Select>
           </FormControl>
        </Grid> 
        <Grid item xs={12} sm={4}>
        <FormControl  fullWidth variant="outlined" margin='normal' >
        <InputLabel htmlFor="OccupantsType">Occupants Type</InputLabel>
        <Select 
          variant="outlined" 
          native 
          label="OccupantsType" 
          autoFocus 
          name="occupantsType">
          {/* variant="outlined" > */}
           {/* onChange={(e)=>getByBlock(e.target.value)} > */}
           <option aria-label="None" value="" />
             {/* {bldgtype.map(bldg=>( */}
              <option
             // key={bldg.bldg_Type_id}
             // value={bldg.bldg_Type_id}
             // onChange={(e)=>{setSelect({...select,bldg_type_id:e.target.value})},getByBlock}
              >
               {/* {bldg.bldg_type} */}
              </option>
             ))}
           </Select>
           </FormControl>
        </Grid>
      <Grid item xs={12} sm={4}>
      <FormControl  fullWidth variant="outlined"  >
           <TextField
            variant="outlined"   
            margin="normal"
            required
            fullWidth
            label="Occupants Name"
            name="occupantsName"
            autoComplete="off"
            
           // value={this.state.user.confirmpwd}
           // onChange={e => this.onChange(e, 'confirmpwd')}
           />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
      <FormControl  fullWidth variant="outlined"  >
           <TextField
            variant="outlined"   
            margin="normal"
            required
            fullWidth
            label="Registerd Mobile No."
            name="mobileNo"
            autoComplete="off"
            
           // value={this.state.user.confirmpwd}
           // onChange={e => this.onChange(e, 'confirmpwd')}
           />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
      <FormControl  fullWidth variant="outlined"  >
           <TextField
            variant="outlined"   
            margin="normal"
            required
            fullWidth
            label="Alternate Mobile No."
            name="alternateNo"
            autoComplete="off"
            
           // value={this.state.user.confirmpwd}
           // onChange={e => this.onChange(e, 'confirmpwd')}
           />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
      <FormControl  fullWidth variant="outlined"  >
           <TextField
            variant="outlined"   
            margin="normal"
            required
            type='email'
            fullWidth
            label="E-mail Id"
            name="confirmpwd"
            autoComplete="off"
            
           // value={this.state.user.confirmpwd}
           // onChange={e => this.onChange(e, 'confirmpwd')}
           />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2}>
      <FormControl  fullWidth variant="outlined"  >
           <TextField
            variant="outlined"   
            margin="normal"
            required
            fullWidth
            type='number'
            label="Total Members"
            name="confirmpwd"
            autoComplete="off"
            
           // value={this.state.user.confirmpwd}
           // onChange={e => this.onChange(e, 'confirmpwd')}
           />
              </FormControl>
            </Grid>
          {/* </Grid>        */}
          {/* <br/>
          <Divider variant="middle" />
          <br/> */}
          {/* <Grid item xs={12} sm={4}>
          <Button px={2}
                  variant="contained"
                  color="secondary"
                //   className={classes.button}
                  startIcon={<CancelIcon />}
                  onClick={this.exitWindow}
             >
              Cancel
             </Button>*/}
        
        <Grid item xs={12} sm={2}>
          <br/>
        <FormControl   >
          <Button 
                  type="submit"
                  variant="contained"
                  color="primary"
                  size='large'
                //   className={classes.button}
                  startIcon={<SaveIcon />}
             >
              Save
             </Button>
             </FormControl>
             </Grid> 
             </Grid>  

         
         </div>
        
 </Container>
</div>
</CardContent>
</Card>


{/* Second screen for vehicle  */}
<Card style={card} raised='true'>
  <CardContent>
<div>
    <Container  component="main" maxWidth="lx">
    
        <CssBaseline />
       
      
      {/* <div style={{float: 'left'}}> */}
      <Typography paddingTop='10px' component="h1" variant="h5" align='left'>
          Vehicle's Information
         
          <div style={{float: 'right'}}>
          
         <FormControl  fullWidth variant="outlined" margin='normal'  align='right'>
          <Button
               type="submit"
               variant="contained"
               color="primary"
               size="large"
               fullwidth
               onClick={this.handleAddVehicle}
               startIcon={<AddIcon />}
            >
               Add Vehicle
            </Button>
          </FormControl>
          </div>
     
        {/* <Divider variant="middle" /> */}
       {/* </div> */}
       </Typography> 
        {/* </div> */}
  
       
  {this.state.vehicle.map((vehicle, idx) => (
        <Grid container spacing={1}   >
        <Grid item xs={12} sm={3}>
            <FormControl  fullWidth variant="outlined" margin='normal' >
            <InputLabel htmlFor="vehicleType">Vehicle Type</InputLabel>
            <Select 
              variant="outlined" 
              native 
              label="vehicleType" 
              autoFocus 
              name="vehicleType"
              value={vehicle.vehicleType}
              onChange={this.handleVehicleTypeChange(idx)}>
              <option aria-label="None" value="" />
              <option value={"Two Wheeler"}> Two Wheeler</option>
              <option value={"Four Wheeler"}>Four Wheeler</option>
              ))}
               </Select>
               </FormControl>
            </Grid>
      <Grid item xs={12} sm={3}>
      <FormControl  fullWidth variant="outlined"  >
           <TextField
            variant="outlined"   
            margin="normal"
            required
            type='text'
            fullWidth
            label="VehicleNumber"
            name="vehicleNumber"
            autoComplete="off"
            value={vehicle.vehicleNumber}
            onChange={this.handleVehicleNumberChange(idx)}
            />
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
      <FormControl  fullWidth variant="outlined"  >
           <TextField
            variant="outlined"   
            margin="normal"
            required
            type='text'
            fullWidth
            label="Vehicle Parking Slot"
            name="vehicleParkingSlot"
            autoComplete="off"
            value={vehicle.vehicleParkingSlot}
            onChange={this.handleVehicleParkingSlotChange(idx)}
            />
            </FormControl>
            </Grid>

        <Grid item xs={12} sm={2}>
          <br/>
        <FormControl  fullWidth variant="outlined"  >
            <Button
               type="submit"
               variant="contained"
               color="secondary"
               size="large"
               fullwidth
               onClick={this.handleRemoveVehicle(idx)}
               startIcon={<DeleteIcon />}
            >
               Delete
             </Button>
             </FormControl>
             </Grid>
            
            
      </Grid>
      ))}
      {/* </div> */}
      
    </Container>
       </div>
       </CardContent>
       </Card>
       </form>
       



)
}
 }
 export default Resident;


//   render() {
//     const { resident } = this.state;
//     return (
//      <Container component="main" maxWidth="lg">
//         <CssBaseline />
//           <div >
//             <Typography component="h1" variant="h5">
//               Resider's Data Sheet
//               <br/>
//             </Typography>
//           </div>
           
//           <div >
//             <Grid container spacing={1} justify="space-around"
//                 direction="row"  >

//           <form onSubmit={this.submitForm}  >

//                   <div className="row">
//                     <Grid item xs={12} container>
//                       <Grid item xs={3}>
//                         <FormControl margin="normal" variant="outlined"  >
//                           <InputLabel htmlFor="buildingType">Building type</InputLabel>
//                           <Select
//                             native
//                             value={this.state.resident.buildingType}
//                             onChange={e => this.onChange(e, 'buildingType')}
//                             label="buildingType"
//                             autoFocus
//                             fullwidth
//                             style={{ width: 200 }}
//                           >
//                             <option aria-label="None" value="" />
//                             <option value={10}>A</option>
//                             <option value={20}>B</option>
//                             <option value={30}>C</option>
//                           </Select>
//                         </FormControl>
//                       </Grid>

//                       <Grid item xs={2}>
//                       </Grid>
//                       <Grid item xs={2}>
//                         <FormControl margin="normal" variant="outlined"  >
//                           <InputLabel htmlFor="blockName">Block Name</InputLabel>
//                           <Select
//                             native
//                             value={this.state.resident.blockName}
//                             onChange={e => this.onChange(e, 'blockName')}
//                             label="blockName"
//                             autoFocus
//                             autoComplete="off"
//                             fullwidth
//                             style={{ width: 200 }}
//                           >
//                             <option aria-label="None" value="" />
//                             <option value={10}>A</option>
//                             <option value={20}>B</option>
//                             <option value={30}>C</option>
//                           </Select>
//                         </FormControl>
//                       </Grid>

//                       <Grid item xs={1}>
//                       </Grid>
//                       <Grid item xs={2}>
//                         <FormControl variant="outlined" margin="normal">
//                           <InputLabel htmlFor="floorNo">Floor No</InputLabel>
//                           <Select
//                             native
//                             value={this.state.resident.floorNo}
//                             onChange={e => this.onChange(e, 'floorNo')}
//                             label="floorNo"
//                             autoComplete="off"
//                             autoFocus
//                             fullwidth
//                             style={{ width: 200 }}
//                           >
//                             <option aria-label="None" value="" />
//                             <option value={10}>Ten</option>
//                             <option value={20}>Twenty</option>
//                             <option value={30}>Thirty</option>
//                           </Select>
//                         </FormControl>
//                       </Grid>
//                     </Grid>

//                   </div>
//                   <div className="row">

//                     <Grid item xs={12} container>
//                       <Grid item xs={3}>
//                         <FormControl variant="outlined" margin="normal" >
//                           <InputLabel htmlFor="occupancyType">Door No</InputLabel>
//                           <Select
//                             native
//                             value={this.state.resident.occupancyType}
//                             onChange={e => this.onChange(e, 'occupancyType')}
//                             label="occupancyType"
//                             autoFocus
//                             autoComplete="off"
//                             margin="normal"
//                             fullwidth
//                             style={{ width: 200 }}
//                           >
//                             <option aria-label="None" value="" />
//                             <option value={"Owner"}>Owner</option>
//                             <option value={"Tenent"}>Tenent</option>
//                                                      </Select>
//                         </FormControl>
//                       </Grid>

//                       <Grid item xs={1}>
//                       </Grid>


//                       <Grid item xs={3}>
//                         <FormControl variant="outlined" margin="normal" >
//                           <InputLabel htmlFor="occupancyType">Occupancy Type</InputLabel>
//                           <Select
//                             native
//                             value={this.state.resident.occupancyType}
//                             onChange={e => this.onChange(e, 'occupancyType')}
//                             label="occupancyType"
//                             autoFocus
//                             autoComplete="off"
//                             margin="normal"
//                             style={{ width: 200 }}
//                           //fullwidth

//                           >
//                             <option aria-label="None" value="" />
//                             <option value={10}>Ten</option>
//                             <option value={20}>Twenty</option>
//                             <option value={30}>Thirty</option>
//                           </Select>
//                         </FormControl>
//                       </Grid>

//                       <Grid item xs={1}>
//                       </Grid>


//                       <Grid item xs={3}>
//                         <FormControl variant="outlined" margin="normal">
//                           <TextField
//                             variant="outlined"
//                             style={{ width: 200 }}
//                             //fullwidth
//                             required
//                             id="name"
//                             label="Occupant's Name"
//                             name="name"
//                             autoComplete="off"
//                             autoFocus
//                             value={this.state.resident.name}
//                             onChange={e => this.onChange(e, 'name')}
//                           />
//                         </FormControl>
//                       </Grid>
//                     </Grid>

//                   </div>

//                   <div className="row" >
//                     <Grid item xs={12} container>

//                       <Grid item xs={3}>
//                         <FormControl variant="outlined"  >
//                           <TextField
//                             variant="outlined"
//                             margin="normal"
//                             fullwidth
//                             required
//                             id="mobileNo"
//                             label="Registered Mobile Number"
//                             name="mobileNo"
//                             autoComplete="off"
//                             autoFocus
//                             value={this.state.resident.mobileNo}
//                             onChange={e => this.onChange(e, 'mobileNo')}
//                           />
//                         </FormControl>
//                       </Grid>
//                       <Grid item xs={1}>
//                       </Grid>

//                       <Grid item xs={3}>
//                         <FormControl variant="outlined" >
//                           <TextField
//                             variant="outlined"
//                             margin="normal"
//                             fullwidth
//                             required
//                             id="alaternateno"
//                             label="Alternate Mobile Number"
//                             name="alaternateno"
//                             autoComplete="off"
//                             autoFocus
//                             value={this.state.resident.alternateNo}
//                             onChange={e => this.onChange(e, 'alternateNo')}
//                           />
//                         </FormControl>
//                       </Grid>

//                       <Grid item xs={1}>
//                       </Grid>

//                       <Grid item xs={3} >
//                         <FormControl variant="outlined"  >
//                           <TextField
//                             variant="outlined"
//                             margin="normal"
//                             fullwidth
//                             required
//                             id="email"
//                             type="email"
//                             label="Email ID"
//                             name="email"
//                             autoComplete="off"
//                             autoFocus
//                             value={this.state.resident.email}
//                             onChange={e => this.onChange(e, 'email')}
//                           />
//                         </FormControl>
//                       </Grid>

//                     </Grid>


//                   </div>
//                   <div className="row">
//                     <Grid item xs={12} container>
//                       <Grid item xs={6}>
//                         <FormControl variant="outlined" margin="normal">
//                           <InputLabel htmlFor="membersCount">Members Count</InputLabel>
//                           <Select
//                             native
//                             label="membersCount"
//                             autoFocus
//                             fullwidth
//                             style={{ width: 200 }}
//                             value={this.state.resident.membersCount}
//                             onChange={e => this.onChange(e, 'membersCount')}
//                           >
//                             <option aria-label="None" value="" />
//                             <option value={10}>Ten</option>
//                             <option value={20}>Twenty</option>
//                             <option value={30}>Thirty</option>
//                           </Select>
//                         </FormControl>
//                       </Grid>

//                       {/* <Grid item xs={2}>
//                       </Grid> */}

//                       <Grid item xs={6}>

//                         <FormControl variant="outlined" margin="normal">
//                           {/* <CardActions> */}
//                             <Button
//                               type="submit"
//                               variant="contained"
//                               color="primary"
//                               size="large"
//                               fullwidth
//                               style={{ width: 200 }}
//                               startIcon={<AddIcon />}
//                             >
//                               Save
//              </Button>
                       

//                         </FormControl>
//                       </Grid>
//                     </Grid>
//                   </div>
//                 </form>
//               </Grid>
//            {/* <FormControl variant="outlined"  margin="normal">
//        <CardActions>
//        <Button 
//                type="submit"
//                variant="contained"
//                color="primary"
//                size="large"
//                startIcon={<AddIcon />}
//              >
//                Save
//              </Button> 
//          </CardActions>
        
//     </FormControl> */}
//           </div>
       
//       </Container>

//     );
//   }

// }
// export default Resident;