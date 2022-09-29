import { Component, OnInit } from '@angular/core';
import { FontMultiplierXs, FontMultiplierSmall, FontMultiplierMedium, FontMultiplierLarge, FontMultiplierXl, FontMultiplier2xl, FontMultiplier3xl, FontMultiplier4xl, FontMultiplier5xl, FontMultiplier6xl } from '../../../../../../build/ts/colors';

export interface Typography {
  title: string;
  fontMultiplier: number;
  fontWeight: number;
  textDecoration: string
}

export interface Font {
  value: string;
  viewValue: string;
}

const HEADINGS: Typography[] = [
  {title: "Heading 1", fontMultiplier: Number(FontMultiplier6xl), fontWeight: 400, textDecoration: "none"},
  {title: "Heading 2", fontMultiplier: Number(FontMultiplier5xl), fontWeight: 400, textDecoration: "none"},
  {title: "Heading 3", fontMultiplier: Number(FontMultiplier4xl), fontWeight: 400, textDecoration: "none"},
  {title: "Heading 4", fontMultiplier: Number(FontMultiplier3xl), fontWeight: 400, textDecoration: "none"},
  {title: "Heading 5", fontMultiplier: Number(FontMultiplier2xl), fontWeight: 400, textDecoration: "none"},
  {title: "Heading 6", fontMultiplier: Number(FontMultiplierXl), fontWeight: 400, textDecoration: "none"}
]

const SUBTITLES: Typography[] = [
  {title: "Subtitle Regular", fontMultiplier: Number(FontMultiplierLarge), fontWeight: 400, textDecoration: "none"},
  {title: "Subtitle Bold", fontMultiplier: Number(FontMultiplierLarge), fontWeight: 700, textDecoration: "none"},
  {title: "Subtitle Link", fontMultiplier: Number(FontMultiplierLarge), fontWeight: 400, textDecoration: "underline"}
]

const PARAGRAPH_1: Typography[] = [
  {title: "Paragraph 1 Regular", fontMultiplier: Number(FontMultiplierMedium), fontWeight: 400, textDecoration: "none"},
  {title: "Paragraph 1 Bold", fontMultiplier: Number(FontMultiplierMedium), fontWeight: 700, textDecoration: "none"},
  {title: "Paragraph 1 Link", fontMultiplier: Number(FontMultiplierMedium), fontWeight: 400, textDecoration: "underline"}
]

const PARAGRAPH_2: Typography[] = [
  {title: "Paragraph 2 Regular", fontMultiplier: Number(FontMultiplierSmall), fontWeight: 400, textDecoration: "none"},
  {title: "Paragraph 2 Bold", fontMultiplier: Number(FontMultiplierSmall), fontWeight: 700, textDecoration: "none"},
  {title: "Paragraph 2 Link", fontMultiplier: Number(FontMultiplierSmall), fontWeight: 400, textDecoration: "underline"}
]

const CAPTIONS: Typography[] = [
  {title: "Caption Regular", fontMultiplier: Number(FontMultiplierXs), fontWeight: 400, textDecoration: "none"},
  {title: "Caption Bold", fontMultiplier: Number(FontMultiplierXs), fontWeight: 700, textDecoration: "none"},
  {title: "Caption Link", fontMultiplier: Number(FontMultiplierXs), fontWeight: 400, textDecoration: "underline"}
]

const BUTTONS: Typography[] = [
  {title: "Button Label 1", fontMultiplier: Number(FontMultiplierMedium), fontWeight: 700, textDecoration: "none"},
  {title: "Button Label 2", fontMultiplier: Number(FontMultiplierSmall), fontWeight: 700, textDecoration: "none"},
  {title: "Button Label 3", fontMultiplier: Number(FontMultiplierXs), fontWeight: 700, textDecoration: "none"}
]

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {
  baselineFontSize: number = 16;

  headings = HEADINGS;
  subtitles = SUBTITLES;
  paragraph_1 = PARAGRAPH_1;
  paragraph_2 = PARAGRAPH_2;
  captions = CAPTIONS;
  buttons = BUTTONS;


  fonts: Font[] = [
    {value: 'YRThree', viewValue: 'YRThree'},
    {value: 'Snowflake Sans BETA', viewValue: 'Snowflake Sans BETA'},
    {value: 'Snowflake Inline BETA', viewValue: 'Snowflake Inline BETA'},
    {value: 'Roboto', viewValue: 'Roboto'},
    {value: 'Open Sans', viewValue: 'Open Sans'},
    {value: 'Source Sans Pro', viewValue: 'Source Sans Pro'},
    {value: 'Poppins', viewValue: 'Poppins'},
    {value: 'Nunito', viewValue: 'Nunito'},
  ];

  selectedHeadingFont = this.fonts[1].value;
  selectedBodyFont = this.fonts[1].value;

  constructor() { }

  ngOnInit(): void {
  }

  onBaselineFontValChange(value: any) {
    this.baselineFontSize = value;
  }

}
