// angular
import { Injectable }                                   from '@angular/core';
import { AngularFire, FirebaseListObservable }          from 'angularfire2';
import { AngularFireOffline, AfoListObservable }        from 'angularfire2-offline';

// services
import { AuthService }                                  from './auth.service';
import { LOG }                                          from "../../system/console.service";

// models
import { ITask, Task }                                  from '../models/task.model';

@Injectable()
export class TaskService {

  private tasks$: AfoListObservable<ITask[]>;

  constructor(private afo: AngularFireOffline, private af: AngularFire, private authService: AuthService) {
    this.tasks$ = afo.database.list(`/tasks/${this.authService.id}`);
    LOG.ASSERT(this.authService.id, "Auth ID: ");
  }

  get tasks() {
      return this.tasks$;
  }

  createTask( title: string ): firebase.Promise<any> {
    let promise = this.tasks$.push(new Task(title));
    promise.then((task) => {
        LOG.SUCCESS("Created new task: ", title, "TaskService#createTask()");
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

  deleteTask( task: ITask): firebase.Promise<any> {
    let promise = this.tasks$.remove(task.$key);
    promise.then((res) => {
        LOG.SUCCESS("Deleted task: "+task.$key, task, "TaskService#deleteTask()");
    });
    return promise;
  }

}
