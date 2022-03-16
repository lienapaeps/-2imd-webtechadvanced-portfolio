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
          this.reset(txt);
          todo.add();
          todo.saveToStorage();
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
      if(localStorage.getItem('data') != null) {
        let data = JSON.parse(localStorage.getItem('data'));
        for (let i = 0; i < data.length; i++) {
          let todo = new Todo(data[i]);
          todo.add();
        }
      }
    }
  
    reset(input) {
      // this function should reset the form / clear the text field
      input.value = "";
    }
  }  