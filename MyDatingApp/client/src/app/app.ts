import { HttpClient } from '@angular/common/http';
import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private http = inject(HttpClient)
  protected readonly title = signal('client');
  protected members = signal<any>([]);
  
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: (Response) => this.members.set(Response),
      error: (error) => console.error(error),
      complete: () => console.log('Request complete')
    })
  }

  //constructor(private http: HttpClient){}
}
