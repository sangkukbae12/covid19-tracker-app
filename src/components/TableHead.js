import React from 'react';
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core';

const headCells = [
  {
    id: 'Country',
    numeric: false,
    disablePadding: true,
    label: 'Country',
  },
  {
    id: 'TotalConfirmed',
    numeric: true,
    disablePadding: false,
    label: 'Confirmed',
  },
  {
    id: 'TotalRecovered',
    numeric: true,
    disablePadding: false,
    label: 'Recovered',
  },
  { id: 'TotalDeaths', numeric: true, disablePadding: false, label: 'Deaths' },
];

const EnhancedTableHead = (props) => {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
