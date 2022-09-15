import { Component } from '@angular/core';
import { ColorCard } from './color-card.model';

import { ColorBaseBrandPrimary, ColorBaseBrandSecondary, ColorBaseSurface, ColorBaseOnSurface, ColorBaseOnSurfaceAlt, ColorBaseNeutral, ColorBaseSuccess, ColorBaseInfo, ColorBaseWarning, ColorBaseDanger, ColorChart1, ColorChart2, ColorChart3, ColorChart4, ColorChart5, ColorChart6, ColorChart7, ColorChart8, ColorChart9, ColorChart10, ColorChart11, ColorChart12, ColorGenderMale, ColorGenderFemale, ColorGenderNonBinary } from '../../build/ts/colors'

import { ColorPickerService } from 'ngx-color-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  mainBrandColors: ColorCard[] = [
    {
      id: 1,
      title: "Primary Color",
      hex: ColorBaseBrandPrimary,
      designToken: "--color-base-brand-primary"
    },
    {
      id: 2,
      title: "Secondary Color",
      hex: ColorBaseBrandSecondary,
      designToken: "--color-base-brand-secondary"
    }
  ]

  surfaceColors: ColorCard[] = [
    {
      id: 1,
      title: "Surface Color",
      hex: ColorBaseSurface,
      designToken: "--color-base-surface"
    },
    {
      id: 2,
      title: "On Surface Color",
      hex: ColorBaseOnSurface,
      designToken: "--color-base-on-surface"
    },
    {
      id: 3,
      title: "On Surface Alt Color",
      hex: ColorBaseOnSurfaceAlt,
      designToken: "--color-base-on-surface-alt"
    },
    {
      id: 4,
      title: "Neutral Color",
      hex: ColorBaseNeutral,
      designToken: "--color-base-neutral"
    }
  ]

  contextualColors: ColorCard[] = [
    {
      id: 1,
      title: "Success",
      hex: ColorBaseSuccess,
      designToken: "--color-base-success"
    },
    {
      id: 2,
      title: "Informational",
      hex: ColorBaseInfo,
      designToken: "--color-base-info"
    },
    {
      id: 3,
      title: ColorBaseWarning,
      hex: "#FB9D29",
      designToken: "--color-base-warning"
    },
    {
      id: 4,
      title: "Danger",
      hex: ColorBaseDanger,
      designToken: "--color-base-danger"
    }
  ]

  dataVisualizationColors: ColorCard[] = [
    {
      id: 1,
      title: "Chart 1",
      hex: ColorChart1,
      designToken: "--color-chart-1"
    },
    {
      id: 2,
      title: "Chart 2",
      hex: ColorChart2,
      designToken: "--color-chart-2"
    },
    {
      id: 3,
      title: "Chart 3",
      hex: ColorChart3,
      designToken: "--color-chart-3"
    },
    {
      id: 4,
      title: "Chart 4",
      hex: ColorChart4,
      designToken: "--color-chart-4"
    },
    {
      id: 5,
      title: "Chart 5",
      hex: ColorChart5,
      designToken: "--color-chart-5"
    },
    {
      id: 6,
      title: "Chart 6",
      hex: ColorChart6,
      designToken: "--color-chart-6"
    },
    {
      id: 7,
      title: "Chart 7",
      hex: ColorChart7,
      designToken: "--color-chart-7"
    },
    {
      id: 8,
      title: "Chart 8",
      hex: ColorChart8,
      designToken: "--color-chart-8"
    },
    {
      id: 9,
      title: "Chart 9",
      hex: ColorChart9,
      designToken: "--color-chart-9"
    },
    {
      id: 10,
      title: "Chart 10",
      hex: ColorChart10,
      designToken: "--color-chart-10"
    },
    {
      id: 11,
      title: "Chart 11",
      hex: ColorChart11,
      designToken: "--color-chart-11"
    },
    {
      id: 12,
      title: "Chart 12",
      hex: ColorChart12,
      designToken: "--color-chart-12"
    },
    {
      id: 13,
      title: "Male",
      hex: ColorGenderMale,
      designToken: "--color-gender-male"
    },
    {
      id: 14,
      title: "Female",
      hex: ColorGenderFemale,
      designToken: "--color-gender-female"
    },
    {
      id: 15,
      title: "Non-biary",
      hex: ColorGenderNonBinary,
      designToken: "--color-gender-non-binary"
    }
  ]

}


