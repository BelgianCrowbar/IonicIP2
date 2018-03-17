import {async, getTestBed, TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RestProvider} from "./rest";
import {Theme} from "../../model/theme";
import {ToastController} from "ionic-angular";
import {AppModule} from "../../app/app.module";
import {User} from "../../model/user";

describe('RestProvider', () => {
  let testBed: TestBed;
  let myProvider: RestProvider;
  let httpMock: HttpTestingController;
  let token: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AppModule,
      ],
      providers: [
        RestProvider,
        ToastController,
      ]
    });
    testBed = getTestBed();
    myProvider = testBed.get(RestProvider);
    httpMock = testBed.get(HttpTestingController);

    const body = JSON.stringify({email: "tim.vanaelst@student.kdg.be", password: "admin"});
    myProvider.post('login', body).subscribe(
      data => {
        token = data.token;
      });

  });

  it('Test the get current user function', () => {
    const testUser: User = new User("tim.vanaelst@student.kdg.be", 'Tim12', "Van Aelst", "");

    myProvider.get("users/currentuser", null, token).subscribe(
      data => {
        expect(data.email).toEqual(testUser.email);
        expect(data.lastName).toEqual(testUser.lastName);
      });
    httpMock.verify();
  });

  it('Test the get function', () => {
    const expectedThemes: Array<Theme> =
      [{
        id: "5a8d521a1525a03170a20be9",
        name: "PermanentTheme",
        description: "This is a permanent testTheme DO NOT DELETE",
        tags: []
      },
        {
          id: "5a8d51c51525a03170a20be8",
          name: "PermanentTheme2",
          description: "This is a permanent testTheme DO NOT DELETE",
          tags: []
        }];

    myProvider.get("themes/getAll", null, token).subscribe(
      data => expect(data).toEqual(expectedThemes)
    );
    httpMock.verify();
  });

  it('Test the post function', () => {
    const testTheme: Theme = new Theme(null, 'karmaTestTheme', 'Testing the post function on HttpService, Kandoe-Webclient', []);
    myProvider.post('themes/create', testTheme, 'application/json', token).subscribe(
      data => expect(data).toEqual(testTheme));
    httpMock.verify();
  });


});
