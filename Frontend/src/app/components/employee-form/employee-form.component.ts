import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs';

@Component({
  imports: [FormsModule],
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  name: string = "";
  jobTitle: string = "";
  phone: string = "";
  email: string = "";
  imageUrl: string = "";

  todoService = inject(TodoService);  

  onSubmit() {
    const data = {
      name: this.name,
      jobTitle: this.jobTitle,
      phone: this.phone,
      email: this.email,
      imageUrl: this.imageUrl
    };

this.todoService.createEmployee(data)
        .pipe(
          catchError((err) => {
            console.log(err);
            throw err})
        ).subscribe((resp) =>{
          console.log('created', data);
        })
  }
}