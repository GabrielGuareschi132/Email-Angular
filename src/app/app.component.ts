import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      to_name: '',
      from_name: '',
      from_email: '',
      message: '',
    });
  }

  async send() {
    emailjs.init('ipEEfm5fDU1GgnoVa');
    let response = await emailjs.send('service_ngo4usw', 'template_ce2lfm3', {
      to_name: this.form.value.to_name,
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      message: this.form.value.message,
    });

    alert('Mensagem Enviada com Sucesso');
    this.form.reset();
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }
}
