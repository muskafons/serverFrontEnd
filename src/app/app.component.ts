import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Server } from './interface/server';
import { ServerService } from './service/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'serverFrontEnd';

  public servidores!: Server[];

  constructor(private service: ServerService) {
    this.getServidores();
  }

  public getServidores(): void {
    this.service.servers$.subscribe({
      next: (response: Server[]) => {this.servidores = response;},
      error: (error: HttpErrorResponse) => { alert(error.message);},
    });
  }
}
