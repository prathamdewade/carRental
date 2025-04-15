import { CanActivateFn } from '@angular/router';

export const venderGuardGuard: CanActivateFn = (route, state) => {
  const loggedVender=sessionStorage.getItem('loggedVender');
  if(loggedVender!=null)
  {
    return true;
  }else{
    return false;
  }
 
};
