import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginAuthGuard: CanActivateFn = (route, state) => {
  
  const router=inject(Router);

  let loggedInUser= sessionStorage.getItem("loggedInUser");
  if(loggedInUser!=null){
    console.log("Hiii if");
    
    return true;
  }else{
    console.log("hiii");
     console.log(loggedInUser);
     
     router.navigate(["login"])
    return false;
  }
 
};

