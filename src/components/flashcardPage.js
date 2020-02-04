import React from 'react';
import { useSelector, useDispatch }from 'react-redux';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { nextFlashcard } from '../store/actions';
import Flashcard from './flashcard';

const FlashcardPage = () => {
  const curIndex = useSelector(state => state.curIndex);
  const total = useSelector(state => state.total);
  const curFlashcard = useSelector(state => state.curFlashcard);
  const dispatch = useDispatch();

  const handleNext = (e) => {
    e.preventDefault();
    dispatch(nextFlashcard());
  };

  return (
    <>
      <Container maxWidth="sm">
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
            <Flashcard flashcard={curFlashcard} />
          </Grid>
          <Grid item xs={12}>
            <Button
                variant="contained"
                disabled={curIndex === total - 1}
                onClick={handleNext}
                fullWidth
                color="primary"
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FlashcardPage;