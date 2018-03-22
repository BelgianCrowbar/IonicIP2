import {Injectable} from "@angular/core";
import {tap} from 'rxjs/operators/tap';
import {ReplaySubject, Observable} from "rxjs";
import {SERVER_URL} from "../../config";
import {Storage} from "@ionic/storage";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";


@Injectable()
export class AuthProvider {
  private jwtTokenName = 'token';
  private email = '';
  private firstName = '';
  private lastName = '';
  private password = '';
  private matchingPassword = '';
  authUser = new ReplaySubject<any>(1);

  constructor(private readonly httpClient: HttpClient,
              private readonly storage: Storage,
              private readonly jwtHelper: JwtHelperService) {
  }

  checkLogin() {
    this.storage.get(this.jwtTokenName).then(jwt => {
      if (jwt && !this.jwtHelper.isTokenExpired(jwt)) {
        this.authUser.next(jwt);
      }
      else {
        this.storage.remove(this.jwtTokenName).then(() => this.authUser.next(null));
      }
    });
  }

  login(values: any): Observable<any> {
    this.email = values.email;
    this.password = values.password;
    const body = JSON.stringify({
      email: values.email,
      password: values.password
    });
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post(`${SERVER_URL}login`, body, {headers: headers})
      .pipe(tap(jwt => this.handleJwtResponse(jwt.token)));
  }

  logout() {
    this.storage.remove(this.jwtTokenName).then(() => this.authUser.next(null));
  }

  register(values: any): Observable<any> {
    this.email = values.email;
    this.password = values.password;
    this.firstName = values.firstname;
    this.lastName = values.lastname;
    this.matchingPassword = values.mpassword;
    const body = JSON.stringify({
      email: this.email,
      password: this.password,
      matchingPassword: this.matchingPassword,
      firstName: this.firstName,
      lastName: this.lastName
    });
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post(`${SERVER_URL}/users/register`, body, {headers: headers})
      .pipe(tap(jwt => {
        if (jwt.error.text !== 'Succes') {
          return this.handleJwtResponse(jwt);
        }
        return jwt;
      }));
  }

  handleJwtResponse(jwt: string) {
    return this.storage.set(this.jwtTokenName, jwt)
      .then(() => this.authUser.next(jwt))
      .then(() => jwt);
  }
}
