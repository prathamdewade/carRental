import { CanActivateFn } from '@angular/router';

export const loginAuthGuard: CanActivateFn = (route, state) => {
  
  let isLog= localStorage.getItem("ISLOG");
  if(isLog){
    console.log("Hiii if"+isLog);
    
    return true;
  }else{
    console.log("Hiii else"+isLog);
    return false;
  }
 
};

