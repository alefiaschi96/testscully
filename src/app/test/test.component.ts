import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Response {
  userId!: string;
  id!: number;
  title!: string;
  completed!: boolean;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  x= new Response();

  ngOnInit() {
    this.getPage().then((response) => {
      this.x = response;
    })
  }

  getPage(): Promise<Response> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1', {
    }).toPromise();
  }
}
