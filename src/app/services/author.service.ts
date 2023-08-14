import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  apiUrl: string = 'http://localhost:4001/author';
  errorMsg: string | undefined;

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
    .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    return throwError(() => `Error occurred: ${err}`);
  }
  
}
