import { Container } from '@mui/material';
import WordsForm from './WordsForm/WordsForm';

import React, { Component } from 'react';
import WordsList from './WordsList/WordsList';
import FilterWords from './FilterWords/FilterWords';

export default class App extends Component {
  state = {
    words: [],
    filter: '',
  };

  // Метод, который при самбите формы добавляет объект слова в массив слов
  // Приходит объект слова с 3 ключами ukWord enWord id (генерим)
  // Нужно этот метод пропсом в компонент Form
  // Нужно передавать callback функцию, а не объект
  // callback будет возвращать объект
  formSubmit = newWord => {
    this.setState(prevState => ({
      words: [...prevState.words, newWord],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      words: prevState.words.filter(word => word.id !== id),
    }));
  };

  // handleChange = e =>{
  //   this.setState({filter: e.target.value});
  // }
  handleChange = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  getFilteredtWords = () => {
    const normolizedValue = this.state.filter.toLocaleLowerCase().trim();
    return this.state.words.filter(word => {
      return word.enWord
        .concat(word.ukWord)
        .toLocaleLowerCase()
        .includes(normolizedValue);
    });
  };

  render() {
    return (
      <Container maxWidth="xl">
        <WordsForm onSubmit={this.formSubmit} />
        <FilterWords onChange={this.handleChange} />
        {/* <WordsList words={this.state.words} wordDelete={this.handleDelete}/> */}
        <WordsList
          words={this.getFilteredtWords()}
          wordDelete={this.handleDelete}
        />
      </Container>
    );
  }
}
