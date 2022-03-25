import { Component } from '@angular/core';
import { Item } from './Model/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDoApp';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems: Item[] = [
    { Name: 'eat', isCompleted: true },
    { Name: 'sleep', isCompleted: false },
    { Name: 'play', isCompleted: false },
    { Name: 'laugh', isCompleted: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.isCompleted : !item.isCompleted
    );
  }

  addItem(Name: string) {
    this.allItems.unshift({
      Name,
      isCompleted: false,
    });
  }
}
