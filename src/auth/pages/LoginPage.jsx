import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link as RouterLink} from 'react-router-dom'
import {Grid, Typography, TextField, Button, Link, Alert} from '@mui/material'
import {Google} from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";


const formData = {
  email: '',
  password: ''
}


export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth);

  const dispatch =  useDispatch();

  const { email, password, onInputChange } =  useForm(formData);

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = ( event ) => {
  event.preventDefault();

  // console.log(email, password);
  dispatch( startLoginWithEmailPassword({email, password}) );
 }

 const onGoogleSignIn = ( event ) => {
  event.preventDefault();

    dispatch( startGoogleSignIn() );
 }

  return (
   <AuthLayout title='Login'>

        <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2}}> 
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                placeholder="email@example.com"
                fullWidth
                name='email'
                value={ email }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField
                label="password"
                type="password"
                variant="outlined"
                placeholder="Enter password"
                fullWidth
                name='password'
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid container
                  display={ !!errorMessage ? '' : 'none' }
                  sx={{ mt: 1 }}>
            <Grid 
              item 
              xs={ 12 }
              >
                <Alert severity='error'>{ errorMessage }</Alert>
               </Grid>
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

              <Grid item xs={ 12 } sm={ 6 }>
                <Button 
                disabled={ isAuthenticating }
                variant='contained' 
                fullWidth 
                type="submit">
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button 
                disabled={ isAuthenticating }
                variant='contained' 
                fullWidth
                onClick={ onGoogleSignIn }
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/register">
              Create an account
              </Link>

            </Grid>
            
          </Grid>

        </form>

      </AuthLayout>
  )
}
