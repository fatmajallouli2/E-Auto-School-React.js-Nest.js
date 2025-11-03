import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm({setSchool,setFname,setLname,setAdress,setCity,setRegion,setZip,setCountry}) {
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
          <TextField
            required
            id="DrivingSchoolName"
            name="DrivingSchoolName"
            label="Driving School's Name"
            fullWidth
            defaultValue=""
            autoComplete="family-name"
            onChange={(e)=>setSchool(e.target.value)} // Met à jour l'état parent
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            defaultValue=""
            autoComplete="given-name"
            onChange={(e)=>setFname(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            defaultValue=""
            autoComplete="family-name"
            onChange={(e)=>setLname(e.target.value)}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            defaultValue=""
            autoComplete="shipping address"
            onChange={(e)=>setAdress(e.target.value)}

          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            defaultValue=""
            autoComplete="shipping address-level2"
            onChange={(e)=>setCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            defaultValue=""
            fullWidth
            autoComplete="shipping postal-code"
            onChange={(e)=>setZip(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            defaultValue=""
            fullWidth
            autoComplete="shipping country"
            onChange={(e)=>setCountry(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}