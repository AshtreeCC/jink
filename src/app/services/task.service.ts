// angular
import { Injectable }                           from '@angular/core';
import { AngularFire, FirebaseListObservable }  from 'angularfire2';

// services
import { AuthService }                          from './auth.service';

// models
import { ITask, Task }                          from '../models/task.model';

@Injectable()
export class TaskService {

  private tasks$: FirebaseListObservable<ITask[]>;

  constructor( private af:AngularFire, auth: AuthService ) {
    this.tasks$ = af.database.list(`/tasks/${auth.id}`);
    console.log(`Auth: ${auth.id}`);
    //console.log(this.tasks$);
  }

  get tasks() {
      return this.tasks$;
  }

  createTask( title: string ): firebase.Promise<any> {
    let promise = this.tasks$.push(new Task(title));
    promise.then((res) => {
        console.log(`created task: ${res.key} with title: ${title}`)
    });
    promise.catch((err) => {
        console.log('ERROR @ TaskService:createTask()', err);
    });
    return promise;
  }

  updateTask( task: ITask, changes: any): firebase.Promise<any> {
    console.debug(`editing task: ${task.$key}`);
    let promise = this.tasks$.update(task.$key, changes);
    return promise;
  }

  deleteTask( taskKey: string): firebase.Promise<any> {
    let promise = this.tasks$.remove(taskKey);
    promise.then((res) => {
        console.log(`Deleted task: ${taskKey}`);
    });
    return promise;
  }

}
