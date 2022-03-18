export default class Todo {
    constructor(title, priority, status) {
      // HINT🤩
      // use a constructor to set basic property values
      this.title = title;
      this.priority = priority;
      this.status = status;
    }
  
    createElement() {
        let li = document.createElement("li");

        if(this.title.startsWith("low:")) {
            li.classList.add("prior-low");
            this.title = this.title.replace("low:", "");
            this.priority = "low";
        } else if (this.title.startsWith("medium:")) {
            li.classList.add("prior-medium");
            this.title = this.title.replace("medium:", "");
            this.priority = "medium";
        } else if (this.title.startsWith("high:")) {
            li.classList.add("prior-high");
            this.title = this.title.replace("high:", "");
            this.priority = "high";
        } else {
            li.classList.add("prior-medium");
            this.title = this.title.replace("medium:", "");
            this.priority = "medium";
        }

        li.innerHTML = this.title;
        li.addEventListener("click", this.markDone.bind(li));

        return li;
      // HINT🤩
      // this method will create the HTML structure with the correct classes, based on the todo priority
      // let newNote = document.createElement("li");
      // check if the todo item includes a priority like medium: to generate the correct classnames
      // don't forget to hook up an event listener for the click event
      // return newNote;
    }
  
    markDone(e) {
      let todos = localStorage.getItem('todos');
      todos = JSON.parse(todos) || ("todos");

      if (this.className.includes("done")) {
        this.remove();
        todos.forEach((element, index) => {
          if(element['title'] === this.innerHTML){
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
          }
        });

        // // kijken of key 'todos' leeg is
        // if (localStorage.getItem('todos') === null) {
        //   array = [];
        // } else {
        //   // data ophalen
        //   array = JSON.parse(localStorage.getItem('todos'));
        // }
        // // index nodig om te bepalen welke todo we willen verwijderen in de todos array
        // let index = this.innerText;
        // array.splice(array.indexOf(index), 1);
        // // terug toevoegen in local storage
        // localStorage.setItem('todos', JSON.stringify(array));

      } else {
        this.classList.add("done");
        todos.forEach((element, index)=> {
          if(element['title'] === this.innerHTML) {
            let todo = todos[index];
            todo['status']= "done";
            localStorage.setItem("todos", JSON.stringify(todos));
          }
        });
      }       
      // HINT🤩
      // this function should mark the current todo as done, by adding the correct CSS class
      // if the item is clicked, but was already marked as done, remove the item from the list
    }
  
    add(status) {
      // HINT🤩
      // this function should append the note to the screen somehow
      let todo = this.createElement(); // should return a full <li> with the right classes and innerHTML
      // if (this.status === true) {
      //   todo.classList.add('done');
      // }
      if (status) {
        todo.classList.add('done');
      }

      document.querySelector("#todo-list").appendChild(todo);
    }

    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify

      // https://www.youtube.com/watch?v=2hJ1rTANVnk&t=338s

      // get data van input veld
      // let todo = this.title;

      // kijken of key 'todos' leeg is, zo ja dan willen we het opvullen
      // if(localStorage.getItem('todos') == null) {
      //   localStorage.setItem('todos', '[]');
      // }

      // // get old data en toevoegen aan niewe data
      // let oldData = JSON.parse(localStorage.getItem('todos'));
      // oldData.push(todo);

      // // oude en nieuwe data toevoegen in local storage
      // localStorage.setItem('todos', JSON.stringify(oldData));

      let todos = localStorage.getItem("todos");
      todos = JSON.parse(todos) || [];
      todos.push({"title": this.title, "priority":this.priority, 'status': "not done"});
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  
  }