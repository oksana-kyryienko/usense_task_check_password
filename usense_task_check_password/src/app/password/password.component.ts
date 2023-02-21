import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  password!: string;
  heft: number = 0;

  regExpString = /[a-zA-Z]/g;
  regExpNumbers = /[0-9]/g;
  regExpCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;

  inputHandler(value: string) {
    this.heft = 0;

    if (!value || value.length < 8) {
      return;
    }

    if (value.match(this.regExpString)) {
      this.heft += 1;
    }

    if (value.match(this.regExpNumbers)) {
      this.heft += 1;
    }

    if (value.match(this.regExpCharacters)) {
      this.heft += 1;
    }
  }

}
