class Project {
  constructor(name, info, date = '9999/99/99') {
    this.name = name;
    this.info = info;
    this.date = date;
  }

  display_name() {
    return `${this.name}是一個${this.info}`;
  }
  display_full() {
    return `${this.display_name()}並舉辦於${this.date}`; 
  }
}

let idea = new Project("Coding101", "一個程式競賽", "2021/12/20");


console.log(idea.display_full());
