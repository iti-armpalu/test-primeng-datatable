import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

import { BoxShadowLow, BoxShadowMedium, BoxShadowHigh } from '../../../../../../build/ts/colors';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {
  boxShadow: string = '';
  lowBoxShadow: string = BoxShadowLow;
  mediumBoxShadow: string = BoxShadowMedium;
  highBoxShadow: string = BoxShadowHigh;

  sliderValue: number = 4;
  sliderValueInterfaceCard: number = 4;
  sliderValueButton: number = 4;
  sliderValueInput: number = 4;

  selectionSlider: Options = {
    floor: 0,
    ceil: 32,
    showSelectionBar: true
  };

  ngOnInit(): void {
  }

  constructor() { }

  onBoxShadowValChange(value: any) {
    this.boxShadow = value;
  }

  onSliderValChange1(value: any) {
    this.sliderValueInterfaceCard = value;
  }

  onSliderValChange2(value: any) {
    this.sliderValueButton = value;
  }

  onSliderValChange3(value: any) {
    this.sliderValueInput = value;
  }





}
