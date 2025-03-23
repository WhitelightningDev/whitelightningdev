import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hire-me',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './hire-me.component.html',
  styleUrls: ['./hire-me.component.css']
})
export class HireMeComponent {
  basicInfoForm: FormGroup;
  projectTypeForm: FormGroup;
  designForm: FormGroup;
  budgetForm: FormGroup;
  additionalServicesForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    // Step 1: Basic Information
    this.basicInfoForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      hasWebsite: [''],
      websiteURL: [''],
      projectIdea: ['', Validators.required]
    });

    // Step 2: Project Type & Goals
    this.projectTypeForm = this.fb.group({
      projectType: [[]], // Multi-Select
      primaryGoal: [[]], // Multi-Select
      features: [[]] // Multi-Select
    });

    // Step 3: Design & Branding
    this.designForm = this.fb.group({
      hasBrandIdentity: [''],
      brandAssets: [null],
      designStyle: [''],
      exampleWebsites: [''],
      preferredColorsFonts: ['']
    });

    // Step 4: Budget & Timeline
    this.budgetForm = this.fb.group({
      budget: ['', Validators.required],
      timeline: ['', Validators.required]
    });

    // Step 5: Additional Services
    this.additionalServicesForm = this.fb.group({
      ongoingSupport: [''],
      hostingDomain: [''],
      seoMarketing: [''],
      cmsRequirement: ['']
    });
  }

  submitForm() {
    const formData = {
      ...this.basicInfoForm.value,
      ...this.projectTypeForm.value,
      ...this.designForm.value,
      ...this.budgetForm.value,
      ...this.additionalServicesForm.value
    };

    console.log("Form Submitted: ", formData);

    // Simulate an API submission (replace with your actual API endpoint)
    this.http.post('YOUR_API_ENDPOINT_HERE', formData).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);

        // If submission is successful, navigate to the success page
        this.router.navigate(['/submitSuccess']);
      },
      (error) => {
        console.error('Form submission error:', error);

        // If an error occurs, navigate to the error page
        this.router.navigate(['/oopsSubmittionError']);
      }
    );
  }
}
