import { Component, OnInit }                    from '@angular/core';
import { AngularFire, FirebaseListObservable }  from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private newTask: string;
  private tasks: FirebaseListObservable<any[]>;

  constructor(private af:AngularFire) { 
    this.tasks = af.database.list('/tasks');
    //console.debug(this.tasks);
  }

  ngOnInit() {
  }

  private createTask() {
    let promise = this.tasks.push(this.newTask);
    this.newTask = '';
    //promise.then(console.log(`Creating task: ${promise.key}`))
  }

  private editTask(taskId: string) {
    console.log(`Editing task: ${taskId}`);
    //this.tasks.update(taskId);
  }

  private deleteTask(taskId: string) {
    console.log(`Removing task: ${taskId}`);
    this.tasks.remove(taskId);
  }


}
