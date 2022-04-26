import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Server } from '../interface/server';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private apiUrl = 'http://localhost:8080/server';

  constructor(private http: HttpClient) {}

  public getServers(): Observable<Server[]> {
    return this.http.get<Server[]>(`http://localhost:8080/server/list`);
  }
  servers$ = <Observable<Server[]>> this.http.get<Server[]>(`${this.apiUrl}/list`); // same shit as the getServers()
  
  save$ = (server: Server) => <Observable<Server>> this.http.post<Server>(`${this.apiUrl}/save`, server);

  ping$ = (ipAddress: string) => <Observable<Server>> this.http.get<Server>(`${this.apiUrl}/ping/${ipAddress}`);

  delete$ = (serverId: number) => <Observable<boolean>> this.http.delete<boolean>(`${this.apiUrl}/delete/${serverId}`);

  

}
