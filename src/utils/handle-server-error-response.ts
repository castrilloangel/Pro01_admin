import { isDevMode } from "@angular/core";
import { Router } from "@angular/router";

/**
 * Checks the status code and redirects the user accordingly.
 * @param errorStatus http status code
 * @param router used for redirecting
 * @returns 
 */
export function handleServerErrorResponse(errorStatus: number, router: Router): void {
  /**
   * status === 0 is basically that the backend doesn't even exist, no response. It's something expected if the server is still not running anywhere,
   * either locally or on the web.
   */
  if (errorStatus === 0 && isDevMode()) return;

  switch (errorStatus) {
    case 401:
      // if user session is no longer active, redirect them to login
      router.navigate(['/login']);
      break;
    case 0:
    case 403:
    case 500:
    case 503:
      // if error is something fatal, show error page
      const status_code = errorStatus === 0 ? 503 : errorStatus; // status_code 0 is a special case (service isn't even running)
      router.navigate(['/error'], { queryParams : { status_code }});
      break;
    default:
      router.navigate(['/error']); // unknown error
  }
};