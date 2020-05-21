import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Origin } from './origin-list/origin-list.component';
import { promise } from 'protractor';
import { url } from 'inspector';
@Injectable({
  providedIn: 'root'
})
export class CsgDataService {
  private apiBaseUrl = 'http://localhost:3000/api';
  public getOrigins() : Promise<Origin[]> {
    const Url: string = `${this.apiBaseUrl}/origins`;
  return this.http
  .get(Url)
  .toPromise()
  .then(response => response as Origin[])
  .catch(this.handleError);
}
public getStoresByOriginId(originId: string): Promise<Origin> {
  const Url: string = `${this.apiBaseUrl}/origins/${originId}`;
  return this.http
    .get(Url)
    .toPromise()
    .then(response => response as Origin)
    .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
console.error('Something has gone wrong', error);
return Promise.reject(error.message || error);
}

  constructor(private http: HttpClient) { }
}
