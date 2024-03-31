import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {
    // taskService.getAllTasks().subscribe(res => this.tasks=res)
    this.getDATA()
  }

  getDATA(){
    this.taskService.getAllTasks().subscribe(res => this.tasks=res)
  }

  addtask(title:string,description:string,completed:boolean){
    let task = {title, description, completed}
    this.taskService.createTask(task).subscribe(res => this.getDATA())
    
  }
  delTask(id:number){
    console.log(id);
    this.taskService.deleteTask(id).subscribe(res => this.getDATA())
    
  }
  updTask(id:number, title:string, description:string, completed:boolean){
    // console.log(id,title,description,completed);
    let task = {title, description, completed}
    this.taskService.updateTask(id,task).subscribe(res => this.getDATA())
    
  }
}
