import {CookieService} from 'ngx-cookie-service';
import {Injectable} from "@angular/core";

@Injectable()
export class AuthCookie{
  readonly jwtIdentifier = 'id_token';

  constructor(private cookie: CookieService) {
  }

  getAuth(): string{
    return this.cookie.get(this.jwtIdentifier);
  }

  setAuth(value: string): void{
    //Expire time is in days
    this.cookie.set(this.jwtIdentifier, value, 0.0138889);
  }

  deleteAuth(){
    this.cookie.delete(this.jwtIdentifier);
  }
}
