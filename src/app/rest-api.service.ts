import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {AppConfig} from './../environments/environment';
import {Node, SharedFile} from "./model/model";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  constructor(private httpClient: HttpClient) {
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public upload() {
    return this.httpClient.get(AppConfig.apiUrl).pipe(catchError(this.handleError));
  }

  public whoAmI(): Observable<Node> {
    return this.httpClient.get<Node>(`${AppConfig.apiUrl}/whoami`).pipe(catchError(this.handleError));
  }

  public published(): Observable<SharedFile[]> {
    return this.httpClient.get<SharedFile[]>(`${AppConfig.apiUrl}/file/publish`).pipe(catchError(this.handleError));
  }
}
