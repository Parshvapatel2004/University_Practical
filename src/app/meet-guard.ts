import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const meetGuard: CanActivateFn = (route, state) => {
  const isuserloggedin = false;
  const router = inject(Router);

  if(isuserloggedin){
    alert("welcome meet vastral daru vado");
    return true;
  }else{
    alert("Please login before access this route");
    router.navigateByUrl('/pra2');
    return false;
  }
};
