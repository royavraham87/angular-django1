import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = 'http://127.0.0.1:8000/tasks/';

  constructor(private http: HttpClient) { }

  // Create a task
  createTask(taskData: any): Observable<any> {
    return this.http.post(this.baseUrl, taskData);
  }

  // Read all tasks
  getAllTasks(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // Read a single task
  getTaskById(taskId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${taskId}/`);
  }

  // Update a task
  updateTask(taskId: number, taskData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${taskId}`, taskData);
  }

  // Delete a task
  deleteTask(taskId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${taskId}`);
  }
}
