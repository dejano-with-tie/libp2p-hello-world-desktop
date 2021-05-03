import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {AppConfig} from './../environments/environment';
import {DownloadRequest, DownloadState, Node, SharedFile} from "./model/model";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  constructor(private http: HttpClient) {
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
    return this.http.get(AppConfig.apiUrl).pipe(catchError(this.handleError));
  }

  public whoAmI(): Observable<Node> {
    return this.http.get<Node>(`${AppConfig.apiUrl}/whoami`).pipe(catchError(this.handleError));
  }

  public shared(): Observable<SharedFile[]> {
    return this.http.get<SharedFile[]>(`${AppConfig.apiUrl}/share`).pipe(catchError(this.handleError));
  }

  public addDownload(toDownload: SharedFile, override = true): Observable<void> {
    const payload: DownloadRequest = {
      remoteFileId: toDownload.id,
      remotePeerId: toDownload.provider.id.id,
      override
    };
    return this.http.post<void>(`${AppConfig.apiUrl}/download`, payload);
  }

  search(value: string): Observable<any> {
    return this.http.get(`${AppConfig.apiUrl}/file/find/${encodeURIComponent(value)}`);
  }

  public getDownloads(): Observable<any> {
    return this.http.get<any>(`${AppConfig.apiUrl}/download`);
  }

  public action(id: number, action: 'RESUME' | 'PAUSE'): Observable<DownloadState> {
    return this.http.post<DownloadState>(`${AppConfig.apiUrl}/download/${id}`, {action});
  }

  delete(id: number, fromFs = true): Observable<void> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {fromFs},
    };
    return this.http.delete<void>(`${AppConfig.apiUrl}/download/${id}`, options);
  }

  public config(): Observable<any> {
    return this.http.get<any>(`${AppConfig.apiUrl}/config`);
  }

}
