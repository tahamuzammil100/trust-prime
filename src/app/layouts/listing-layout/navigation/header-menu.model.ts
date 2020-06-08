import {NavigationModelInterface} from '@gaxon/components';

export class HeaderMenuModel implements NavigationModelInterface {
  public navigation: any[];

  constructor() {
    this.navigation = [
      {
        id: 'menu-home',
        title: 'Home',
        translate: 'NAV.HOME',
        type: 'collapse',
        icon: '',
        children: [
          {
            id: 'listing',
            title: 'Listing',
            type: 'item',
            icon: 'list',
            url: 'main/dashboards/listing'
          },
          {
            id: 'real-estate',
            title: 'Real Estate',
            type: 'item',
            icon: 'company',
            url: 'main/dashboards/real-estate'
          },
          {
            id: 'crypto',
            title: 'Crypto',
            type: 'item',
            icon: 'crypto',
            url: 'main/dashboards/crypto'
          },
          {
            id: 'crm',
            title: 'CRM',
            type: 'item',
            icon: 'crm',
            url: 'main/dashboards/crm'
          }
        ]
      },
      {
        id: 'menu-apps',
        title: 'Apps',
        translate: 'NAV.APPS',
        type: 'collapse',
        icon: '',
        children: [
          {
            id: 'menu-task-manager',
            title: 'Task App',
            translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'task-manager',
            url: 'apps/task-manager'
          },
          {
            id: 'menu-mail-app',
            title: 'Mail App',
            translate: 'NAV.PREBUILT_APPS.MAIL_APP',
            type: 'item',
            icon: 'mail',
            url: 'apps/mail'
          },
          {
            id: 'menu-contacts-app',
            title: 'Contacts App',
            translate: 'NAV.PREBUILT_APPS.CONTACTS_APP',
            type: 'item',
            icon: 'contacts-app',
            url: 'apps/contacts'
          },
          {
            id: 'menu-chat-app',
            title: 'Chat App',
            translate: 'NAV.PREBUILT_APPS.CHAT_APP',
            type: 'item',
            icon: 'chat-app2',
            url: 'apps/chat'
          },
          {
            id: 'menu-wall-app',
            title: 'Wall App',
            translate: 'NAV.PREBUILT_APPS.WALL_APP',
            type: 'item',
            icon: 'wall',
            url: 'pages/wall'
          },
          {
            id: 'menu-profile-app',
            title: 'Profile App',
            translate: 'NAV.PREBUILT_APPS.PROFILE_APP',
            type: 'item',
            icon: 'profilepage',
            url: 'pages/profile'
          }
        ]
      },
      {
        id: 'menu-components',
        title: 'Components',
        translate: 'NAV.COMPONENTS.TITLE',
        type: 'collapse',
        icon: '',
        children: [
          {
            id: 'menu-general',
            title: 'General',
            translate: 'NAV.COMPONENTS.GENERAL',
            type: 'collapse',
            icon: 'components',
            children: [
              {
                id: 'menu-buttons',
                title: 'Buttons',
                type: 'item',
                icon: 'button',
                url: 'components/basic/buttons'
              },
              {
                id: 'menu-button-group',
                title: 'Button Group',
                type: 'item',
                icon: 'button-group',
                url: 'components/basic/button-group'
              },
              {
                id: 'menu-input-group',
                title: 'Input Group',
                type: 'item',
                icon: 'input-group',
                url: 'components/basic/input-group'
              },
              {
                id: 'menu-typography',
                title: 'Typography',
                type: 'item',
                icon: 'typography',
                url: 'components/basic/typography'
              }
            ]
          },
          {
            id: 'menu-navigation',
            title: 'Navigation',
            translate: 'NAV.COMPONENTS.NAVIGATION',
            type: 'collapse',
            icon: 'components',
            children: [
              {
                id: 'menu-breadcrumb',
                title: 'Breadcrumb',
                type: 'item',
                icon: 'breadcrumbs',
                url: 'components/basic/breadcrumb'
              },
              {
                id: 'menu-dropdown',
                title: 'Dropdown',
                type: 'item',
                icon: 'dropdown',
                url: 'components/basic/dropdown'
              },
              {
                id: 'menu-navbar',
                title: 'Navbar',
                type: 'item',
                icon: 'navbar',
                url: 'components/basic/navbar'
              },
              {
                id: 'menu-navs-and-tabs',
                title: 'Navs & Tabs',
                type: 'item',
                icon: 'navs-and-tabs',
                url: 'components/basic/tabs'
              },
              {
                id: 'menu-pagination',
                title: 'Pagination',
                type: 'item',
                icon: 'pagination',
                url: 'components/basic/pagination'
              }
            ]
          },
          {
            id: 'menu-data-display',
            title: 'Data Display',
            translate: 'NAV.COMPONENTS.DATA_DISPLAY',
            type: 'collapse',
            icon: 'components',
            children: [
              {
                id: 'menu-cards',
                title: 'Cards',
                type: 'item',
                icon: 'card',
                url: 'components/basic/card'
              },
              {
                id: 'menu-card-group',
                title: 'Card Group',
                type: 'item',
                icon: 'card-group',
                url: 'components/basic/card-group'
              },
              {
                id: 'menu-carousel',
                title: 'Carousel',
                type: 'item',
                icon: 'carousel',
                url: 'components/basic/carousel'
              },
              {
                id: 'menu-collapse',
                title: 'Collapse',
                type: 'item',
                icon: 'collapse',
                url: 'components/basic/collapse'
              },
              {
                id: 'menu-jumbotron',
                title: 'Jumbotron',
                type: 'item',
                icon: 'jumbotron',
                url: 'components/basic/jumbotron'
              },
              {
                id: 'menu-list-group',
                title: 'List Group',
                type: 'item',
                icon: 'list-group',
                url: 'components/basic/list-group'
              },
              {
                id: 'menu-tooltip',
                title: 'Tooltip',
                type: 'item',
                icon: 'tooltip',
                url: 'components/basic/tooltip'
              }
            ]
          },
          {
            id: 'menu-feedback',
            title: 'Feedback',
            translate: 'NAV.COMPONENTS.FEEDBACK',
            type: 'collapse',
            icon: 'components',
            children: [
              {
                id: 'menu-alerts',
                title: 'Alerts',
                type: 'item',
                icon: 'alert',
                url: 'components/basic/alert'
              },
              {
                id: 'menu-badges',
                title: 'Badges',
                type: 'item',
                icon: 'badges',
                url: 'components/basic/badge'
              },
              {
                id: 'menu-modal',
                title: 'Modal',
                type: 'item',
                icon: 'modal',
                url: 'components/basic/modal'
              },
              {
                id: 'menu-popover',
                title: 'Popover',
                type: 'item',
                icon: 'popovers',
                url: 'components/basic/popover'
              },
              {
                id: 'menu-progressbar',
                title: 'Progressbar',
                type: 'item',
                icon: 'progress-bar',
                url: 'components/basic/progressbar'
              }
            ]
          },
          {
            id: 'menu-tables',
            title: 'Tables',
            translate: 'NAV.COMPONENTS.TABLES',
            type: 'collapse',
            icon: 'components',
            children: [
              {
                id: 'menu-base-table',
                title: 'Base Table',
                type: 'item',
                icon: 'tables',
                url: 'components/tables/base-table'
              },
              {
                id: 'menu-data-table',
                title: 'Data Table',
                type: 'item',
                icon: 'datatable',
                url: 'components/tables/data-table'
              }
            ]
          },
          {
            id: 'menu-forms',
            title: 'Forms',
            translate: 'NAV.FORMS.TITLE',
            type: 'collapse',
            icon: 'components',
            children: [
              {
                id: 'menu-basic-form',
                title: 'Basic Form',
                translate: 'NAV.FORMS.BASIC_FORM',
                type: 'item',
                icon: 'forms-basic',
                url: 'forms/basic-form'
              },
              {
                id: 'menu-file-upload',
                title: 'File Upload',
                translate: 'NAV.FORMS.FILE_UPLOAD',
                type: 'item',
                icon: 'file-upload',
                url: 'forms/file-upload'
              }
            ]
          },
          {
            id: 'menu-extras',
            title: 'Extras',
            translate: 'NAV.EXTRA',
            type: 'collapse',
            icon: 'components',
            children: [
              {
                id: 'menu-editors',
                title: 'Editors',
                translate: 'NAV.EXTRA_COMPONENTS.EDITORS',
                type: 'collapse',
                icon: 'editors',
                children: [
                  {
                    id: 'menu-ckeditor',
                    title: 'Ckeditor',
                    type: 'item',
                    icon: 'editor-ck',
                    url: 'extra-components/editors/ckeditor'
                  },
                  {
                    id: 'menu-quill',
                    title: 'Quill',
                    type: 'item',
                    icon: 'editor-quill',
                    url: 'extra-components/editors/quill'
                  }
                ]
              },
              {
                id: 'menu-pickers',
                title: 'Pickers',
                translate: 'NAV.EXTRA_COMPONENTS.PICKERS',
                type: 'collapse',
                icon: 'pickers',
                children: [
                  {
                    id: 'menu-color-picker',
                    title: 'Color Pickers',
                    type: 'item',
                    icon: 'color-picker',
                    url: 'extra-components/pickers/color-picker'
                  },
                  {
                    id: 'menu-color-picker-adv',
                    title: 'Adv Color Pickers',
                    type: 'item',
                    icon: 'color-picker',
                    url: 'extra-components/pickers/color-picker-adv'
                  }
                ]
              },
              {
                id: 'menu-sweet-alerts',
                title: 'Sweet Alerts',
                translate: 'NAV.EXTRA_COMPONENTS.SWEET_ALERTS',
                type: 'item',
                icon: 'sweet-alert',
                url: 'extra-components/sweet-alerts'
              },
              {
                id: 'menu-notifications',
                title: 'Notifications',
                translate: 'NAV.EXTRA_COMPONENTS.NOTIFICATIONS',
                type: 'item',
                icon: 'notification-o',
                url: 'extra-components/notifications'
              }
            ]
          }
        ]
      },
      {
        id: 'menu-more',
        title: 'More',
        translate: 'NAV.MORE',
        type: 'collapse',
        icon: '',
        children: [
          {
            id: 'menu-widgets',
            title: 'Widgets',
            translate: 'NAV.MAIN.WIDGETS',
            type: 'collapse',
            icon: 'widgets',
            children: [
              {
                id: 'menu-classic-widgets',
                title: 'Classic',
                type: 'item',
                icon: 'components',
                url: 'main/widgets/classic'
              },
              {
                id: 'menu-modern-widgets',
                title: 'Modern',
                type: 'item',
                icon: 'datatable',
                url: 'main/widgets/modern'
              }
            ]
          },
          {
            id: 'menu-metrics',
            title: 'Metrics',
            translate: 'NAV.MAIN.METRICS',
            type: 'item',
            icon: 'metrics',
            url: 'main/metrics'
          },
          {
            id: 'menu-pages',
            title: 'Pages',
            translate: 'NAV.PAGES.TITLE',
            type: 'collapse',
            icon: 'blankpage',
            children: [
              {
                id: 'menu-login-page',
                title: 'Login Page',
                translate: 'NAV.PAGES.LOGIN_PAGE',
                type: 'item',
                icon: 'login-page',
                url: '/frontend/auth/signin'
              },
              {
                id: 'menu-sign-up-page',
                title: 'Sign Up Page',
                translate: 'NAV.PAGES.SIGN_UP_PAGE',
                type: 'item',
                icon: 'signup-page',
                url: '/frontend/auth/signup'
              },
              {
                id: 'menu-forgot-password',
                title: 'Forgot Password',
                translate: 'NAV.PAGES.FORGOT_PASSWORD',
                type: 'item',
                icon: 'forgot-pass',
                url: '/frontend/auth/forgot-password'
              },
              {
                id: 'menu-lock-screen-page',
                title: 'Lock Screen',
                translate: 'NAV.PAGES.LOCK_SCREEN_PAGE',
                type: 'item',
                icon: 'lockscreen',
                url: '/frontend/pages/lock-screen'
              },
              {
                id: 'menu-blank-page',
                title: 'Blank Page',
                translate: 'NAV.PAGES.BLANK_PAGE',
                type: 'item',
                icon: 'blankpage',
                url: 'pages/blank'
              },
              {
                id: 'menu-search-page',
                title: 'Search Page',
                translate: 'NAV.PAGES.SEARCH_PAGE',
                type: 'item',
                icon: 'searchpage',
                url: 'pages/search'
              },
              {
                id: 'menu-error-404',
                title: 'Error 404',
                translate: 'NAV.PAGES.ERROR_404',
                type: 'item',
                icon: 'error-404',
                url: '/frontend/error/404'
              },
              {
                id: 'menu-error-500',
                title: 'Error 500',
                translate: 'NAV.PAGES.ERROR_500',
                type: 'item',
                icon: 'error-500',
                url: '/frontend/error/500'
              }
            ]
          },
          {
            id: 'menu-grid',
            title: 'Grid',
            translate: 'NAV.EXTRA_VIEWS.GRID',
            type: 'collapse',
            icon: 'grid',
            children: [
              {
                id: 'menu-basic-grid',
                title: 'Basic Grid',
                type: 'item',
                icon: 'grid',
                url: 'extra-views/grid-view/basic'
              },
              {
                id: 'menu-advanced-grid',
                title: 'Advanced Grid',
                type: 'item',
                icon: 'grid-advance',
                url: 'extra-views/grid-view/advanced'
              }
            ]
          },
          {
            id: 'menu-list',
            title: 'List',
            translate: 'NAV.EXTRA_VIEWS.LIST',
            type: 'collapse',
            icon: 'list',
            children: [
              {
                id: 'menu-basic-list',
                title: 'Basic List',
                type: 'item',
                icon: 'list',
                url: 'extra-views/list-view/basic'
              },
              {
                id: 'menu-advanced-list',
                title: 'Advanced List',
                type: 'item',
                icon: 'list-advance',
                url: 'extra-views/list-view/advanced'
              }
            ]
          },
          {
            id: 'menu-charts',
            title: 'Charts',
            translate: 'NAV.DATA_VISUALIZATION.CHARTS',
            type: 'collapse',
            icon: 'charts',
            children: [
              {
                id: 'menu-chartjs-chart',
                title: 'ChartJs',
                type: 'item',
                icon: 'charts',
                url: 'visualization/charts/chartjs'
              },
              {
                id: 'menu-am-chart',
                title: 'AmCharts',
                type: 'item',
                icon: 'amchart',
                url: 'visualization/charts/amcharts'
              }
            ]
          },
          {
            id: 'menu-maps',
            title: 'Maps',
            translate: 'NAV.DATA_VISUALIZATION.MAPS',
            type: 'collapse',
            icon: 'maps',
            children: [
              {
                id: 'menu-google-map',
                title: 'Google',
                type: 'item',
                icon: 'maps',
                url: 'visualization/maps/google'
              },
              {
                id: 'menu-vector-map',
                title: 'Vector',
                type: 'item',
                icon: 'maps',
                url: 'visualization/maps/vector'
              }
            ]
          }
        ]
      }
    ];
  }
}
