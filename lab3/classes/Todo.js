export default class Todo {
    constructor(title) {
      // HINT🤩
      // use a constructor to set basic property values
      this.title = title;
    }
  
    createElement() {
        let li = document.createElement("li");

        if(this.title.startsWith("low:")) {
            li.classList.add("prior-low");
            li.innerHTML = this.title.slice(4); // removes low: (4)
        } else if (this.title.startsWith("medium:")) {
            li.classList.add("prior-medium");
            li.innerHTML = this.title.slice(7); // removes medium: (7)
        } else if (this.title.startsWith("high:")) {
            li.classList.add("prior-high");
            li.innerHTML = this.title.slice(5); // removes high: (5)
        } else {
            li.classList.add("prior-medium");
            li.innerHTML = this.title;
        }

        li.addEventListener("click", this.markDone);

        return li;
      // HINT🤩
      // this method will create the HTML structure with the correct classes, based on the todo priority
      // let newNote = document.createElement("li");
      // check if the todo item includes a priority like medium: to generate the correct classnames
      // don't forget to hook up an event listener for the click event
      // return newNote;
    }
  
    markDone(e) {
      if (this.classList.contains('done')) {
        this.remove();
      } else {
        this.classList.add('done');
      }
      // HINT🤩
      // this function should mark the current todo as done, by adding the correct CSS class
      // if the item is clicked, but was already marked as done, remove the item from the list
    }
  
    add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      let todo = this.createElement(); // should return a full <li> with the right classes and innerHTML
      document.querySelector("#todo-list").appendChild(todo);
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
  }
  