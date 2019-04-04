import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: '';
  todoItem: '';
  todos: any[];
  constructor(private database: AngularFireDatabase) {}

  ngOnInit() {
    const ref = this.database.list('todos');
    ref.valueChanges().subscribe(value => {
      this.todos = value;
      console.log(this.todos);
    });
  }

  addtodo(form: NgForm) {
    console.log(form.value);
    this.database.list('/todos').push(form.value);
  }

}
