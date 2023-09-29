import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/IUser.interface';
import { ApiClientService } from './api-client.service';

@Injectable()
export class AuthService {

  public user: Omit<IUser, 'modules'> | undefined;
  // when user is not authenticated, store the url they were heading to in redirectUrl, after they login
  private redirectUrl: string = '';

  constructor(
    private router: Router,
    private apiClientService: ApiClientService
  ) { }

  /**
   * Make a POST request to the server to sign up the user
   * @param credentials 
   * @returns 
   */
  public async signUp(credentials: {username: string, password: string}): Promise<any> {
    return this.apiClientService.http.post('/auth/signup', credentials);
  }

  /**
   * Make a POST request to the server to log in the user
   * @param credentials 
   * @returns 
   */
  public async login(credentials: {username: string, password: string}): Promise<IUser> {
    let res = await this.apiClientService.http.post('/auth/login', credentials);
    console.log('user object (with luggage)', res.data);
    let { modules, ...user } = res.data;
    this.initUser(user);
    return res.data; // return entire user object
  }

  /**
   * Make a PUT request to the server to log out the user (should delete cookies that contain authentication)
   * @returns 
   */
  public async logout(): Promise<void> {
    await this.apiClientService.http.put('/auth/logout');
  }

  /**
   * Request user data (client sends session id in cookies and '/auth/user-session' checks for user with the same session id)
   * @returns user data
   */
   public async getUserSession(): Promise<IUser> {
    let res = await this.apiClientService.http.get('/auth/user-session');
    console.log('user object retrieved from session', res.data);
    let { user, ...modules } = res.data; 
    this.initUser(user); // set user in Auth
    return res.data; // return entire user object
  }

  /**
   * Sends a request to check if session is still active for this user (may slow down performance but is 
   * a neccesary meassure if user session expires and the user is still using the website. An alternative
   * would be to read the session id from the cookies but with httpOnly set to true in the backend, 
   * doing as such is not possible, therefore a request to the API is needed to verify if user still has permissions).
   * @returns boolean which determines if the user session is still active
   */
  public async isUserSessionActive(): Promise<boolean> {
    try {
      await this.apiClientService.http.get('/auth/session/check-session');
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * After user logs in, this function redirects them to the home dashboard if redirectUrl is empty
   * or the place they we're trying to get to before they logged in (which is stored in redirectUrl)
   */
  public redirect(): void {
    if (this.redirectUrl) {
      let destinyUrl = this.redirectUrl;
      this.redirectUrl = '';
      this.router.navigateByUrl(destinyUrl);
    } else {
      this.router.navigateByUrl('/dashboard');
    }
  }

  /**
   * Set user initial data
   * @param userData data for user sent from the backend
   */
   private initUser(userData: Omit<IUser, 'modules'>): void {
    this.user = userData;
  }
}
