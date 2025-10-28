import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  onSubmit(): void {
    this.submitted = true;
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    const formspreeEndpoint = 'https://formspree.io/f/mgvpolkk';
    
    this.http.post(formspreeEndpoint, this.contactForm.value, { 
      headers: { 'Accept': 'application/json' }
    })
      .subscribe({
        next: (response) => {
          console.log('Email sent successfully!', response);
          alert('Your message has been sent!');
          this.contactForm.reset();
          this.submitted = false;
        },
        error: (error) => {
          console.error('Error sending email', error);
          alert('There was an error sending your message. Please try again.');
        }
      });
  }
}