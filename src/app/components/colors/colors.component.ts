import { Component, OnInit } from '@angular/core';
// import { ColorCard } from '../../color-card.model';
import { TinyColor } from '@ctrl/tinycolor';

import {
  ColorBaseBrandPrimary, ColorBaseBrandSecondary,

  ColorBaseSurface, ColorBaseOnSurface, ColorBaseOnSurfaceAlt, ColorBaseNeutral,

  ColorBaseSuccess, ColorBaseInfo, ColorBaseWarning, ColorBaseDanger,

  ColorChart1, ColorChart2, ColorChart3, ColorChart4, ColorChart5, ColorChart6, ColorChart7, ColorChart8, ColorChart9, ColorChart10, ColorChart11, ColorChart12,
  ColorGenderMale, ColorGenderFemale, ColorGenderNonBinary,

  ColorBackgroundDefault, ColorBackgroundNested, ColorBackgroundHover, ColorBackgroundPressed, ColorBackgroundSelected,

  ColorSurfaceDefaultDefault, ColorSurfaceDefaultNested, ColorSurfaceDefaultHover, ColorSurfaceDefaultPressed, ColorSurfaceDefaultSelected, ColorSurfaceDefaultSelectedHover, ColorSurfaceDefaultSelectedPressed, ColorSurfaceBrandDefault, ColorSurfaceBrandHover, ColorSurfaceBrandPressed, ColorSurfaceNeutralDefault, ColorSurfaceNeutralHover, ColorSurfaceNeutralPressed, ColorSurfaceAltDefault, ColorSurfaceAltHover, ColorSurfaceAltPressed, ColorSurfaceSuccessDefault, ColorSurfaceSuccessHover, ColorSurfaceSuccessPressed, ColorSurfaceInfoDefault, ColorSurfaceInfoHover, ColorSurfaceInfoPressed, ColorSurfaceWarningDefault, ColorSurfaceWarningHover, ColorSurfaceWarningPressed, ColorSurfaceDangerDefault, ColorSurfaceDangerHover, ColorSurfaceDangerPressed,

  ColorOnSurfaceDefault, ColorOnSurfaceNeutral, ColorOnSurfaceBrand, ColorOnSurfaceSuccess, ColorOnSurfaceInfo, ColorOnSurfaceWarning, ColorOnSurfaceDanger, ColorOnSurfaceAlternative,
  ColorDisabledDefault, ColorDisabledNested, ColorDisabledAlt,

  ColorSwatchesPrimaryBrand50, ColorSwatchesPrimaryBrand100, ColorSwatchesPrimaryBrand200, ColorSwatchesPrimaryBrand300, ColorSwatchesPrimaryBrand400, ColorSwatchesPrimaryBrand500, ColorSwatchesPrimaryBrand600, ColorSwatchesPrimaryBrand700, ColorSwatchesPrimaryBrand800, ColorSwatchesPrimaryBrand900,

  ColorSwatchesSecondaryBrand50, ColorSwatchesSecondaryBrand100, ColorSwatchesSecondaryBrand200, ColorSwatchesSecondaryBrand300, ColorSwatchesSecondaryBrand400, ColorSwatchesSecondaryBrand500, ColorSwatchesSecondaryBrand600, ColorSwatchesSecondaryBrand700, ColorSwatchesSecondaryBrand800, ColorSwatchesSecondaryBrand900,

  ColorSwatchesSuccess50, ColorSwatchesSuccess100, ColorSwatchesSuccess200, ColorSwatchesSuccess300, ColorSwatchesSuccess400, ColorSwatchesSuccess500, ColorSwatchesSuccess600, ColorSwatchesSuccess700, ColorSwatchesSuccess800, ColorSwatchesSuccess900,

  ColorSwatchesInfo50, ColorSwatchesInfo100, ColorSwatchesInfo200, ColorSwatchesInfo300, ColorSwatchesInfo400, ColorSwatchesInfo500, ColorSwatchesInfo600, ColorSwatchesInfo700, ColorSwatchesInfo800, ColorSwatchesInfo900,

  ColorSwatchesWarning50, ColorSwatchesWarning100, ColorSwatchesWarning200, ColorSwatchesWarning300, ColorSwatchesWarning400, ColorSwatchesWarning500, ColorSwatchesWarning600, ColorSwatchesWarning700, ColorSwatchesWarning800, ColorSwatchesWarning900,

  ColorSwatchesDanger50, ColorSwatchesDanger100, ColorSwatchesDanger200, ColorSwatchesDanger300, ColorSwatchesDanger400, ColorSwatchesDanger500, ColorSwatchesDanger600, ColorSwatchesDanger700, ColorSwatchesDanger800, ColorSwatchesDanger900,
} from '../../../../build/ts/colors'

export interface ColorCard {
  id: number;
  title: string;
  hex: string;
  designToken: string;
}

export interface ColorTableElement {
  color: string;
  token: string;
  hex: string;
}

const MAIN_BRAND_COLORS: ColorCard[] = [
  {id: 1, title: "Primary Color", hex: new TinyColor(ColorBaseBrandPrimary).toHexString(), designToken: "--color-base-brand-primary"},
  {id: 2, title: "Secondary Color", hex: new TinyColor(ColorBaseBrandSecondary).toHexString(), designToken: "--color-base-brand-secondary"}
]

const SURFACE_COLORS: ColorCard[] = [
  {id: 1, title: "Surface Color", hex: ColorBaseSurface, designToken: "--color-base-surface"},
  {id: 2, title: "On Surface Color", hex: ColorBaseOnSurface, designToken: "--color-base-on-surface"},
  {id: 3, title: "On Surface Alt Color", hex: ColorBaseOnSurfaceAlt, designToken: "--color-base-on-surface-alt"},
  {id: 4, title: "Neutral Color", hex: ColorBaseNeutral, designToken: "--color-base-neutral"}
]

const CONTEXTUAL_COLORS: ColorCard[] = [
  {id: 1, title: "Success", hex: new TinyColor(ColorBaseSuccess).toHexString(), designToken: "--color-base-success"},
  {id: 2, title: "Informational", hex: new TinyColor(ColorBaseInfo).toHexString(), designToken: "--color-base-info"},
  {id: 3, title: "Warning", hex: new TinyColor(ColorBaseWarning).toHexString(), designToken: "--color-base-warning"},
  {id: 4, title: "Danger", hex: new TinyColor(ColorBaseDanger).toHexString(), designToken: "--color-base-danger"}
]

const DATA_VISUALIZATION_COLORS: ColorCard[] = [
  {id: 1, title: "Chart 1", hex: ColorChart1, designToken: "--color-chart-1"},
  {id: 2, title: "Chart 2", hex: ColorChart2, designToken: "--color-chart-2"},
  {id: 3, title: "Chart 3", hex: ColorChart3, designToken: "--color-chart-3"},
  {id: 4, title: "Chart 4", hex: ColorChart4, designToken: "--color-chart-4"},
  {id: 5, title: "Chart 5", hex: ColorChart5, designToken: "--color-chart-5"},
  {id: 6, title: "Chart 6", hex: ColorChart6, designToken: "--color-chart-6"},
  {id: 7, title: "Chart 7", hex: ColorChart7, designToken: "--color-chart-7"},
  {id: 8, title: "Chart 8", hex: ColorChart8, designToken: "--color-chart-8"},
  {id: 9, title: "Chart 9", hex: ColorChart9, designToken: "--color-chart-9"},
  {id: 10, title: "Chart 10", hex: ColorChart10, designToken: "--color-chart-10"},
  {id: 11, title: "Chart 11", hex: ColorChart11, designToken: "--color-chart-11"},
  {id: 12, title: "Chart 12", hex: ColorChart12, designToken: "--color-chart-12"},
  {id: 13, title: "Male", hex: ColorGenderMale, designToken: "--color-gender-male"},
  {id: 14, title: "Female", hex: ColorGenderFemale, designToken: "--color-gender-female"},
  {id: 15, title: "Non-binary", hex: ColorGenderNonBinary, designToken: "--color-gender-non-binary"}
]

const BACKGROUND_COLORS_DATA: ColorTableElement[] = [
  {color: ColorBackgroundDefault, token: '--color-background-default', hex: ColorBackgroundDefault},
  {color: ColorBackgroundNested, token: '--color-background-nested', hex: ColorBackgroundNested},
  {color: ColorBackgroundHover, token: '--color-background-hover', hex: ColorBackgroundHover},
  {color: ColorBackgroundPressed, token: '--color-background-pressed', hex: ColorBackgroundPressed},
  {color: ColorBackgroundSelected, token: '--color-background-selected', hex: ColorBackgroundSelected},
];

const SURFACE_COLORS_DATA: ColorTableElement[] = [
  {color: ColorSurfaceDefaultDefault, token: '--color-surface-default-default', hex: ColorSurfaceDefaultDefault},
  {color: ColorSurfaceDefaultNested, token: '--color-surface-default-nested', hex: ColorSurfaceDefaultNested},
  {color: ColorSurfaceDefaultHover, token: '--color-surface-default-hover', hex: ColorSurfaceDefaultHover},
  {color: ColorSurfaceDefaultPressed, token: '--color-surface-default-pressed', hex: ColorSurfaceDefaultPressed},
  {color: ColorSurfaceDefaultSelected, token: '--color-surface-default-selected', hex: ColorSurfaceDefaultSelected},
  {color: ColorSurfaceDefaultSelectedHover, token: '--color-surface-default-selected-hover', hex: ColorSurfaceDefaultSelectedHover},
  {color: ColorSurfaceDefaultSelectedPressed, token: '--color-surface-default-selected-pressed', hex: ColorSurfaceDefaultSelectedPressed},
  {color: ColorSurfaceBrandDefault, token: '--color-surface-brand-default', hex: ColorSurfaceBrandDefault},
  {color: ColorSurfaceBrandHover, token: '--color-surface-brand-hover', hex: ColorSurfaceBrandHover},
  {color: ColorSurfaceBrandPressed, token: '--color-surface-brand-pressed', hex: ColorSurfaceBrandPressed},
  {color: ColorSurfaceNeutralDefault, token: '--color-surface-neutral-default', hex: ColorSurfaceNeutralDefault},
  {color: ColorSurfaceNeutralHover, token: '--color-surface-neutral-hover', hex: ColorSurfaceNeutralHover},
  {color: ColorSurfaceNeutralPressed, token: '--color-surface-neutral-pressed', hex: ColorSurfaceNeutralPressed},
  {color: ColorSurfaceAltDefault, token: '--color-surface-alt-default', hex: ColorSurfaceAltDefault},
  {color: ColorSurfaceAltHover, token: '--color-surface-alt-hover', hex: ColorSurfaceAltHover},
  {color: ColorSurfaceAltPressed, token: '--color-surface-alt-pressed', hex: ColorSurfaceAltPressed},
  {color: ColorSurfaceSuccessDefault, token: '--color-surface-success-default', hex: ColorSurfaceSuccessDefault},
  {color: ColorSurfaceSuccessHover, token: '--color-surface-success-hover', hex: ColorSurfaceSuccessHover},
  {color: ColorSurfaceSuccessPressed, token: '--color-surface-success-pressed', hex: ColorSurfaceSuccessPressed},
  {color: ColorSurfaceInfoDefault, token: '--color-surface-info-default', hex: ColorSurfaceInfoDefault},
  {color: ColorSurfaceInfoHover, token: '--color-surface-info-hover', hex: ColorSurfaceInfoHover},
  {color: ColorSurfaceInfoPressed, token: '--color-surface-info-pressed', hex: ColorSurfaceInfoPressed},
  {color: ColorSurfaceWarningDefault, token: '--color-surface-warning-default', hex: ColorSurfaceWarningDefault},
  {color: ColorSurfaceWarningHover, token: '--color-surface-warning-hover', hex: ColorSurfaceWarningHover},
  {color: ColorSurfaceWarningPressed, token: '--color-surface-warning-pressed', hex: ColorSurfaceWarningPressed},
  {color: ColorSurfaceDangerDefault, token: '--color-surface-danger-default', hex: ColorSurfaceDangerDefault},
  {color: ColorSurfaceDangerHover, token: '--color-surface-danger-hover', hex: ColorSurfaceDangerHover},
  {color: ColorSurfaceDangerPressed, token: '--color-surface-danger-pressed', hex: ColorSurfaceDangerPressed}
];

const ON_SURFACE_COLORS_DATA: ColorTableElement[] = [
  {color: ColorOnSurfaceDefault, token: '--color-on-surface', hex: ColorOnSurfaceDefault},
  {color: ColorOnSurfaceAlternative, token: '--color-on-surface-alt', hex: ColorOnSurfaceAlternative},
  {color: ColorOnSurfaceNeutral, token: '--color-on-surface-neutral', hex: ColorOnSurfaceNeutral},
  {color: ColorOnSurfaceBrand, token: '--color-on-surface-brand', hex: new TinyColor(ColorOnSurfaceBrand).toHexString()},
  {color: ColorOnSurfaceSuccess, token: '--color-on-surface-success', hex: new TinyColor(ColorOnSurfaceSuccess).toHexString()},
  {color: ColorOnSurfaceInfo, token: '--color-on-surface-info', hex: new TinyColor(ColorOnSurfaceInfo).toHexString()},
  {color: ColorOnSurfaceWarning, token: '--color-on-surface-warning', hex: new TinyColor(ColorOnSurfaceWarning).toHexString()},
  {color: ColorOnSurfaceDanger, token: '--color-on-surface-danger', hex: new TinyColor(ColorOnSurfaceDanger).toHexString()},
];

const DISABLED_COLORS_DATA: ColorTableElement[] = [
  {color: ColorDisabledDefault, token: '--color-disabled-default', hex: ColorDisabledDefault},
  {color: ColorDisabledNested, token: '--color-disabled-nested', hex: ColorDisabledNested},
  {color: ColorDisabledAlt, token: '--color-disabled-alt', hex: ColorDisabledAlt}
];

const BRAND_PRIMARY_COLOR_SWATCHES_DATA: ColorTableElement[] = [
  {color: ColorSwatchesPrimaryBrand50, token: '--color-swatches-primary-brand-50', hex: "TBC"},
  {color: ColorSwatchesPrimaryBrand100, token: '--color-swatches-primary-brand-100', hex: "TBC"},
  {color: ColorSwatchesPrimaryBrand200, token: '--color-swatches-primary-brand-200', hex: "TBC"},
  {color: ColorSwatchesPrimaryBrand300, token: '--color-swatches-primary-brand-300', hex: "TBC"},
  {color: ColorSwatchesPrimaryBrand400, token: '--color-swatches-primary-brand-400', hex: "TBC"},
  {color: ColorSwatchesPrimaryBrand500, token: '--color-swatches-primary-brand-500', hex: "TBC"},
  {color: ColorSwatchesPrimaryBrand600, token: '--color-swatches-primary-brand-600', hex: "TBC"},
  {color: ColorSwatchesPrimaryBrand700, token: '--color-swatches-primary-brand-700', hex: "TBC"},
  {color: ColorSwatchesPrimaryBrand800, token: '--color-swatches-primary-brand-800', hex: "TBC"},
  {color: ColorSwatchesPrimaryBrand900, token: '--color-swatches-primary-brand-900', hex: "TBC"},
];

const BRAND_SECONDARY_COLOR_SWATCHES_DATA: ColorTableElement[] = [
  {color: ColorSwatchesSecondaryBrand50, token: '--color-swatches-secondary-brand-50', hex: "TBC"},
  {color: ColorSwatchesSecondaryBrand100, token: '--color-swatches-secondary-brand-100', hex: "TBC"},
  {color: ColorSwatchesSecondaryBrand200, token: '--color-swatches-secondary-brand-200', hex: "TBC"},
  {color: ColorSwatchesSecondaryBrand300, token: '--color-swatches-secondary-brand-300', hex: "TBC"},
  {color: ColorSwatchesSecondaryBrand400, token: '--color-swatches-secondary-brand-400', hex: "TBC"},
  {color: ColorSwatchesSecondaryBrand500, token: '--color-swatches-secondary-brand-500', hex: "TBC"},
  {color: ColorSwatchesSecondaryBrand600, token: '--color-swatches-secondary-brand-600', hex: "TBC"},
  {color: ColorSwatchesSecondaryBrand700, token: '--color-swatches-secondary-brand-700', hex: "TBC"},
  {color: ColorSwatchesSecondaryBrand800, token: '--color-swatches-secondary-brand-800', hex: "TBC"},
  {color: ColorSwatchesSecondaryBrand900, token: '--color-swatches-secondary-brand-900', hex: "TBC"},
];

const SUCCESS_COLOR_SWATCHES_DATA: ColorTableElement[] = [
  {color: ColorSwatchesSuccess50, token: '--color-swatches-success-50', hex: new TinyColor(ColorSwatchesSuccess50).toHexString()},
  {color: ColorSwatchesSuccess100, token: '--color-swatches-success-100', hex: ColorSwatchesSuccess50},
  {color: ColorSwatchesSuccess200, token: '--color-swatches-success-200', hex: "TBC"},
  {color: ColorSwatchesSuccess300, token: '--color-swatches-success-300', hex: "TBC"},
  {color: ColorSwatchesSuccess400, token: '--color-swatches-success-400', hex: "TBC"},
  {color: ColorSwatchesSuccess500, token: '--color-swatches-success-500', hex: "TBC"},
  {color: ColorSwatchesSuccess600, token: '--color-swatches-success-600', hex: "TBC"},
  {color: ColorSwatchesSuccess700, token: '--color-swatches-success-700', hex: "TBC"},
  {color: ColorSwatchesSuccess800, token: '--color-swatches-success-800', hex: "TBC"},
  {color: ColorSwatchesSuccess900, token: '--color-swatches-success-900', hex: "TBC"},
];

const INFO_COLOR_SWATCHES_DATA: ColorTableElement[] = [
  {color: ColorSwatchesInfo50, token: '--color-swatches-info-50', hex: "TBC"},
  {color: ColorSwatchesInfo100, token: '--color-swatches-info-100', hex: "TBC"},
  {color: ColorSwatchesInfo200, token: '--color-swatches-info-200', hex: "TBC"},
  {color: ColorSwatchesInfo300, token: '--color-swatches-info-300', hex: "TBC"},
  {color: ColorSwatchesInfo400, token: '--color-swatches-info-400', hex: "TBC"},
  {color: ColorSwatchesInfo500, token: '--color-swatches-info-500', hex: "TBC"},
  {color: ColorSwatchesInfo600, token: '--color-swatches-info-600', hex: "TBC"},
  {color: ColorSwatchesInfo700, token: '--color-swatches-info-700', hex: "TBC"},
  {color: ColorSwatchesInfo800, token: '--color-swatches-info-800', hex: "TBC"},
  {color: ColorSwatchesInfo900, token: '--color-swatches-info-900', hex: "TBC"},
];

const WARNING_COLOR_SWATCHES_DATA: ColorTableElement[] = [
  {color: ColorSwatchesWarning50, token: '--color-swatches-warning-50', hex: "TBC"},
  {color: ColorSwatchesWarning100, token: '--color-swatches-warning-100', hex: "TBC"},
  {color: ColorSwatchesWarning200, token: '--color-swatches-warning-200', hex: "TBC"},
  {color: ColorSwatchesWarning300, token: '--color-swatches-warning-300', hex: "TBC"},
  {color: ColorSwatchesWarning400, token: '--color-swatches-warning-400', hex: "TBC"},
  {color: ColorSwatchesWarning500, token: '--color-swatches-warning-500', hex: "TBC"},
  {color: ColorSwatchesWarning600, token: '--color-swatches-warning-600', hex: "TBC"},
  {color: ColorSwatchesWarning700, token: '--color-swatches-warning-700', hex: "TBC"},
  {color: ColorSwatchesWarning800, token: '--color-swatches-warning-800', hex: "TBC"},
  {color: ColorSwatchesWarning900, token: '--color-swatches-warning-900', hex: "TBC"},
];

const DANGER_COLOR_SWATCHES_DATA: ColorTableElement[] = [
  {color: ColorSwatchesDanger50, token: '--color-swatches-danger-50', hex: "TBC"},
  {color: ColorSwatchesDanger100, token: '--color-swatches-danger-100', hex: "TBC"},
  {color: ColorSwatchesDanger200, token: '--color-swatches-danger-200', hex: "TBC"},
  {color: ColorSwatchesDanger300, token: '--color-swatches-danger-300', hex: "TBC"},
  {color: ColorSwatchesDanger400, token: '--color-swatches-danger-400', hex: "TBC"},
  {color: ColorSwatchesDanger500, token: '--color-swatches-danger-500', hex: "TBC"},
  {color: ColorSwatchesDanger600, token: '--color-swatches-danger-600', hex: "TBC"},
  {color: ColorSwatchesDanger700, token: '--color-swatches-danger-700', hex: "TBC"},
  {color: ColorSwatchesDanger800, token: '--color-swatches-danger-800', hex: "TBC"},
  {color: ColorSwatchesDanger900, token: '--color-swatches-danger-900', hex: "TBC"},
];

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  constructor() { }

  mainBrandColors = MAIN_BRAND_COLORS;
  surfaceColors = SURFACE_COLORS;
  contextualColors = CONTEXTUAL_COLORS;
  dataVisualizationColors = DATA_VISUALIZATION_COLORS;

  displayedColumns: string[] = ['color', 'token', 'hex'];
  backgroundColorsData = BACKGROUND_COLORS_DATA;
  surfaceColorsData = SURFACE_COLORS_DATA;
  onSurfaceColorsData = ON_SURFACE_COLORS_DATA;
  disabledColorsData = DISABLED_COLORS_DATA;
  brandPrimaryColorSwatchesData = BRAND_PRIMARY_COLOR_SWATCHES_DATA;
  brandSecondaryColorSwatchesData = BRAND_SECONDARY_COLOR_SWATCHES_DATA;
  successColorSwatchesData = SUCCESS_COLOR_SWATCHES_DATA;
  infoColorSwatchesData = INFO_COLOR_SWATCHES_DATA;
  warningColorSwatchesData = WARNING_COLOR_SWATCHES_DATA;
  dangerColorSwatchesData = DANGER_COLOR_SWATCHES_DATA;

  ngOnInit(): void {
  }

}
