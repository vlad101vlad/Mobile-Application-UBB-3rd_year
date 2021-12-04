import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthCookie} from "../../shared/model/auth_cookie";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private cookieManager: AuthCookie) {

  }


  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = this.cookieManager.getAuth();
    debugger;
    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          "Bearer " + idToken)
      });
      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}
