import { Component } from '@angular/core';

@Component({
  selector: 'app-free-routine-form',
  standalone: false,
  templateUrl: './free-routine-form.component.html',
  styleUrl: './free-routine-form.component.css'
})
export class FreeRoutineFormComponent {
  onSubmit(event: Event) {
    event.preventDefault(); // Prevent actual form submission
    console.log('Form submitted!');
    // In a real scenario, you would handle form data and file download here.
    alert('Thank you! (Download functionality not yet implemented)');
  }
}
