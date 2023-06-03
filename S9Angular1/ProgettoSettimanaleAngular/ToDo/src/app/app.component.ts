import { Component } from '@angular/core';
import { Todo } from "./Todo"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo'
  todos : Todo[] = []
  newTodo : string

  salvaList(){
    if(this.newTodo){
      let todo = new Todo();
      todo.nome = this.newTodo
      todo.completato = true
      this.todos.push(todo)
      this.newTodo = ''
    } else{
      alert('Attenzione, scrivere una task!')
    }
  }

  fatti(id:number){
    this.todos[id].completato = !this.todos[id].completato
  }

  elimina(id:number){
    this.todos = this.todos.filter((q, i) => i !== id)
  }

  public isHovered: boolean = true

}
