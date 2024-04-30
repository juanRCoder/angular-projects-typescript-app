import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  description?: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent {
  
  task = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  lastId: number = 0;
  tasks: Task[] = [];
  
  //Metodo para agregar una nueva task
  addTask() {
    const titleValue = this.task.get('title')?.value ?? '';
    const descriptionValue = this.task.get('description')?.value ?? '';
    this.lastId++;
    this.tasks.push({
      id: this.lastId,
      title: titleValue,
      description: descriptionValue,
      isChecked: false,
    });

    //Limpiado o reseteado de los inputs
    this.task.reset();
  }

  //Metodo para eliminar la tarea mediante el id
  deleteTask(id: number) {
    this.tasks = this.tasks.filter((t) => t.id != id);
  }

  //Metodo para alternar el estado del isChecked de Task
  isChecked: boolean = false;
  toggleCheckbox(task: Task) {
    task.isChecked = !task.isChecked;
  }

  idUpdate: number = 0;
  titleUpdate: string = '';
  descriptionUpdate: string = '';
  isbtnUpdate: boolean = false;

  //Metodo para extraer los datos a actualizar y enviarlos al formulario
  updateTask(id: number) {
    const taskUpdate = this.tasks.find((t) => t.id === id);
    if (taskUpdate) {
      this.task.get('title')?.setValue(taskUpdate.title ?? '');
      this.task.get('description')?.setValue(taskUpdate.description ?? '');
      this.isbtnUpdate = true;

      this.idUpdate = id;
      this.titleUpdate = taskUpdate.title ?? '';
      this.descriptionUpdate = taskUpdate.description ?? '';
    }
  }

  //Metodo para actualizar la Task
  updTask() {
    const addTaskUpdate = this.tasks.findIndex((t) => t.id === this.idUpdate);
    if (addTaskUpdate !== -1) {
      this.tasks[addTaskUpdate].title = this.task.get('title')?.value ?? '';
      this.tasks[addTaskUpdate].description = this.task.get('description')?.value ?? '';
      this.isbtnUpdate = false;

      this.task.reset();
    } else {
      console.log('Task no encontrado en el array de Tasks');
    }
  }
}
