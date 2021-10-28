import { useState } from 'react';
import {
  InputAdornment,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import Search from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

import PageHeader from '../../components/PageHeader';
import EmployeeForm from './EmployeeForm';
import useTable from '../../components/useTable';
import * as employeeService from '../../services/employeeService';
import Controls from '../../components/controls/Controls';
import Popup from '../../components/Popup';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  searchInput: {
    width: '75%'
  },
  newButton: {
    position: 'absolute',
    right: '10px'
  }
}));

const headCells = [
  { id: 'fullName', label: 'Employee Name' },
  { id: 'email', label: 'Email Address (Personal)' },
  { id: 'mobile', label: 'Mobile Number' },
  { id: 'department', label: 'Department', disableSorting: true }
];

const Employees = () => {
  const classes = useStyles();
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({ fn: items => items });
  const [openPopup, setOpenPopup] = useState(false);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
      fn: items => {
        if (target.value === '') return items;
        else
          return items.filter(item =>
            item.fullName.toLowerCase().includes(target.value)
          );
      }
    });
  };

  const addOrEdit = (employee, resetForm) => {
    employeeService.insertEmployee(employee);
    resetForm();
    setOpenPopup(false);
    setRecords(employeeService.getAllEmployees());
  };

  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search Employees"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              )
            }}
            onChange={handleSearch}
          />
          <Controls.Button
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={() => {
              setOpenPopup(true);
              // setRecordForEdit(null);
            }}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
};

export default Employees;
