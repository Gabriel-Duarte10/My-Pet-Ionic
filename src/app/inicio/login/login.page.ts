import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthService, private nav: NavController) { }

  ngOnInit() {
  }

  rota(rota: string): void
  {
    this.nav.navigateRoot(['/inicio/' + rota]);
  }

}
