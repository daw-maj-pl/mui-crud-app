import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

import PageHeader from '../../components/PageHeader';
import EmployeeForm from './EmployeeForm';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}));

const Employees = () => {
  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
};

export default Employees;
