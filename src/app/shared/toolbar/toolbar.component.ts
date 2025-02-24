import { Component, inject, model } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { plotStore } from '../../store/plot.store';
import { mockedPlot } from '../../services/plot-api.service';

@Component({
  selector: 'app-toolbar',
  imports: [MatIconModule, MatDividerModule, MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  value = model('');

  readonly store = inject(plotStore);

  resetValue(): void {
    this.value.set('');
  }

  createPlot(): void {
    this.store.updateCurrentPlot(mockedPlot);
    this.store.createPlot();
  }

  editPlot(): void {
    this.store.updateCurrentPlot(mockedPlot);
    this.store.editPlot();
  }
}
