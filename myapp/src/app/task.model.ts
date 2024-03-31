// src/app/task.model.ts

export interface Task {
    id?: number; // Optional property as it might not exist until the task is saved
    title: string;
    description: string;
    completed: boolean;
  }