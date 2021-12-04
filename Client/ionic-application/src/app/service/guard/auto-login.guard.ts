import {AuthService} from '../auth.service';
import {Observable} from 'rxjs';
import {filter, map, take} from 'rxjs/operators';
import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';


@Injectable()
export class AutoLoginGuard implements CanActivate{
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(): Observable<boolean>{
    return this.authService.isAuthenticated.pipe(
      filter(val => val !== null),
      take(1),
      map(isAuthenticated => {
        console.log('before canActivate(): ', isAuthenticated);

        if(!isAuthenticated){
          console.log('after canActivate()');
          return true;
        }else{
          this.router.navigateByUrl('/home', {replaceUrl: true});
          console.log('after canActivate()');
          return true;
        }
      })
    );
  }
}
