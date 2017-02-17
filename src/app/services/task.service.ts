import { Injectable }                           from '@angular/core';
import { AngularFire, FirebaseListObservable }  from 'angularfire2';

@Injectable()
export class TaskService {

  private tasks$: FirebaseListObservable<any[]>;

  constructor( private af:AngularFire ) { 
    this.tasks$ = af.database.list('/tasks');
    //console.debug(this.tasks);
  }

  public getTasks() {
      return this.tasks$;
  }

  private createTask( newTask: string ) {
    let promise = this.tasks$.push(newTask);
    //promise.then(console.log(`Creating task: ${promise.key}`))
  }

  private editTask( taskKey: string, taskValue: string ) {
    console.debug(`Editing task: ${taskKey}`);
    //this.tasks$.update(taskKey, taskValue);
  }

  private deleteTask( taskKey: string ) {
    console.log(`Removing task: ${taskKey}`);
    this.tasks$.remove(taskKey);
  }

}
