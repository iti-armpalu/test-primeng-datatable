export class AppRouteList {
  static GETTING_STARTED = 'getting-started';
  static DESIGN_DEVELOP = 'design-develop';
  static DESIGN_DEVELOP_COMPONENTS = 'design-develop/components';
  static DESIGN_DEVELOP_FOUNDATIONS = 'design-develop/foundations';
  static DESIGN_DEVELOP_PATTERNS = 'design-develop/patterns';
  static DESIGN_DEVELOP_LAYOUTS = 'design-develop/layouts';
  static RESOURCES = 'resources';

  static DESIGN_TOKEN_GENERATOR = 'design-token-generator';

  static values = (): { name: string; url: string }[] => [
    {
      name: 'About',
      url: '/getting-started/about',
    },
    {
      name: 'Designers',
      url: '/getting-started/designers',
    },
    {
      name: 'Developers',
      url: '/getting-started/developers',
    },

    {
      name: 'Colors',
      url: '/design-develop/foundations/colors/designer-guidelines',
    },
    {
      name: 'Grid',
      url: '/design-develop/foundations/grid/designer-guidelines',
    },
    {
      name: 'Typography',
      url: '/design-develop/foundations/typography/designer-guidelines',
    },
    {
      name: 'Spacings',
      url: '/design-develop/foundations/spacings/designer-guidelines',
    },
    {
      name: 'Visual Form',
      url: '/design-develop/foundations/visual-form/designer-guidelines',
    },
    {
      name: 'Icons',
      url: '/design-develop/foundations/icons/designer-guidelines',
    },
    {
      name: 'Logo',
      url: '/design-develop/foundations/logo/designer-guidelines',
    },
    {
      name: 'Autocomplete',
      url: '/design-develop/components/autocomplete/designer-guidelines',
    },
    {
      name: 'Button',
      url: '/design-develop/components/buttons/designer-guidelines',
    },
    {
      name: 'Button Toggle',
      url: '/design-develop/components/button-toggle/designer-guidelines',
    },
    {
      name: 'Card',
      url: '/design-develop/components/card/designer-guidelines',
    },
    {
      name: 'Checkbox',
      url: '/design-develop/components/checkbox/designer-guidelines',
    },
    {
      name: 'Chips',
      url: '/design-develop/components/chips/designer-guidelines',
    },
    {
      name: 'Data Visualization',
      url: '/design-develop/foundations/data-visualization/designer-guidelines',
    },
    {
      name: 'Datepicker',
      url: '/design-develop/components/datepicker/designer-guidelines',
    },
    {
      name: 'Dialogs',
      url: '/design-develop/components/dialogs/designer-guidelines',
    },
    {
      name: 'Dropdown Menu',
      url: '/design-develop/components/dropdown-menu/designer-guidelines',
    },
    {
      name: 'Expansion Panel',
      url: '/design-develop/components/expansion-panel/designer-guidelines',
    },
    {
      name: 'Input',
      url: '/design-develop/components/input/designer-guidelines',
    },
    {
      name: 'Notification Badge',
      url: '/design-develop/components/notification-badge/designer-guidelines',
    },
    {
      name: 'Progress Indicators',
      url: '/design-develop/components/progress/designer-guidelines',
    },
    {
      name: 'Radio Button',
      url: '/design-develop/components/radio-button/designer-guidelines',
    },
    {
      name: 'Select',
      url: '/design-develop/components/select/designer-guidelines',
    },
    {
      name: 'Navigation',
      url: '/design-develop/components/navigation/designer-guidelines',
    },
    {
      name: 'Slide Toggle',
      url: '/design-develop/components/slide-toggle/designer-guidelines',
    },
    {
      name: 'Slider',
      url: '/design-develop/components/slider/designer-guidelines',
    },
    {
      name: 'Snackbar',
      url: '/design-develop/components/snackbar/designer-guidelines',
    },
    {
      name: 'Table',
      url: '/design-develop/components/table/designer-guidelines',
    },
    {
      name: 'Tabs',
      url: '/design-develop/components/tabs/designer-guidelines',
    },

    {
      name: 'Dashboard',
      url: '/design-develop/patterns/dashboard',
    },

    {
      name: 'Login Page',
      url: '/design-develop/patterns/login-page',
    },

    {
      name: 'UI Design kits',
      url: '/resources/ui-design-kits',
    },
    {
      name: 'Developer Repos',
      url: '/resources/developer-repos',
    },
    {
      name: 'Reading Material',
      url: '/resources/reading-material',
    },
  ]
}
