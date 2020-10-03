import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface StudentState extends EntityState<Student> { }
//EntityState from Akita, providing it with the Student Entity type

@Injectable({
    providedIn: 'root'
})
@StoreConfig({
    name: 'students'
})
export class StudentStore extends EntityStore<StudentState, Student> {
//EntityStore we need to define the store’s interface
  constructor() {
        super();
    }
}
