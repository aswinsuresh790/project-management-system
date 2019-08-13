import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class DatabaseApiService {

  baseUrl = 'https://todo462.000webhostapp.com/api/';
  user: any;
                
constructor(private http: HttpClient) { }
 
handleError(error: HttpErrorResponse) {
  console.log(error);
  return throwError('Error! something went wrong.');
}

getuser(): Observable<User[]> {
  return this.http.get(`${this.baseUrl}/read.php`).pipe(
    map((res) => {
      console.log(res);
      this.user = res;
      return this.user;
  }),
  catchError(this.handleError));
} 

setuser(user: User): Observable<User> {
  return this.http.post<User>(`${this.baseUrl}/create.php`, user); 
}

updateuser(user: User){
  return this.http.put<User>(`${this.baseUrl}/update.php`, user);   
}

deletePolicy(id: number){
  return this.http.delete<User>(`${this.baseUrl}/delete.php/?id=${id}`);
}

}
