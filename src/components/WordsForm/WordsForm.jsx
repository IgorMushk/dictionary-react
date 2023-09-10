import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import css from './WordForm.module.css';
import { nanoid } from 'nanoid';

export default class WordsForm extends Component {
  state = {
    ukWord: '',
    enWord: '',
  };

  // Функция, которая  изменяет state когда вводим что-то в inpute
  handleChange = evt => {
    // не выводится значение в консоль
    //console.dir('evt.target', evt)
    this.setState({ [evt.target.name]: evt.target.value });
  };
  // Типа глубокая деструктуризация
  // handleChange = ({target:{name,value}}) => {
  //     //console.log('evt', evt)
  //     this.setState({[name]:value})
  //   }

  // ??? ...this.state , а не ...this.state.words
  // т.к. это state WordFormn - новое введеное слово
  handelSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, id: nanoid(5) });
    this.setState({
      ukWord: '',
      enWord: '',
    });
  };

  render() {
    return (
      <div className={css.wordsFormWrapper} onSubmit={this.handelSubmit}>
        <form className={css.wordsForm}>
          <TextField
            id="outlined-basic"
            label="Ukrainian"
            variant="outlined"
            value={this.state.ukWord}
            name="ukWord"
            onChange={this.handleChange}
          />
          <TextField
            id="outlined-basic"
            label="English"
            variant="outlined"
            value={this.state.enWord}
            name="enWord"
            onChange={this.handleChange}
          />
          <Button variant="contained" type="submit">
            Add
          </Button>
        </form>
      </div>
    );
  }
}

// Т.к. это классовый компонет, то  до props можно достучатся через this.props
// Но прежде чем стукатьсядо  props, нужно написать метод, который будет обрабатывать submin
