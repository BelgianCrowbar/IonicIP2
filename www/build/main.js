webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_picture__ = __webpack_require__(733);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, loadingCtrl, toastCtrl, restService, auth, httpClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.restService = restService;
        this.auth = auth;
        this.httpClient = httpClient;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__model_user__["a" /* User */]('', '', '');
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.picture = new __WEBPACK_IMPORTED_MODULE_7__model_picture__["a" /* Picture */]('', '', '');
        this.startloading('Inladen...');
        this.restService.get('users/currentuser', null)
            .subscribe(function (u) {
            _this.user = u;
            _this.restService.get('users/getProfilePicture', null).subscribe(function (data) {
                _this.picture = data;
                _this.imgsrc = 'data:image/png;base64,' + _this.picture.value;
                _this.stoploading();
            }, function (error) {
                _this.handleError(error);
                _this.stoploading();
            });
        }, function (error2) {
            _this.stoploading();
            _this.handleError(error2);
        });
    };
    ProfilePage.prototype.changeProfile = function (value) {
        var _this = this;
        this.startloading('Veranderen...');
        this.user.firstName = value.firstName;
        this.restService.post('users/update', this.user)
            .subscribe(function (data) {
            _this.user.firstName = value.firstName;
            if (_this.picture != null) {
                _this.restService.post('users/uploadProfilePicture', _this.picture).subscribe(function (data) {
                    _this.stoploading();
                    _this.handleSucces();
                });
            }
        }, function (error2) {
            _this.stoploading();
            _this.handleError(error2);
        });
    };
    ProfilePage.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        var file = event.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = function () {
            _this.picture.filename = file.name;
            _this.picture.filetype = file.type;
            _this.picture.value = reader.result.split(',')[1];
            _this.imgsrc = 'data:image/png;base64,' + _this.picture.value;
        };
    };
    ProfilePage.prototype.startloading = function (message) {
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: message
        });
        this.loading.present();
    };
    ProfilePage.prototype.stoploading = function () {
        this.loading.dismiss();
    };
    ProfilePage.prototype.handleError = function (error) {
        console.log('Error: ' + error);
        var toast = this.toastCtrl.create({
            message: 'Er is iets fout gelopen! ',
            duration: 5000,
            position: 'bottom'
        }).present();
    };
    ProfilePage.prototype.handleSucces = function () {
        var toast = this.toastCtrl.create({
            message: 'Alles is goed opgeslaan',
            duration: 5000,
            position: 'bottom'
        }).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('username'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgModel"])
    ], ProfilePage.prototype, "usernameModel", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button icon-only menuToggle side="left">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Profiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h1>Profiel Bewerken</h1>\n\n  <form #form="ngForm" (ngSubmit)="changeProfile(form.value)" novalidate>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Naam bewerken</ion-label>\n\n        <ion-input type="text" name="firstName" ngModel required #firstName="ngModel" value="{{user.firstName}}"\n\n                   [class.invalid]="firstName.errors && firstName.dirty"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="firstName.errors?.required && firstName.dirty">\n\n        Voornaam is vereist\n\n      </ion-item>\n\n      <div class="content">\n\n        <img class="img-avatar" src="{{imgsrc}}" height="40" width="40" alt="img-avatar">\n\n        <ion-item id="imgSelect" >\n\n          <ion-input type="file" name="file" id="file" class="form-control" (change)="onFileChange($event)"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div padding>\n\n        <button ion-button color="primary" block type="submit" [disabled]="!form.valid">Verander</button>\n\n      </div>\n\n    </ion-list>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth0_angular_jwt__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http, toastCtrl, auth, jwtHelper, storage) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.jwtHelper = jwtHelper;
        this.storage = storage;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* SERVER_URL */];
    }
    RestProvider.prototype.get = function (api, contentType, token) {
        if (contentType === void 0) { contentType = null; }
        if (token === void 0) { token = null; }
        var endpoint = this.baseUrl + api;
        if (token == null) {
            this.auth.authUser.subscribe(function (jwt) {
                token = jwt;
            });
        }
        var httpOptions = this.createHeader(contentType, token);
        return this.http.get(endpoint, httpOptions).map(function (data) { return data; });
    };
    RestProvider.prototype.post = function (api, body, contentType, token) {
        var _this = this;
        if (body === void 0) { body = null; }
        if (contentType === void 0) { contentType = null; }
        if (token === void 0) { token = null; }
        var endpoint = this.baseUrl + api;
        if (token == null) {
            this.auth.authUser.subscribe(function (jwt) {
                token = jwt;
            });
        }
        var httpOptions = this.createHeader(contentType, token);
        return this.http.post(endpoint, body, httpOptions)
            .map(function (data) {
            if (data.status === 200) {
                return data.json();
            }
        }).catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: error,
                duration: 5000,
                position: 'bottom'
            });
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(toast.present());
        });
    };
    RestProvider.prototype.put = function (api, body, contentType) {
        if (body === void 0) { body = null; }
        if (contentType === void 0) { contentType = null; }
        var endpoint = this.baseUrl + api;
        var httpOptions = this.createHeader(contentType);
        return this.http.put(endpoint, body, httpOptions).map(function (data) { return data.json(); });
    };
    RestProvider.prototype.delete = function (api, contentType) {
        if (contentType === void 0) { contentType = null; }
        var endpoint = this.baseUrl + api;
        var httpOptions = this.createHeader(contentType);
        return this.http.delete(endpoint, httpOptions).map(function (data) { return data.json(); });
    };
    RestProvider.prototype.createHeader = function (contentType, token) {
        if (token === void 0) { token = null; }
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({
                'Content-type': contentType == null ? 'application/json' : contentType,
            }).append('Authorization', 'Bearer ' + token)
        };
        return httpOptions;
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6__auth0_angular_jwt__["b" /* JwtHelperService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__session_overview_session_overview__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(authProvider, jwtHelper, httpClient, navCtrl, navParams) {
        var _this = this;
        this.authProvider = authProvider;
        this.httpClient = httpClient;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider.authUser.subscribe(function (jwt) {
            if (jwt) {
                var decoded = jwtHelper.decodeToken(jwt);
                _this.user = decoded.sub;
            }
            else {
                _this.user = null;
            }
        });
    }
    HomePage.prototype.profilePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage.prototype.overviewPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__session_overview_session_overview__["a" /* SessionOverviewPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle side="left">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="action-sheets-basic-page">\n  Welcome <strong>{{user}}</strong>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 (click)="overviewPage()">Overzicht Sessies</ion-col>\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 (click)="profilePage()">Profiel</ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__["b" /* JwtHelperService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, loadingCtrl, authProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
    }
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function (value) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Logging in ...'
        });
        loading.present();
        this.authProvider
            .login(value)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["finalize"])(function () { return loading.dismiss(); }))
            .subscribe(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }, function (err) { return _this.handleError(err); });
    };
    LoginPage.prototype.handleError = function (error) {
        var message;
        if (error.status && error.status === 401) {
            message = 'Login failed';
        }
        else {
            message = "Unexpected error: " + error.statusText;
        }
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm" (ngSubmit)="login(form.value)" novalidate>\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input id="mail" type="text" name="email" ngModel required #email="ngModel"\n                   [class.invalid]="email.errors && email.dirty"></ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="email.errors?.required && email.dirty">\n        Email is required\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input id="password" type="password" name="password" ngModel required #password="ngModel"\n                   [class.invalid]="password.errors && password.dirty"></ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="password.errors?.required && password.dirty">\n        Password is required\n      </ion-item>\n\n      <div padding>\n        <button id="btnLogin" ion-button color="primary" block type="submit" [disabled]="!form.valid">Login</button>\n      </div>\n\n      <div padding>\n        <button id="btnSignUp" ion-button color="secondary" block type="button" (click)="register()">Sign up</button>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GamePage = /** @class */ (function () {
    function GamePage(navCtrl, navParams, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    GamePage.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Cinema',
            buttons: [
                {
                    text: 'Film 1',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    GamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GamePage');
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-game',template:/*ion-inline-start:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\game\game.html"*/'<!--\n\n  Generated template for the GamePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button icon-only menuToggle side="left">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-title>Game</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <button (click)="presentActionSheet()" class="knop">c\n\n\n\n  </button>\n\n\n\n\n\n  <div id="content">\n\n    <div id="outer-circle">\n\n\n\n\n\n      <div id="inner-circle">\n\n        <span id="inside-content"></span>\n\n        <div id="inner-circle2">\n\n          <span id="inside-content2"></span>\n\n          <div id="inner-circle3">\n\n            <span id="inside-content3"></span>\n\n            <div id="inner-circle4">\n\n              <span id="inside-content4"></span>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding>\n\n      <ion-item>\n\n        Item1\n\n\n\n      </ion-item>\n\n      <ion-item-options side="left">\n\n        <button ion-button (click)="showInfo(item)">show Info</button>\n\n        <button ion-button color="danger" (click)="share(item)">Share</button>\n\n      </ion-item-options>\n\n\n\n      <ion-item-options side="right">\n\n        <button ion-button (click)="choose(item)">Choose</button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n\n\n    <ion-item-sliding>\n\n      <ion-item>\n\n        Item2\n\n\n\n      </ion-item>\n\n      <ion-item-options side="left">\n\n        <button ion-button (click)="showInfo(item)">show Info</button>\n\n        <button ion-button color="danger" (click)="share(item)">Share</button>\n\n      </ion-item-options>\n\n\n\n      <ion-item-options side="right">\n\n        <button ion-button (click)="choose(item)">Choose</button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\game\game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionOverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SessionOverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SessionOverviewPage = /** @class */ (function () {
    function SessionOverviewPage(restService) {
        this.restService = restService;
        this.activeSessions = [];
        this.plannedSessions = [];
        this.stoppedSessions = [];
    }
    SessionOverviewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SessionOverviewPage');
        this.restService.get('sessions/getAllSessionsByUser').subscribe(function (ses) {
            console.log(ses);
            for (var _i = 0, ses_1 = ses; _i < ses_1.length; _i++) {
                var obj = ses_1[_i];
                console.log(obj);
                if (obj.startTime > new Date()) {
                    _this.plannedSessions.push(obj);
                }
                else if (obj.startTime < new Date()) {
                    _this.activeSessions.push(obj);
                }
            }
        }, function (error2) { return console.log(error2); });
    };
    SessionOverviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-session-overview',template:/*ion-inline-start:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\session-overview\session-overview.html"*/'<!--\n  Generated template for the SessionOverviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle side="left">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>sessie overzicht</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div>Gepland</div>\n  <ion-list>\n    <ion-item *ngFor="let session of activeSessions">{{session.sessionName}}</ion-item>\n  </ion-list>\n  <div>Actief</div>\n  <ion-list>\n    <ion-item *ngFor="let session of plannedSessions">{{session.sessionName}}</ion-item>\n  </ion-list>\n  <div>Gestopt</div>\n  <ion-list>\n    <ion-item *ngFor="let session of stoppedSessions">{{session.sessionName}}</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\session-overview\session-overview.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */]) === "function" && _a || Object])
    ], SessionOverviewPage);
    return SessionOverviewPage;
    var _a;
}());

//# sourceMappingURL=session-overview.js.map

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 198;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/game/game.module": [
		845,
		2
	],
	"../pages/profile/profile.module": [
		846,
		1
	],
	"../pages/session-overview/session-overview.module": [
		847,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 242;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_URL; });
//export const SERVER_URL = "https://springip2.herokuapp.com/";
var SERVER_URL = "http://localhost:8080/";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_finalize__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_finalize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_finalize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(authProvider, loadingCtrl, toastCtrl, navCtrl) {
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
    }
    RegisterPage.prototype.register = function (value) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Signing up ...'
        });
        loading.present();
        this.authProvider
            .register(value)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_finalize__["finalize"])(function () { return loading.dismiss(); }))
            .subscribe(function (data) { }, function (jwt) { return _this.showSuccesToast(jwt); });
    };
    RegisterPage.prototype.showSuccesToast = function (jwt) {
        if (jwt.error.text === "Succes") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            var toast = this.toastCtrl.create({
                message: 'Sign up successful please check mail',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (jwt.error.text === "Failure type 1") {
            var toast = this.toastCtrl.create({
                message: 'Email already registered',
                duration: 3000,
                position: 'bottom'
            }).present();
            this.usernameModel.control.setErrors({ 'usernameTaken': true });
        }
        else {
            this.handleError(jwt);
        }
    };
    RegisterPage.prototype.handleError = function (error) {
        var message = 'Unexpected error occurred';
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'bottom'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('username'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NgModel"])
    ], RegisterPage.prototype, "usernameModel", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>register</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form #form="ngForm" (ngSubmit)="register(form.value)" novalidate>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Firstname</ion-label>\n\n        <ion-input type="text" name="firstname" ngModel required #firstname="ngModel"\n\n                   [class.invalid]="firstname.errors && firstname.dirty"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="firstname.errors?.required && firstname.dirty">\n\n        FirstName is required\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Lastname</ion-label>\n\n        <ion-input type="text" name="lastname" ngModel required #lastname="ngModel"\n\n                   [class.invalid]="lastname.errors && lastname.dirty"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="lastname.errors?.required && lastname.dirty">\n\n        LastName is required\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="email" name="email" ngModel required email #email="ngModel"\n\n                   [class.invalid]="email.errors && email.dirty"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="email.errors?.required && email.dirty">\n\n        Email is required\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="email.errors?.email && email.dirty">\n\n        Email is not valid\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" name="password" ngModel required #password="ngModel"\n\n                   [class.invalid]="password.errors && password.dirty"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="password.errors?.required && password.dirty">\n\n        Password is required\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Matching password</ion-label>\n\n        <ion-input type="password" name="mpassword" ngModel required #mpassword="ngModel"\n\n                   [class.invalid]="mpassword.errors && mpassword.dirty"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="mpassword.errors?.required && mpassword.dirty">\n\n        Matching password is required\n\n      </ion-item>\n\n\n\n      <div padding>\n\n        <button ion-button color="primary" block type="submit" [disabled]="!form.valid">Sign up</button>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(430);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth0_angular_jwt__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthProvider = /** @class */ (function () {
    function AuthProvider(httpClient, storage, jwtHelper) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.jwtHelper = jwtHelper;
        this.jwtTokenName = 'token';
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.password = '';
        this.matchingPassword = '';
        this.authUser = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"](1);
    }
    AuthProvider.prototype.checkLogin = function () {
        var _this = this;
        this.storage.get(this.jwtTokenName).then(function (jwt) {
            if (jwt && !_this.jwtHelper.isTokenExpired(jwt)) {
                _this.authUser.next(jwt);
            }
            else {
                _this.storage.remove(_this.jwtTokenName).then(function () { return _this.authUser.next(null); });
            }
        });
    };
    AuthProvider.prototype.login = function (values) {
        var _this = this;
        this.email = values.email;
        this.password = values.password;
        var body = JSON.stringify({
            email: values.email,
            password: values.password
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        //headers.append( 'Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbmR5LmRld2Fja2VyQHN0dWRlbnQua2RnLmJlIiwiZXhwIjoxNTIwMjU1NDQ5fQ.vQ5LG41grArPwWFJu1J4Lg_KE6Xx2tenrN48O77b06pmDJmtHWBnAaN_ovVOJVzEnx4g5u8n_1gxI3xc_3AOag');
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* SERVER_URL */] + "login", body, { headers: headers })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap__["tap"])(function (jwt) { return _this.handleJwtResponse(jwt.token); }));
    };
    AuthProvider.prototype.logout = function () {
        var _this = this;
        this.storage.remove(this.jwtTokenName).then(function () { return _this.authUser.next(null); });
    };
    AuthProvider.prototype.register = function (values) {
        var _this = this;
        this.email = values.email;
        this.password = values.password;
        this.firstName = values.firstname;
        this.lastName = values.lastname;
        this.matchingPassword = values.mpassword;
        var body = JSON.stringify({
            email: this.email,
            password: this.password,
            matchingPassword: this.matchingPassword,
            firstName: this.firstName,
            lastName: this.lastName
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* SERVER_URL */] + "/users/register", body, { headers: headers })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap__["tap"])(function (jwt) {
            if (jwt.error.text !== 'Succes') {
                return _this.handleJwtResponse(jwt);
            }
            return jwt;
        }));
    };
    AuthProvider.prototype.handleJwtResponse = function (jwt) {
        var _this = this;
        return this.storage.set(this.jwtTokenName, jwt)
            .then(function () { return _this.authUser.next(jwt); })
            .then(function () { return jwt; });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__auth0_angular_jwt__["b" /* JwtHelperService */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export jwtOptionsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_validation__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth0_angular_jwt__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_game_game__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_rest_rest__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_session_overview_session_overview__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















function jwtOptionsFactory(storage) {
    return {
        tokenGetter: function () { return storage.get('token'); },
        // whitelistedDomains: ['https://springip2.herokuapp.com/']
        whitelistedDomains: ['http://localhost:8080/']
    };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_session_overview_session_overview__["a" /* SessionOverviewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__auth0_angular_jwt__["c" /* JwtModule */].forRoot({
                    jwtOptionsProvider: {
                        provide: __WEBPACK_IMPORTED_MODULE_13__auth0_angular_jwt__["a" /* JWT_OPTIONS */],
                        useFactory: jwtOptionsFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/game/game.module#GamePageModule', name: 'GamePage', segment: 'game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/session-overview/session-overview.module#SessionOverviewPageModule', name: 'SessionOverviewPage', segment: 'session-overview', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ng2_validation__["CustomFormsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_session_overview_session_overview__["a" /* SessionOverviewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_rest_rest__["a" /* RestProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(email, firstName, lastName) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Picture; });
var Picture = /** @class */ (function () {
    function Picture(filename, filetype, value) {
        this.filename = filename;
        this.filetype = filetype;
        this.value = value;
    }
    return Picture;
}());

//# sourceMappingURL=picture.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_game_game__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_session_overview_session_overview__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, authProvider) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authProvider = authProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.pages = [
            { title: 'Start', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Spel', component: __WEBPACK_IMPORTED_MODULE_7__pages_game_game__["a" /* GamePage */] },
            { title: 'Profiel', component: __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */] }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        authProvider.authUser.subscribe(function (jwt) {
            if (jwt) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
        });
        authProvider.checkLogin();
    }
    MyApp.prototype.logout = function () {
        this.authProvider.logout();
    };
    MyApp.prototype.homePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.gamePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_game_game__["a" /* GamePage */]);
    };
    MyApp.prototype.profilePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */]);
    };
    MyApp.prototype.sessionsPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_session_overview_session_overview__["a" /* SessionOverviewPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header >\n    <ion-toolbar>\n      <button ion-button icon-only menuToggle side="left">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title side="right">Menu</ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item menuClose (click)="homePage()">\n        Home\n      </button>\n      <button ion-item menuClose (click)="sessionsPage()">\n        Sessions\n      </button>\n      <button ion-item menuClose (click)="profilePage()">\n        Profile\n      </button>\n    </ion-list>\n  </ion-content>\n  <ion-footer class="bar-light">\n    <div class="button-bar">\n      <button class="button button-icon icon " side="left" menuClose (click)="logout()">\n        <ion-icon name="exit"></ion-icon>\n        Logout\n      </button>\n      <button class="button button-icon icon ion-log-out" side="right" (click)="exitApp()">\n\n        <ion-icon name="close"></ion-icon>\n        Exit\n      </button>\n    </div>\n  </ion-footer>\n</ion-menu>\n<ion-nav  [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"D:\KdG\3de jaar\IntegratieProject\Officieel\IonicIP2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[425]);
//# sourceMappingURL=main.js.map