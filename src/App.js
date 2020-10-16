import React from 'react';
import Liste from "./components/Liste";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      inputEdit: "",
      value: [],
      
      
    }
  }
  handleChange(e) {
    this.setState({ input: e.target.value })
  }
  handleChangeEdit(e) {

    this.setState({ inputEdit: e.target.value })
  }

  enter = (e) => {
    if (e.key === "Enter") {
      let x = this.state;

      let objet = {
        valeur: x.input,
        validate: false,
        edit: false,
        checked: false,
      }
      x.value.push(objet);
      x.input = "";
      this.setState(x);
      console.log(x.input);
      return
    }
  }
  ajouter = () => {
    let x = this.state;

    let objet = {
      valeur: x.input,
      validate: false,
      edit: false,
      
    }
    x.value.push(objet);
    x.input = "";
    this.setState(x);
    console.log(x.input);
  }

  valider = (i) => {
    let y = this.state;
    if (y.value[i].validate === true) {
      y.value[i].validate = false;
    } else {
      y.value[i].validate = true;

    }
    this.setState(y)
  }

  modifier = (i) => {
    let z = this.state;
    if (z.value[i].edit === true) {
      
      z.value[i].edit = false;
      z.value[i].valeur = z.inputEdit
      z.inputEdit ="";
      console.log(z.value[i]);
      

    } else {
      z.value[i].edit = true;

    }

    this.setState(z)
    console.log("test");

  }

  delete = (i) => {
    let a = this.state;
    a.value.splice(i, 1);
    this.setState(a)
  }

  


  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>TODO LIST</h1>
          <input type="text" className="w-75" value={this.state.input} onChange={e => this.handleChange(e)} onKeyPress={this.enter} />
          <button className="w-25 bg-primary" onClick={() => this.ajouter()}>ajouter !</button>
          <div className="my-2">
            <button className="btn btn-outline-secondary mr-2" onClick={() => this.operation()}>Toutes</button>
            <button className="btn btn-outline-success">Completées</button>
            <button className="btn btn-outline-danger ml-2">A faire</button>
          </div>
          <ul>
            {
              this.state.value.map((e, i) => {
                if (e.edit === false) {
                  return (
                    <Liste key={i} value={e.valeur} validate={e.validate} valider={() => this.valider(i)} ajouter={() => this.ajouter()} modifier={() => this.modifier(i)} delete={() => this.delete(i)} showme = {e.showMe}/>

                  )

                } else {
                  return (
                    <li key={i}>
                      <input value={this.state.inputEdit} onChange={e => this.handleChangeEdit(e)} type="text" className="w-75" />
                      <button onClick={() => this.modifier(i)} className="w-25"><i className="fas fa-check"></i></button>
                    </li>
                  )
                }
              })
            }

          </ul>

        </div>
      </div>
    )
  }
}