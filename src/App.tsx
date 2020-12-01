import { Avatar, Card, CardContent, CardHeader, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import DataSearch from './components/DataSearch';
import HeroData from './components/HeroData';
import { useSearch } from './hooks/useSearch';
import { Hero } from './types/class/Hero';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
}));

function App() {
  const { result, submit} = useSearch<Hero>();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader 
        avatar={
          <Avatar aria-label="Star wars heroes">
            SW
          </Avatar>
        }
        title="Star Wars Heroes"     
      />
      <CardContent>
        <Grid container direction="column" justify="flex-start" alignItems="stretch">
          <DataSearch submit={submit} />
          {
            result?.map(item => <HeroData hero={new Hero(item)}  />)
          }
        </Grid>
      </CardContent>
    </Card>
  );
}

export default App;
