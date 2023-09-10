import { Container } from '@mui/material';
import WordsForm from './WordsForm/WordsForm';

import React, { Component } from 'react';
import WordsList from './WordsList/WordsList';
import FilterWords from './FilterWords/FilterWords';

export default class App extends Component {
  // constructor(){
  //   super();
  //   this.formSubmit = this.formSubmit.bind(this);
  //}
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
  //formSubmit(newWord) {
    this.setState(prevState => ({
      words: [...prevState.words, newWord],
    }),()=>console.log(this.state.words) );
    // вопрос - асинхронная операция. При завпуске приложени и первом submit, как вывести обновленный state
    // Нужно передать 2-ым аргументом еще один callback
    // console.log(this.state.words)
  };

  // Если заменить стрелочную на декларотивную  
  // Устрелочной функции нет своего контекста и она берет у парента в помент обьявления, а не вызова
  // formSubmit(newWord) {}
  // Как вариант забаиндить конестект в конструкторе

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
