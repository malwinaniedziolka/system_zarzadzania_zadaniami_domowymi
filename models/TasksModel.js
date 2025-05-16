class Tasks {
  constructor(name, description, deadline) {
    this.name = name;
    this.description = description;
    this.deadline = deadline;
  }

  static #tasks = [
    { name: "Matma", description: "opisss", deadline: "2026-03-21" },
    { name: "Angielski", description: "opis", deadline: "2025-09-21" }
  ];

  static getAll() {
    return this.#tasks;
  }

  static add(task) {
    this.#tasks.push(task);
  }

  //nwm czy to potrzebne
  static findByName(name) {
    return this.#tasks.find((task) => task.name === name);
  }

  static deleteByName(name) {
    this.#tasks = this.#tasks.filter((task) => task.name !== name);
  }
}

module.exports = Tasks;
