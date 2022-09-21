import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectionSlider: Options = {
    floor: 0,
    ceil: 32,
    showSelectionBar: true
  };

}
