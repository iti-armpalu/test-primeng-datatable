import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.scss']
})
export class ColorpickerComponent {
  @Input() hex: string = '';
  @Input() title: string = '';
  @Input() designToken: string = '';

  constructor() { }

}
