import { Injectable } from '@angular/core';
import { Item } from '../Model/item.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../Model/login.model';
import { Register } from '../Model/register.model';

@Injectable({
  providedIn: 'root',
})
export class TodoAppService {
  readonly baseURL = 'http://localhost:24288/api/ToDoItem';
  readonly authURL = 'http://localhost:24288/api/Authentication';
  list: Item[] = [];

  constructor(private http: HttpClient) {}

  itemData: Item = new Item();
  loginData: Login = new Login();
  registerData: Register = new Register();

  postToDoItem() {
    return this.http.post(this.baseURL, this.itemData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  putToDoItem() {
    console.log(this.itemData.Id);
    console.log('Hello');
    console.log(this.itemData);
    return this.http.put(`${this.baseURL}/${this.itemData.Id}`, this.itemData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  deleteToDoItem(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  refreshList() {
    this.http
      .get(this.baseURL)
      .toPromise()
      .then((res) => {
        this.list = res as TodoItem[];
      });
  }

  loginUser() {
    return this.http.post(`${this.authURL}/login`, this.loginData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  registerUser() {
    return this.http.post(`${this.authURL}/register`, this.registerData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
