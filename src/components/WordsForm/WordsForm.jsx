import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import css from  './WordForm.module.css'

export default class WordsForm extends Component {
    state = {
        ukWord:'',
        enWord:'',
      }
    
    // Функция, которая  изменяет state когда вводим что-то в inpute  
    handleChange = (evt) => {
        // не выводится значение в консоль
        //console.dir('evt.target', evt)
        this.setState({[evt.target.name]: evt.target.value})
      }
    // Типа глубокая деструктуризация   
    // handleChange = ({target:{name,value}}) => {
    //     //console.log('evt', evt)
    //     this.setState({[name]:value})
    //   }

    render() {
    return (
      <div className={css.wordsFormWrapper}>
        <form className={css.wordsForm}>
        <TextField id="outlined-basic" label="Ukrainian" variant="outlined" value={this.state.ukWord} name="ukWord" onChange={this.handleChange}/>
        <TextField id="outlined-basic" label="English" variant="outlined" value={this.state.enWord} name="enWord" onChange={this.handleChange}/>
        <Button variant="contained">Add</Button>
        </form>
      </div>
    )
  }
}
