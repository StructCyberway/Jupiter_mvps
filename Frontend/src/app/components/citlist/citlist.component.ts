import { Component, inject, signal } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { TodoService } from '../../services/todo.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-citlist',
  imports: [],
  templateUrl: './citlist.component.html',
  styleUrl: './citlist.component.css'
})
export class CitlistComponent {
  todoService = inject(TodoService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
      this.todoService.getTodosfromApi()
        .pipe(
          catchError((err) => {
            console.log(err);
            throw err})
        ).subscribe((todos) =>{
          this.todoItems.set(todos);
        })
  }
}
