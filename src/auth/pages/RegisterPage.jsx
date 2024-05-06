import { useMemo, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Link as RouterLink} from 'react-router-dom'
import {Grid, Typography, TextField, Button, Link, Alert} from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener un @'],
  password: [ (value) => value.length >= 6, 'El password debe de ser mas de 6 letras'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio'],
}


export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth);
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { 
    formState, displayName, email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid, 
  } =  useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true)

    if( !isFormValid) return; //Si no es valido...

    dispatch( startCreatingUserWithEmailPassword(formState) );
  }

  return (
   <AuthLayout title='Create Account'>

        <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            
            <Grid item xs={ 12 } sx={{ mt: 2}}> 
              <TextField
                label="Name"
                type="text"
                variant="outlined"
                placeholder="Type your name"
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={onInputChange}
                error={ !!displayNameValid && formSubmitted }
                helperText={ displayNameValid}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2}}> 
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                placeholder="email@example.com"
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange}
                error={ !!emailValid && formSubmitted}
                helperText={ emailValid}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField
                label="password"
                type="password"
                variant="outlined"
                placeholder="Enter password"
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange}
                error={ !!passwordValid && formSubmitted }
                helperText={ passwordValid}
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

            <Grid 
              item 
              xs={ 12 }
              display={ !!errorMessage ? '' : 'none' }
              >
                <Alert severity='error'>{ errorMessage }</Alert>
               </Grid>

              <Grid item xs={ 12 }>
                <Button 
                disabled={ isCheckingAuthentication }
                type='submit'
                variant='contained' 
                fullWidth>
                  Create Account
                </Button>
                </Grid>
               </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1}}>Already have an account?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
              Log in
              </Link>

            </Grid>
            
          </Grid>

        </form>

      </AuthLayout>
  )
}
