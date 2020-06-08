import { NavigationModelInterface } from '@gaxon/components';

export class NavigationModel implements NavigationModelInterface {
  public navigation: any[];

  constructor() {
    this.navigation = [
      {
        id: 'main',
        title: 'Main',
        translate: 'NAV.MAIN.TITLE',
        type: 'group',
        icon: 'home',
        children: [
          {
            id: 'home',
            title: 'Dashboard Overview',
            // translate: 'NAV.MAIN.LAYOUTS',
            type: 'item',
            icon: 'dashboard',
            url: 'main/dashboards/crm'
          },
          {
            id: 'dashboards',
            title: 'Dashboards',
            translate: 'NAV.MAIN.DASHBOARDS',
            type: 'collapse',
            icon: 'dashboard',
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
              // {
              //   id: 'crm',
              //   title: 'CRM',
              //   type: 'item',
              //   icon: 'crm',
              //   url: 'main/dashboards/crm'
              // }
            ]
          },
          // {
          //   id: 'widgets',
          //   title: 'Widgets',
          //   translate: 'NAV.MAIN.WIDGETS',
          //   type: 'collapse',
          //   icon: 'widgets',
          //   children: [
          //     {
          //       id: 'classic-widgets',
          //       title: 'Classic',
          //       type: 'item',
          //       icon: 'components',
          //       url: 'main/widgets/classic'
          //     },
          //     {
          //       id: 'modern-widgets',
          //       title: 'Modern',
          //       type: 'item',
          //       icon: 'datatable',
          //       url: 'main/widgets/modern'
          //     }
          //   ]
          // },
          // {
          //   id: 'metrics',
          //   title: 'Metrics',
          //   translate: 'NAV.MAIN.METRICS',
          //   type: 'item',
          //   icon: 'metrics',
          //   url: 'main/metrics'
          // },
          // {
          //   id: 'layouts',
          //   title: 'Layouts',
          //   translate: 'NAV.MAIN.LAYOUTS',
          //   type: 'item',
          //   icon: 'layout',
          //   url: 'page/layouts'
          // }
        ]
      },

      //CCTV Security
      {
        id: 'security',
        title: 'Smart Security',
        // translate: 'NAV.ENVIRONMENT.TITLE',
        type: 'group',
        icon: 'donut',
        children: [
          {
            id: 'cctv-video-feed',
            title: 'CCTV Video Feed',
            // translate: 'NAV.MAIN.WIDGETS',
            type: 'collapse',
            icon: 'camera',
            children: [
              {
                id: 'cctv-dbkl',
                title: 'CCTV DBKL',
                type: 'item',
                icon: 'button',
                url: '/home'
              },
              {
                id: 'cctv-mbmb',
                title: 'CCTV MBMB',
                type: 'item',
                icon: 'button',
                url: '/home'
              },
              {
                id: 'cctv-mbks',
                title: 'CCTV MBKS',
                type: 'item',
                icon: 'button',
                url: '/home'
              }
            ]
          },
          {
            id: 'cctv-analytics',
            title: 'CCTV Integrated',
            // translate: 'NAV.MAIN.WIDGETS',
            type: 'collapse',
            icon: 'chart-line',
            children: [
              {
                id: 'object-counting',
                title: 'Object Counting',
                type: 'item',
                icon: 'chatbull',
                url: '/home'
              },
              {
                id: 'congestion-analysis',
                title: 'Congestion Analysis',
                type: 'item',
                icon: 'carousel',
                url: '/home'
              },
              {
                id: 'social-distancing',
                title: 'Social Distancing',
                type: 'item',
                icon: 'breadcrumbs',
                url: '/home'
              }
            ]
          },
          {
            id: 'security-performance',
            title: 'Performance',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'chart-scatter',
            url: '/home'
          }
        ]
      },

      // Smart Govt
      {
        id: 'govt',
        title: 'Smart Government',
        // translate: 'NAV.ENVIRONMENT.TITLE',
        type: 'group',
        icon: 'donut',
        children: [

          {
            id: 'inter-department',
            title: 'Inter-Department Integration',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'crm',
            url: '/home'
          },
          {
            id: 'performance',
            title: 'Performance',
            // translate: 'NAV.MAIN.WIDGETS',
            type: 'collapse',
            icon: 'dashboard3',
            children: [
              {
                id: 'happiness-index',
                title: 'Happiness Index',
                type: 'item',
                icon: 'customer',
                url: '/home'
              },
              {
                id: 'complaints',
                title: 'Complaints',
                type: 'item',
                icon: 'chat-app',
                url: '/home'
              }
            ]
          }
        ]
      },

      // Smart Citizen
      {
        id: 'citizen',
        title: 'Smart Citizens',
        // translate: 'NAV.ENVIRONMENT.TITLE',
        type: 'group',
        icon: 'donut',
        children: [

          {
            id: 'helpdesk',
            title: 'Help Desk',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'chat-app2',
            url: '/home'
          },
          {
            id: 'digital-tv',
            title: 'Digital TV',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'desktop',
            url: '/home'
          },
          {
            id: 'social-media',
            title: 'Social Media',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'facebook-box',
            url: '/home'
          },
        ]
      },

      // Smart Infrastructure
      {
        id: 'infrastructure',
        title: 'Smart Infrastructure',
        // translate: 'NAV.ENVIRONMENT.TITLE',
        type: 'group',
        icon: 'donut',
        children: [

          {
            id: 'iot-infra',
            title: 'IoT Infrastructure',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'basic-components',
            url: '/home'
          },
          {
            id: 'sattelite-comm',
            title: 'Sattelite Communication',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'flexile',
            url: '/home'
          },
        ]
      },

      // Smart Waste
      {
        id: 'waste',
        title: 'Smart Waste',
        // translate: 'NAV.ENVIRONMENT.TITLE',
        type: 'group',
        icon: 'donut',
        children: [

          {
            id: 'upstream-collection',
            title: 'Upstream Collection',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'profit',
            url: '/home'
          },
          {
            id: 'downstream-collection',
            title: 'Downstream Collection',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'growth',
            url: '/home'
          },
        ]
      },

      // Smart Mobility
      {
        id: 'mobility',
        title: 'Smart Mobility',
        // translate: 'NAV.ENVIRONMENT.TITLE',
        type: 'group',
        icon: 'donut',
        children: [

          {
            id: 'car',
            title: 'Car',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'star-half',
            url: '/home'
          },
          {
            id: 'bus',
            title: 'Bus',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'star-half-fill',
            url: '/home'
          },
          {
            id: 'rail',
            title: 'Rail',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'star-fill',
            url: '/home'
          },
        ]
      },

      // Smart Environment
      {
        id: 'environment',
        title: 'Smart Environment',
        // translate: 'NAV.ENVIRONMENT.TITLE',
        type: 'group',
        icon: 'donut',
        children: [
          {
            id: 'air-quality',
            title: 'Air Quality',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'send',
            url: '/home'
          },
          {
            id: 'humidity',
            title: 'Humidity',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'badges',
            url: '/home'
          },
          {
            id: 'rainfall',
            title: 'Rainfall',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'family',
            url: '/home'
          },
          {
            id: 'water-level',
            title: 'Water Level',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'horizontal-more',
            url: '/home'
          },
          {
            id: 'ghg-emissions',
            title: 'GHG Emissions',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'intermediate',
            url: '/home'
          },
          {
            id: 'disaster-mgmt',
            title: 'Disaster Mgmt',
            // translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
            type: 'item',
            icon: 'chart-composed',
            url: '/home'
          },
        ]
      },

      // Smart Lighting
      {
        id: 'lighting',
        title: 'Smart Lighting',
        // translate: 'NAV.ENVIRONMENT.TITLE',
        type: 'group',
        icon: 'donut',
        children: [

        ]
      },













      // {
      //   id: 'prebuilt-apps',
      //   title: 'Pre-built Apps',
      //   translate: 'NAV.PREBUILT_APPS.TITLE',
      //   type: 'group',
      //   icon: 'apps',
      //   children: [
      //     {
      //       id: 'task-manager',
      //       title: 'Task Manager',
      //       translate: 'NAV.PREBUILT_APPS.TASK_MANAGER',
      //       type: 'item',
      //       icon: 'task-manager',
      //       url: 'apps/task-manager'
      //     },
      //     {
      //       id: 'mail-app',
      //       title: 'Mail Application',
      //       translate: 'NAV.PREBUILT_APPS.MAIL_APP',
      //       type: 'item',
      //       icon: 'mail',
      //       url: 'apps/mail'
      //     },
      //     {
      //       id: 'contacts-app',
      //       title: 'Contacts Application',
      //       translate: 'NAV.PREBUILT_APPS.CONTACTS_APP',
      //       type: 'item',
      //       icon: 'contacts-app',
      //       url: 'apps/contacts'
      //     },
      //     {
      //       id: 'chat-app',
      //       title: 'Chat Application',
      //       translate: 'NAV.PREBUILT_APPS.CHAT_APP',
      //       type: 'item',
      //       icon: 'chat-app2',
      //       url: 'apps/chat'
      //     }
      //   ]
      // },
      // {
      //   id: 'components',
      //   title: 'Components',
      //   translate: 'NAV.COMPONENTS.TITLE',
      //   type: 'group',
      //   icon: 'components',
      //   children: [
      //     {
      //       id: 'basic-components',
      //       title: 'Basic Components',
      //       translate: 'NAV.COMPONENTS.BASIC',
      //       type: 'collapse',
      //       icon: 'basic-components',
      //       children: [
      //         {
      //           id: 'accordion',
      //           title: 'Accordion',
      //           type: 'item',
      //           icon: 'collapse',
      //           url: 'components/basic/accordion'
      //         },
      //         {
      //           id: 'alerts',
      //           title: 'Alerts',
      //           type: 'item',
      //           icon: 'alert',
      //           url: 'components/basic/alert'
      //         },
      //         {
      //           id: 'badges',
      //           title: 'Badges',
      //           type: 'item',
      //           icon: 'badges',
      //           url: 'components/basic/badge'
      //         },
      //         {
      //           id: 'breadcrumb',
      //           title: 'Breadcrumb',
      //           type: 'item',
      //           icon: 'breadcrumbs',
      //           url: 'components/basic/breadcrumb'
      //         },
      //         {
      //           id: 'buttons',
      //           title: 'Buttons',
      //           type: 'item',
      //           icon: 'button',
      //           url: 'components/basic/buttons'
      //         },
      //         {
      //           id: 'button-group',
      //           title: 'Button Group',
      //           type: 'item',
      //           icon: 'button-group',
      //           url: 'components/basic/button-group'
      //         },
      //         {
      //           id: 'cards',
      //           title: 'Cards',
      //           type: 'item',
      //           icon: 'card',
      //           url: 'components/basic/card'
      //         },
      //         {
      //           id: 'card-group',
      //           title: 'Card Group',
      //           type: 'item',
      //           icon: 'card-group',
      //           url: 'components/basic/card-group'
      //         },
      //         {
      //           id: 'carousel',
      //           title: 'Carousel',
      //           type: 'item',
      //           icon: 'carousel',
      //           url: 'components/basic/carousel'
      //         },
      //         {
      //           id: 'collapse',
      //           title: 'Collapse',
      //           type: 'item',
      //           icon: 'collapse',
      //           url: 'components/basic/collapse'
      //         },
      //         {
      //           id: 'datepicker',
      //           title: 'Datepicker',
      //           type: 'item',
      //           icon: 'date-time-picker',
      //           url: 'components/basic/datepicker'
      //         },
      //         {
      //           id: 'dropdown',
      //           title: 'Dropdown',
      //           type: 'item',
      //           icon: 'dropdown',
      //           url: 'components/basic/dropdown'
      //         },
      //         {
      //           id: 'input-group',
      //           title: 'Input Group',
      //           type: 'item',
      //           icon: 'input-group',
      //           url: 'components/basic/input-group'
      //         },
      //         {
      //           id: 'jumbotron',
      //           title: 'Jumbotron',
      //           type: 'item',
      //           icon: 'jumbotron',
      //           url: 'components/basic/jumbotron'
      //         },
      //         {
      //           id: 'list-group',
      //           title: 'List Group',
      //           type: 'item',
      //           icon: 'list-group',
      //           url: 'components/basic/list-group'
      //         },
      //         {
      //           id: 'modal',
      //           title: 'Modal',
      //           type: 'item',
      //           icon: 'modal',
      //           url: 'components/basic/modal'
      //         },
      //         {
      //           id: 'navbar',
      //           title: 'Navbar',
      //           type: 'item',
      //           icon: 'navbar',
      //           url: 'components/basic/navbar'
      //         },
      //         {
      //           id: 'navs-and-tabs',
      //           title: 'Navs & Tabs',
      //           type: 'item',
      //           icon: 'navs-and-tabs',
      //           url: 'components/basic/tabs'
      //         },
      //         {
      //           id: 'pagination',
      //           title: 'Pagination',
      //           type: 'item',
      //           icon: 'pagination',
      //           url: 'components/basic/pagination'
      //         },
      //         {
      //           id: 'popover',
      //           title: 'Popover',
      //           type: 'item',
      //           icon: 'popovers',
      //           url: 'components/basic/popover'
      //         },
      //         {
      //           id: 'progressbar',
      //           title: 'Progressbar',
      //           type: 'item',
      //           icon: 'progress-bar',
      //           url: 'components/basic/progressbar'
      //         },
      //         {
      //           id: 'rating',
      //           title: 'Rating',
      //           type: 'item',
      //           icon: 'star-o',
      //           url: 'components/basic/rating'
      //         },
      //         {
      //           id: 'timepicker',
      //           title: 'Timepicker',
      //           type: 'item',
      //           icon: 'date-time-picker',
      //           url: 'components/basic/timepicker'
      //         },
      //         {
      //           id: 'tooltip',
      //           title: 'Tooltip',
      //           type: 'item',
      //           icon: 'tooltip',
      //           url: 'components/basic/tooltip'
      //         },
      //         {
      //           id: 'typeahead',
      //           title: 'Typeahead',
      //           type: 'item',
      //           icon: 'list-group',
      //           url: 'components/basic/typeahead'
      //         },
      //         {
      //           id: 'typography',
      //           title: 'Typography',
      //           type: 'item',
      //           icon: 'typography',
      //           url: 'components/basic/typography'
      //         }
      //       ]
      //     },
      //     {
      //       id: 'tables',
      //       title: 'Tables',
      //       translate: 'NAV.COMPONENTS.TABLES',
      //       type: 'collapse',
      //       icon: 'tables',
      //       children: [
      //         {
      //           id: 'base-table',
      //           title: 'Base Table',
      //           type: 'item',
      //           icon: 'tables',
      //           url: 'components/tables/base-table'
      //         },
      //         {
      //           id: 'data-table',
      //           title: 'Data Table',
      //           type: 'item',
      //           icon: 'datatable',
      //           url: 'components/tables/data-table'
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   id: 'forms',
      //   title: 'Forms',
      //   translate: 'NAV.FORMS.TITLE',
      //   type: 'group',
      //   icon: 'forms',
      //   children: [
      //     {
      //       id: 'basic-form',
      //       title: 'Basic Form',
      //       translate: 'NAV.FORMS.BASIC_FORM',
      //       type: 'item',
      //       icon: 'forms-basic',
      //       url: 'forms/basic-form'
      //     },
      //     {
      //       id: 'file-upload',
      //       title: 'File Upload',
      //       translate: 'NAV.FORMS.FILE_UPLOAD',
      //       type: 'item',
      //       icon: 'file-upload',
      //       url: 'forms/file-upload'
      //     }
      //   ]
      // },
      // {
      //   id: 'extra-components',
      //   title: 'Extra Components',
      //   translate: 'NAV.EXTRA_COMPONENTS.TITLE',
      //   type: 'group',
      //   icon: 'extra-components',
      //   children: [
      //     {
      //       id: 'editors',
      //       title: 'Editors',
      //       translate: 'NAV.EXTRA_COMPONENTS.EDITORS',
      //       type: 'collapse',
      //       icon: 'editors',
      //       children: [
      //         {
      //           id: 'ckeditor',
      //           title: 'Ckeditor',
      //           type: 'item',
      //           icon: 'editor-ck',
      //           url: 'extra-components/editors/ckeditor'
      //         },
      //         {
      //           id: 'quill',
      //           title: 'Quill',
      //           type: 'item',
      //           icon: 'editor-quill',
      //           url: 'extra-components/editors/quill'
      //         }
      //       ]
      //     },
      //     {
      //       id: 'pickers',
      //       title: 'Pickers',
      //       translate: 'NAV.EXTRA_COMPONENTS.PICKERS',
      //       type: 'collapse',
      //       icon: 'pickers',
      //       children: [
      //         {
      //           id: 'color-picker',
      //           title: 'Color Pickers',
      //           type: 'item',
      //           icon: 'color-picker',
      //           url: 'extra-components/pickers/color-picker'
      //         },
      //         {
      //           id: 'color-picker-adv',
      //           title: 'Adv Color Pickers',
      //           type: 'item',
      //           icon: 'color-picker',
      //           url: 'extra-components/pickers/color-picker-adv'
      //         }/*,
      //         {
      //           id: 'datetime-pickers',
      //           title: 'Datetime Pickers',
      //           type: 'item',
      //           icon: 'date-time-picker',
      //           url: 'extra-components/pickers/datetime-pickers'
      //         }*/
      //       ]
      //     },
      //     {
      //       id: 'sweet-alerts',
      //       title: 'Sweet Alerts',
      //       translate: 'NAV.EXTRA_COMPONENTS.SWEET_ALERTS',
      //       type: 'item',
      //       icon: 'sweet-alert',
      //       url: 'extra-components/sweet-alerts'
      //     },
      //     {
      //       id: 'notifications',
      //       title: 'Notifications',
      //       translate: 'NAV.EXTRA_COMPONENTS.NOTIFICATIONS',
      //       type: 'item',
      //       icon: 'notification-o',
      //       url: 'extra-components/notifications'
      //     }
      //   ]
      // },
      // {
      //   id: 'data-visualization',
      //   title: 'Data Visualization',
      //   translate: 'NAV.DATA_VISUALIZATION.TITLE',
      //   type: 'group',
      //   icon: 'extension',
      //   children: [
      //     {
      //       id: 'charts',
      //       title: 'Charts',
      //       translate: 'NAV.DATA_VISUALIZATION.CHARTS',
      //       type: 'collapse',
      //       icon: 'charts',
      //       children: [
      //         {
      //           id: 'chartjs-chart',
      //           title: 'ChartJs',
      //           type: 'item',
      //           icon: 'charts',
      //           url: 'visualization/charts/chartjs'
      //         },
      //         {
      //           id: 'am-chart',
      //           title: 'AmCharts',
      //           type: 'item',
      //           icon: 'amchart',
      //           url: 'visualization/charts/amcharts'
      //         }
      //       ]
      //     },
      //     {
      //       id: 'maps',
      //       title: 'Maps',
      //       translate: 'NAV.DATA_VISUALIZATION.MAPS',
      //       type: 'collapse',
      //       icon: 'maps',
      //       children: [
      //         {
      //           id: 'google-map',
      //           title: 'Google',
      //           type: 'item',
      //           icon: 'maps',
      //           url: 'visualization/maps/google'
      //         },
      //         {
      //           id: 'vector-map',
      //           title: 'Vector',
      //           type: 'item',
      //           icon: 'maps',
      //           url: 'visualization/maps/vector'
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   id: 'pages',
      //   title: 'Pages',
      //   translate: 'NAV.PAGES.TITLE',
      //   type: 'group',
      //   icon: 'extension',
      //   children: [
      //     {
      //       id: 'wall-page',
      //       title: 'Wall Page',
      //       translate: 'NAV.PAGES.WALL_PAGE',
      //       type: 'item',
      //       icon: 'wall',
      //       url: 'pages/wall'
      //     },
      //     {
      //       id: 'profile-page',
      //       title: 'Profile Page',
      //       translate: 'NAV.PAGES.PROFILE_PAGE',
      //       type: 'item',
      //       icon: 'profilepage',
      //       url: 'pages/profile'
      //     },
      //     {
      //       id: 'login-page',
      //       title: 'Login Page',
      //       translate: 'NAV.PAGES.LOGIN_PAGE',
      //       type: 'item',
      //       icon: 'login-page',
      //       url: '/frontend/auth/signin'
      //     },
      //     {
      //       id: 'sign-up-page',
      //       title: 'Sign Up Page',
      //       translate: 'NAV.PAGES.SIGN_UP_PAGE',
      //       type: 'item',
      //       icon: 'signup-page',
      //       url: '/frontend/auth/signup'
      //     },
      //     {
      //       id: 'forgot-password',
      //       title: 'Forgot Password',
      //       translate: 'NAV.PAGES.FORGOT_PASSWORD',
      //       type: 'item',
      //       icon: 'forgot-pass',
      //       url: '/frontend/auth/forgot-password'
      //     },
      //     {
      //       id: 'lock-screen-page',
      //       title: 'Lock Screen',
      //       translate: 'NAV.PAGES.LOCK_SCREEN_PAGE',
      //       type: 'item',
      //       icon: 'lockscreen',
      //       url: '/frontend/pages/lock-screen'
      //     },
      //     {
      //       id: 'blank-page',
      //       title: 'Blank Page',
      //       translate: 'NAV.PAGES.BLANK_PAGE',
      //       type: 'item',
      //       icon: 'blankpage',
      //       url: 'pages/blank'
      //     },
      //     {
      //       id: 'search-page',
      //       title: 'Search Page',
      //       translate: 'NAV.PAGES.SEARCH_PAGE',
      //       type: 'item',
      //       icon: 'searchpage',
      //       url: 'pages/search'
      //     },
      //     {
      //       id: 'error-404',
      //       title: 'Error 404',
      //       translate: 'NAV.PAGES.ERROR_404',
      //       type: 'item',
      //       icon: 'error-404',
      //       url: '/frontend/error/404'
      //     },
      //     {
      //       id: 'error-500',
      //       title: 'Error 500',
      //       translate: 'NAV.PAGES.ERROR_500',
      //       type: 'item',
      //       icon: 'error-500',
      //       url: '/frontend/error/500'
      //     }
      //   ]
      // },
      // {
      //   id: 'extra-views',
      //   title: 'Extra Views',
      //   translate: 'NAV.EXTRA_VIEWS.TITLE',
      //   type: 'group',
      //   icon: 'extra-views',
      //   children: [
      //     {
      //       id: 'grid',
      //       title: 'Grid',
      //       translate: 'NAV.EXTRA_VIEWS.GRID',
      //       type: 'collapse',
      //       icon: 'grid',
      //       children: [
      //         {
      //           id: 'basic-grid',
      //           title: 'Basic Grid',
      //           type: 'item',
      //           icon: 'grid',
      //           url: 'extra-views/grid-view/basic'
      //         },
      //         {
      //           id: 'advanced-grid',
      //           title: 'Advanced Grid',
      //           type: 'item',
      //           icon: 'grid-advance',
      //           url: 'extra-views/grid-view/advanced'
      //         }
      //       ]
      //     },
      //     {
      //       id: 'list',
      //       title: 'List',
      //       translate: 'NAV.EXTRA_VIEWS.LIST',
      //       type: 'collapse',
      //       icon: 'list',
      //       children: [
      //         {
      //           id: 'basic-list',
      //           title: 'Basic List',
      //           type: 'item',
      //           icon: 'list',
      //           url: 'extra-views/list-view/basic'
      //         },
      //         {
      //           id: 'advanced-list',
      //           title: 'Advanced List',
      //           type: 'item',
      //           icon: 'list-advance',
      //           url: 'extra-views/list-view/advanced'
      //         }
      //       ]
      //     }
      //   ]
      // }
    ];
  }
}
