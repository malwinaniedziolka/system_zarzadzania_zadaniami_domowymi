const { randomUUID } = require('crypto');

class Tasks {
  constructor(name, description, deadline) {
    this.id = randomUUID();
    this.name = name;
    this.description = description;
    this.deadline = deadline;
    this.done = false;
  }

  static #tasks = [
    //mozna tutaj dodac przykladowe zadania jesli sie chce
  ];

  static getAll() {
    return this.#tasks;
  }

  static add(task) {
    this.#tasks.push(task);
  }

  static markAsDone(id) {
    const task = this.#tasks.find((task) => task.id == id);
    if (task) task.done = true;
  }

  static getAllUpcoming(){
    const now = new Date()
    return this.#tasks.filter(task => new Date(task.deadline) > now && task.done == false);
  }

  static getAllPastDue(){
    const now = new Date()
    return this.#tasks.filter(task => new Date(task.deadline) < now && task.done == false);
  }

  static getAllCompleted(){
    return this.#tasks.filter(task => task.done == true);
  } 

  static deleteById(id) {
    this.#tasks = this.#tasks.filter((task) => task.id !== id);
  }
}

module.exports = Tasks;
