import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SERVER_URL} from "../../config";
import {Observable} from "rxjs/Observable";
import {ToastController} from "ionic-angular";
import {AuthProvider} from "../auth/auth";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Storage} from '@ionic/storage';
import {Options} from "selenium-webdriver/safari";


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  baseUrl: string = SERVER_URL;

  constructor(public http: HttpClient,
              private  toastCtrl: ToastController,
              private auth: AuthProvider,
              private jwtHelper: JwtHelperService,
              private storage: Storage) {

  }

  get(api: string, contentType: string = null, token: string = null): Observable<any> {
    const endpoint = this.baseUrl + api;
    if (token == null) {
      this.auth.authUser.subscribe(jwt => {
        token = jwt
      });
    }
    let httpOptions = this.createHeader(contentType, token);
    return this.http.get(endpoint, httpOptions).map((data: Response) => data);
  }

  post(api: string, body: any = null, contentType: string = null, token: string = null): Observable<any> {
    const endpoint = this.baseUrl + api;
    if (token == null) {
      this.auth.authUser.subscribe(jwt => {
        token = jwt
      });
    }
    let httpOptions = this.createHeader(contentType, token);
    return this.http.post(endpoint, body, httpOptions)
      .map((data: Response) => {
        if (data.status === 200 || data.status == undefined) {
          return data;
        }
      }).catch((error: any) => {
        const toast = this.toastCtrl.create({
          message: error,
          duration: 5000,
          position: 'bottom'
        });
        return Observable.throw(toast.present());
      });
  }

  put(api: string, body: any = null, contentType: string = null): Observable<any> {
    const endpoint = this.baseUrl + api;
    let httpOptions = this.createHeader(contentType);
    return this.http.put(endpoint, body, httpOptions).map((data: Response) => data);
  }

  delete(api: string, contentType: string = null): Observable<any> {
    const endpoint = this.baseUrl + api;
    let httpOptions = this.createHeader(contentType);
    return this.http.delete(endpoint, httpOptions).map((data: Response) => data);
  }

  createHeader(contentType: string, token: string = null): { headers: HttpHeaders } {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': contentType == null ? 'application/json' : contentType,
      }).append('Authorization', 'Bearer ' + token)
    };
    return httpOptions;
  }

}
