// angular
import { Injectable }                           from '@angular/core';
import { AngularFire, FirebaseListObservable }  from 'angularfire2';

// services
import { AuthService }                          from './auth.service';
import { LOG }                                  from "../../system/console.service";

// models
import { ITask, Task }                          from '../models/task.model';

@Injectable()
export class TaskService {

  private tasks$: FirebaseListObservable<ITask[]>;

  constructor( private af:AngularFire, private authService: AuthService) {
    this.tasks$ = af.database.list(`/tasks/${this.authService.id}`);
    LOG.ASSERT(this.authService.id, "Auth ID: ");
  }

  get tasks() {
      return this.tasks$;
  }

  createTask( title: string ): firebase.Promise<any> {
    let promise = this.tasks$.push(new Task(title));
    promise.then((task) => {
        LOG.SUCCESS("Created task: "+task.key, title, "TaskService#createTask()");
    });
    promise.catch((error) => {
        LOG.ERROR(title, error)
    });
    return promise;
  }

  updateTask( task: ITask, changes: any): firebase.Promise<any> {
    let promise = this.tasks$.update(task.$key, changes);
    promise.then((result) => {
        LOG.SUCCESS("Edited task: "+task.$key, changes, "TaskService#editTask()");
    });
    return promise;
  }

  deleteTask( taskKey: string): firebase.Promise<any> {
    let promise = this.tasks$.remove(taskKey);
    promise.then((res) => {
        LOG.SUCCESS("Deleted task: "+taskKey, null, "TaskService#deleteTask()");
    });
    return promise;
  }

}
