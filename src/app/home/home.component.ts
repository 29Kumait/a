import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() openSidebarRequest = new EventEmitter<void>();

  openSidebar() {
    this.openSidebarRequest.emit();
  }
}


// export class HomeComponent {
// activate() {
// throw new Error('Method not implemented.');
// }

// }