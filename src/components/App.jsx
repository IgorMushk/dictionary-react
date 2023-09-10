import { Container } from '@mui/material';
import WordsForm from './WordsForm/WordsForm';

import React, { Component } from 'react';
import WordsList from './WordsList/WordsList';

export default class App extends Component {
state = {
  words: [],
};

// Метод, который при самбите формы добавляет объект слова в массив слов
// Приходит объект слова с 3 ключами ukWord enWord id (генерим)
// Нужно этот метод пропсом в компонент Form
// Нужно передавать callback функцию, а не объект
// callback будет возвращать объект
formSubmit = (newWord) => {
  this.setState(prevState =>({
    words: [...prevState.words, newWord ]
   }))
}

handleDelete = (id) => {
  this.setState(prevState =>({
    words: prevState.words.filter(word=> word.id !== id)
  }))
}

  render() {
    return (
      <Container maxWidth="xl">
        <WordsForm onSubmit={this.formSubmit}/>
        <WordsList words={this.state.words} wordDelete={this.handleDelete}/>
      </Container>
    );
  }
}
