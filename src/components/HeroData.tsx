import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from "@material-ui/core";
import React from "react";
import { Hero } from "../types/class/Hero";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 20,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export interface HeroDataProps{
  hero: Hero;
}

const getKeyValue = (key: string) => (obj: Record<string, any>) => obj[key];

const HeroData: React.FC<HeroDataProps> = (props) => {
  const { hero } = props;
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root} key={hero.name}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{hero.name}</StyledTableCell>
            <StyledTableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(hero).map((key) => (
            (key !== 'name') ?
            <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row">
                {key}
              </StyledTableCell>
              <StyledTableCell >{getKeyValue(key)(hero)}</StyledTableCell>
            </StyledTableRow> : undefined
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default HeroData;
