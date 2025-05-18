const { randomUUID } = require('crypto'); //do automatycznich id zadan

class Tasks {
  constructor(name, description, deadline) {
    this.id = randomUUID(); //daje randomowe id
    this.name = name;
    this.description = description;
    this.deadline = deadline;
    this.done = false; //potem zmienic jesli bede uzywac z bd
  }

  static #tasks = [
    { id: '1', name: "Matma", description: "opisss", deadline: "2026-03-21", done: false },
    { id: '2', name: "Angielski", description: "opis zadania", deadline: "2025-09-21", done: false },
    { id: '2', name: "Geografia", description: "zadanie 15", deadline: "2024-09-21", done: false },
  ];

  static getAll() {
    return this.#tasks;
  }

  static add(task) {
    this.#tasks.push(task);
  }

  static markAsDone(name) {
    const task = this.#tasks.find((task) => task.name === name);
    if (task) task.done = true;
}

  static deleteById(id) {
    this.#tasks = this.#tasks.filter((task) => task.id !== id);
  }
}

module.exports = Tasks;
