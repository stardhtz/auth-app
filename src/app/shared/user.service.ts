import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
  readonly apiUrl = 'http://backend.telkomuniversity.ac.id';
  constructor(private http: HttpClient) { }

  userAuthrntication(userName, password) {
    const data = 'username=' + userName + '&password=' + password;
    const reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.apiUrl + '/api/OpenAuth', data, {headers: reqHeader});
  }

  getCoba() {
    return this.http.get(this.apiUrl + '/api/cobacobaaja', {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('userToken')
      })
    });
  }
}
