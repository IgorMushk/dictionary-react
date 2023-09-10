import React from 'react';
import css from './WordsList.module.css'
import Button from '@mui/material/Button';

const WordsList = ({ words, wordDelete }) => {
  return (
    <div className={css.wordsListWrapper}>
    <ul className={css.wordsList}>
        {words.map((word) => (<li className={css.itemWord} key={word.id}><span>{word.ukWord}</span>:<span>{word.enWord}</span>
            {/* <button onClick={()=>wordDelete(word.id)}>Delete</button> */}
            <Button variant="contained" onClick={()=>wordDelete(word.id)}>Button</Button>
            </li>)
        )}
    </ul>
    </div>
  );
};

export default WordsList;
