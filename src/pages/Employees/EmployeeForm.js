import { useState, useEffect } from 'react';
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Form } from '../../components/useForm';

const initialFieldValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false
};

const EmployeeForm = () => {
  const { values, setValues, handleInputChange } = useForm(initialFieldValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
          />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
