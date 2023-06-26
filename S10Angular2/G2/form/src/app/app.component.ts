import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; // pr gestire oggetto form
import { UrlSerializer } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms';

  @ViewChild('containerForm', { static: true }) containerForm!: NgForm;

  userForm = {
    defUserName: '',
    email: '',
    question: ''
  }

  generi = [
    {
      label: 'uomo',
      value: 'uomo'
    },

    {
      label: 'donna',
      value: 'donna'
    }
  ]

  risposta = ''

  user: any = {
    username: '',
    email: '',
    secret: '',
    risposta: '',
    sesso: ''
  }

  ngOnInit(): void {
    this.containerForm.statusChanges?.subscribe(stato => {
      console.log(`Stato del form: ${stato}`);
      console.log(this.containerForm);

    })
  }

  generateUserName() {
    this.containerForm.form.patchValue({
      userInfo: {
        email: 'pipp@gmail.com',
        username: 'pluto'
      }
    })
  }

  submitForm() {
    console.log(`form inviato ${this.containerForm}`);
    this.user.username = this.containerForm.value.userInfo.username
    this.user.email = this.containerForm.value.userInfo.email
    this.user.secret = this.containerForm.value.userInfo.secret
    this.user.sesso = this.containerForm.value.userInfo.sesso
    this.user.rispostal = this.containerForm.value.risposta

    this.containerForm.reset()
  }
}
