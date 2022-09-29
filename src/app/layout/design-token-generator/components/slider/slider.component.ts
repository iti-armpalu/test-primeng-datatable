import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() sliderValue: number = 4;

  selectionSlider: Options = {
    floor: 0,
    ceil: 32,
    showSelectionBar: true
  };

  onSliderValChange(value: any) {
    console.log(value);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
