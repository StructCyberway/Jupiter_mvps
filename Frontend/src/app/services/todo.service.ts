import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../model/data.type';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  http = inject(HttpClient);
  getTodosfromApi(){
    const url = "http://localhost:8080/employee/all";
    return this.http.get<Array<Todo>>(url);
  }
  
  createEmployee(data: Data): Observable<Data> {
    const url = "http://localhost:8080/employee/add";
    return this.http.post<Data>(url, data);
  }
}
