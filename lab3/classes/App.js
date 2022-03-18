import Todo from "./Todo";

export default class App {
    constructor() {
      console.log("🍕");
      // HINT🤩
      // set up the enter Key
      this.setupEventListeners();
      // when the app loads, we can show previously saved items from localstorage
      // localStorage.clear;
      this.loadFromStorage();
    }
  
    setupEventListeners() {
      console.log("👂🏽");
      // HINT🤩
      document.querySelector("#add-item-text").addEventListener("keyup", this.createItem.bind(this));
      // pressing the enter key in the text field triggers the createItem function
      // addEventListener("keyup", this.createItem.bind(this));
      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // while testing, feel free to console.log(this) to see what's in it
    }
  
    createItem(e) {
      if (e.key === "Enter") {
        console.log("📕");
        let txt = document.querySelector("#add-item-text");
        if (txt.value !== '' && txt.value !== ' ') {
          let todo = new Todo(txt.value);
          todo.add();
          todo.saveToStorage();
          this.reset(txt);
        }
      }
      // HINT🤩
      // this function should create a new todo by using the Todo() class
      // new Todo(text)
      // todo.add();
      // todo.saveToStorage();
      // if you used bind() in the previous function, you'll notice that this refers to the current class instance
      // clear the text field with .reset() after adding the item
      // if (e.key === "Enter")
    }
  
    loadFromStorage() {
      // HINT🤩
      // load all items from storage here and add them to the screen
      // use the Todo class to create the elements

      // kijken of key 'todos' niet leeg is, zo ja dan zit er iets in en willen we de data ophalen en tonen
      // if(localStorage.getItem('todos') != null) {
      //   let todos = JSON.parse(localStorage.getItem('todos'));
      //   for (let i = 0; i < todos.length; i++) {
      //     let todo = new Todo(todos[i], false);
      //     todo.add();
      //   }
      // }

      let todos = JSON.parse(localStorage.getItem('todos'));  
      if(todos !== null) {
        //console.log("hello");
      todos.forEach((title) => {
          let todo = new Todo(`${title['priority']}:${title['title']}`);
          if(title['status'] === "done"){
            todo.add("done");
          }
          else {
            todo.add();
          }              
      });
    }
    }
  
    reset(input) {
      // this function should reset the form / clear the text field
      input.value = "";
    }
  }  