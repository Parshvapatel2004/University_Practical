import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminpra20Guard: CanActivateFn = (route, state) => {
  const isUserLoggedIn = false;
  const router = inject(Router);

  if (isUserLoggedIn) {
    alert('Welcome user');
    return true;
  } else {
    alert('Please login to access this page.');
    router.navigateByUrl('/pra1');
    return false;
  }
};
