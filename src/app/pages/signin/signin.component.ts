import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  public username: string = '';
  public password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  public async login() {
    try {
      await this.authService.login({ username: this.username, password: this.password });
      // redirect to home page
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      if (error.status === 401) { // no autorizado
        // indica por modal que no es un usuario valido
        console.log('usuario no es valido!')
      } else {
        console.log(error);
      }
    }
  }

}
