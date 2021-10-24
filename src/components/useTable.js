import { Table } from '@material-ui/core';

const useTable = (records, headCells) => {
  const TblContainer = props => <Table>{props.children}</Table>;

  return { TblContainer };
};

export default useTable;
