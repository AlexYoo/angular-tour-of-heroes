import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { Store } from './store';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotplaceService {

  private usersUrl = 'http://localhost:8080/jwt-users';
  private insertStoreUrl = 'http://localhost:8080/store/insert/';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  /**
   * HTTP 요청이 실패한 경우를 처리합니다.
   * 애플리케이션 로직 흐름은 그대로 유지됩니다.
   * @param operation - 실패한 동작의 이름
   * @param result - 기본값으로 반환할 객체
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: 리모트 서버로 에러 메시지 보내기
      console.error(error); // 지금은 콘솔에 로그를 출력합니다.

      // TODO: 사용자가 이해할 수 있는 형태로 변환하기
      this.log(`${operation} failed: ${error.message}`);

      // 애플리케이션 로직이 끊기지 않도록 기본값으로 받은 객체를 반환합니다.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }

  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.usersUrl).pipe(
  //     catchError(this.handleError<User[]>('getUsers', []))
  //   );
  // }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => this.log('fetched users')),
        catchError(
          this.handleError<User[]>('getUsers', [])
        )
      );
  }

  insertStore(store: Store): Observable<{}> {
    return this.http.post<Store>(this.insertStoreUrl, store, this.httpOptions )
      .pipe(
        catchError(this.handleError('insertStore'))
      );
  }

}
