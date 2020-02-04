import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { shuffleFlashcards} from '../store/actions';

import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Layout = memo((props) => {
  const dispatch = useDispatch();
  const flashcards = useSelector(state => state.flashcards);
  const handleShuffleFlashcards = () => {
    dispatch(shuffleFlashcards(flashcards));
  };

  return (
      <Paper
          elevation={0}
          style={{padding: 0, margin: 10, backgroundColor: '#fafafa'}}
      >
        <AppBar color="primary" position="static" style={{height: 64}}>
          <Toolbar style={{height: 64}}>
            <Typography color="inherit" style={{flexGrow: 1}}>FLASHCARDS</Typography>
            <Button color='inherit' onClick={handleShuffleFlashcards}>Shuffle</Button>
          </Toolbar>
        </AppBar>
        <br/>
        {props.children}
      </Paper>
  );
  }
);

export default Layout;