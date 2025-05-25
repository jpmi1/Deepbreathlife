import { Component } from '@angular/core';

export interface EventItem {
  title: string;
  subtitle?: string; // e.g., "Membership Offer"
  date: string; // e.g., "Thu, Jun 12"
  time: string; // e.g., "7:00 PM – 8:15 PM CDT"
  platform: string; // e.g., "Virtual - Zoom"
  description: string;
  bookingLink: string; // e.g., "#" or a specific path
}

@Component({
  selector: 'app-upcoming-events',
  standalone: false,
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.css'
})
export class UpcomingEventsComponent {
  events: EventItem[] = [
    {
      title: "Breathwork Activation: A Transformational Journey",
      subtitle: "Membership Offer",
      date: "Thu, Jun 12, 2025", // Added year for clarity
      time: "7:00 PM – 8:15 PM CDT",
      platform: "Virtual - Zoom",
      description: "Breathe. Release. Align. Create.",
      bookingLink: "#event1"
    },
    {
      title: "Breathwork Activation: A Transformational Journey",
      subtitle: "Membership Offer",
      date: "Thu, Jun 26, 2025", // Added year
      time: "7:00 PM – 8:15 PM", // Assuming CDT, clarify if different
      platform: "Virtual - Zoom",
      description: "Breathe. Release. Align. Create.",
      bookingLink: "#event2"
    }
  ];
}
