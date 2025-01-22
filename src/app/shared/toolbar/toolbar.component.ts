import { Component, model } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-toolbar',
  imports: [MatIconModule, MatDividerModule, MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  value = model('');

  resetValue() {
    this.value.set('');
  }
}
