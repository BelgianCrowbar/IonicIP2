import {AuthProvider} from "./auth";
import Spy = jasmine.Spy;
import {Theme} from "../../model/theme";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HttpModule} from "@angular/http";
import {SERVER_URL} from "../../config";
import {IonicModule, LoadingController, NavController, ToastController} from "ionic-angular";
import {LoginPage} from "../../pages/login/login";
import {async} from "q";


class User {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

describe('AuthProvider', () => {
  let user = new User('indy.dewacker@student.kdg.be', 'admin');
  let fixture: ComponentFixture<LoginPage>;
  let comp: LoginPage;
  let auth: AuthProvider;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          IonicModule.forRoot(LoginPage)
        ],
        providers: [
          NavController,
          LoadingController,
          ToastController,
          AuthProvider
        ]
      });
    }
  ));

  beforeEach(() => {

    fixture = TestBed.createComponent(LoginPage);
    comp = fixture.componentInstance;

  });

  it('should create component', () => expect(comp).toBeDefined());

  it('Test get methode', () => {
    auth = TestBed.get(AuthProvider);
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

    //const body = JSON.stringify({email: "tim.vanaelst@student.kdg.be", password: "admin"});

    let test = auth.login(user);
    console.log(test)

    /*httpClientSpy.get("themes/getAll", null, true).subscribe(
      data => expect(data).toEqual(expectedThemes), fail
    );*/

  });
});
