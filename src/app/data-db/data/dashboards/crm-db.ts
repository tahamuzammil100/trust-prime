export class CrmDb {
  public static widgets = {
    revenue: {
      badge: {
        name: 'Crime Reports',
        color: 'badge-secondary'
      },
      icon: {
        name: 'alert'
      },
      items: [
        {
          value: '25,890',
          text: 'current week'
        }
      ]
    },
    order: {
      badge: {
        name: 'Citizen Issues',
        color: 'badge-primary'
      },
      icon: {
        name: 'oarchive'
      },
      items: [
        {
          value: '390',
          text: 'complaints current month'
        }
      ]
    },
    invoices: {
      badge: {
        name: 'Traffic Weekly Analysis',
        color: 'badge-primary'
      },
      icon: {
        name: 'breadcrumbs'
      },
      items: [
        {
          value: '294,890',
          text: 'Vehicles'
        },
        {
          value: '192,710',
          text: 'Cars & LTV',
          tooltip: {
            value: '65.3%',
            color: 'bg-success'
          }
        },
        {
          value: '69,209',
          text: 'Buses & Public Transport',
          tooltip: {
            value: '23.5%',
            color: 'bg-warning'
          }
        },
        {
          value: '32,917',
          text: 'Trucks & HTV',
          tooltip: {
            value: '11.2%',
            color: 'bg-danger'
          }
        }
      ]
    },
    reportCards: [
      {
        title: 'Top Crimes  | current month',
        cardData: {
          value: '2,302',
          content: 'Police Reports',
          items: [
            {
              title: '512 Motorbike Theft',
              dotColor: 'bg-light-blue'
            },
            {
              title: '310 Car Theft',
              dotColor: 'bg-light-green'
            },
            {
              title: '213 Violance',
              dotColor: 'bg-light-pink'
            },
            {
              title: '1267 Others',
              dotColor: 'bg-light'
            }
          ]
        },
        chart: {
          chartType: 'doughnut',
          options: {
            centerText: 2302,
            height: 110,
            width: 110,
            cutoutPercentage: 90,
            responsive: false
          },
          labels: ['Motorbike Theft', 'Car Theft', 'Violance', 'Others'],
          datasets: [
            {
              data: [512, 310, 213, 1267]
            }
          ],
          colors: [
            {
              backgroundColor: [
                'rgba(87, 151, 252, 0.8)',
                'rgba(78, 204, 72, 0.8)',
                'rgba(255, 68, 93, 0.8)',
                'rgba(207, 207, 207, 0.8)'
              ]
            }
          ]
        }
      },
      {
        title: 'Traffic Incidents  | current month',
        cardData: {
          value: '12,942',
          content: 'Accidents Reported',
          items: [
            {
              title: '6,209 Selangor',
              dotColor: 'bg-light-blue'
            },
            {
              title: '4,912 Kuala Lumpur',
              dotColor: 'bg-light-green'
            },
            {
              title: '930 Negeri Sembilan',
              dotColor: 'bg-light-pink'
            },
            {
              title: '891 Malacca',
              dotColor: 'bg-light'
            }
          ]
        },
        chart: {
          chartType: 'doughnut',
          options: {
            centerText: 100,
            height: 110,
            width: 110,
            cutoutPercentage: 80,
            responsive: false
          },
          labels: ['Selangor', 'Kuala Lumpur', 'Negeri Sembilan', 'Malacca'],
          datasets: [
            {
              data: [47.9, 37.9, 7.1, 7.1]
            }
          ],
          colors: [
            {
              backgroundColor: [
                'rgba(87, 151, 252, 0.8)',
                'rgba(78, 204, 72, 0.8)',
                'rgba(255, 68, 93, 0.8)',
                'rgba(255, 222, 22, 0.8)'
              ]
            }
          ]
        }
      }
    ],



    overview: {
      map: {
        type: 'map',
        theme: 'light',
        projection: 'miller',
        imagesSettings: {
          rollOverColor: '#089282',
          rollOverScale: 3,
          selectedScale: 3,
          selectedColor: '#089282',
          color: '#13564e',
        },
        areasSettings: {
          unlistedAreasColor: '#15A892',
          rollOverColor: '#fff',
          rollOverOutlineColor: '#777'
        },
        dataProvider: {
          map: 'continentsLow',
          'areas': [{
            'id': 'africa',
            'title': 'Africa',
            'pattern': {
              'url': 'https://www.amcharts.com/lib/3/patterns/black/pattern2.png',
              'width': 4,
              'height': 4
            }
          }, {
            'id': 'asia',
            'title': 'Asia',
            'pattern': {
              'url': 'https://www.amcharts.com/lib/3/patterns/black/pattern2.png',
              'width': 4,
              'height': 4
            }
          }, {
            'id': 'australia',
            'title': 'Australia',
            'pattern': {
              'url': 'https://www.amcharts.com/lib/3/patterns/black/pattern2.png',
              'width': 4,
              'height': 4
            }
          }, {
            'id': 'europe',
            'title': 'Europe',
            'pattern': {
              'url': 'https://www.amcharts.com/lib/3/patterns/black/pattern2.png',
              'width': 4,
              'height': 4
            }
          }, {
            'id': 'north_america',
            'title': 'North America',
            'pattern': {
              'url': 'https://www.amcharts.com/lib/3/patterns/black/pattern2.png',
              'width': 4,
              'height': 4
            }
          }, {
            'id': 'south_america',
            'title': 'South America',
            'pattern': {
              'url': 'https://www.amcharts.com/lib/3/patterns/black/pattern2.png',
              'width': 4,
              'height': 4
            }
          }],
          'images': [{
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Moscow',
            'latitude': 55.7558,
            'longitude': 37.6176,
            'dotColor': 'yellow',
            'pulseColor': 'yellow'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Madrid',
            'latitude': 40.4167,
            'longitude': -3.7033,
            'dotColor': 'success',
            'pulseColor': 'success'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'London',
            'latitude': 51.5002,
            'longitude': -0.1262,
            'dotColor': 'yellow',
            'pulseColor': 'yellow'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Peking',
            'latitude': 39.9056,
            'longitude': 116.3958,
            'dotColor': 'danger',
            'pulseColor': 'danger'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'New Delhi',
            'latitude': 28.6353,
            'longitude': 77.2250,
            'dotColor': 'info',
            'pulseColor': 'info'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Tokyo',
            'latitude': 35.6785,
            'longitude': 139.6823,
            'dotColor': 'yellow',
            'pulseColor': 'yellow'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Brasilia',
            'latitude': -15.7801,
            'longitude': -47.9292,
            'dotColor': 'danger',
            'pulseColor': 'danger'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Washington',
            'latitude': 38.8921,
            'longitude': -77.0241,
            'dotColor': '',
            'pulseColor': 'primary'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Kinshasa',
            'latitude': -4.3369,
            'longitude': 15.3271,
            'dotColor': 'info',
            'pulseColor': 'info'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Cairo',
            'latitude': 30.0571,
            'longitude': 31.2272,
            'dotColor': 'yellow',
            'pulseColor': 'yellow'
          }, {
            'zoomLevel': 5,
            'scale': 0.5,
            'title': 'Pretoria',
            'latitude': -25.7463,
            'longitude': 28.1876,
            'dotColor': 'success',
            'pulseColor': 'success'
          }]
        },
        zoomControl: {
          panControlEnabled: false,
          zoomControlEnabled: false,
          homeButtonEnabled: true
        }
      },
      statusReports: [
        {
          label: 'Europe',
          progressBar: {
            fillVal: 55,
            maxVal: 100,
            textColor: '',
            barPosition: 'start',
            barColor: 'bg-info'
          }
        },
        {
          label: 'North America',
          progressBar: {
            fillVal: 40,
            maxVal: 100,
            textColor: '',
            barPosition: 'start',
            barColor: 'bg-success'
          }
        },
        {
          label: 'Japan, South Koria',
          progressBar: {
            fillVal: 20,
            maxVal: 100,
            textColor: '',
            barPosition: 'start',
            barColor: 'bg-yellow'
          }
        },
        {
          label: 'Other',
          progressBar: {
            fillVal: 10,
            maxVal: 100,
            textColor: '',
            barPosition: 'start',
            barColor: 'bg-light'
          }
        }
      ],
      stats: {
        revenue: '12,931,009',
        revenueTitle: 'Tourism Revenues | current month',
        clients: '690k',
        clientsTitle: 'Tourists',
        countries: '07',
        countriesTitle: 'Countries',
      }
    },



    recentTickets: [
      {
        user: {
          name: 'Umme Salma',
          thumb: 'https://via.placeholder.com/150X150',
          color: ''
        },
        message: 'Need to find where I can find face masks.',
        replied: 'replied 3 days ago',
        status: {
          text: 'Normal',
          color: 'badge-success'
        }
      },
      {
        user: {
          name: 'Hafidz Khalid',
          thumb: '',
          color: 'bg-success'
        },
        message: 'Pending Claim for Unemployment - Please help solve.',
        replied: 'replied 2 days ago',
        status: {
          text: 'Critical',
          color: 'badge-danger'
        }
      },
      {
        user: {
          name: 'Dr Wafi',
          thumb: 'https://via.placeholder.com/150X150',
          color: ''
        },
        message: 'The garbage complain in Jln Dutta Sector 2/A.',
        replied: 'replied 3 days ago',
        status: {
          text: 'High',
          color: 'badge-info'
        }
      }
    ],
    ticketsStatus: {
      title: 'Tickets by Status',
      chart: {
        chartType: 'doughnut',
        options: {
          centerText: 36,
          height: 130,
          width: 130,
          cutoutPercentage: 80,
          responsive: false
        },
        labels: ['Sales', 'Technical', 'Account', 'Dispute'],
        datasets: [
          {
            data: [14, 12, 7, 3]
          }
        ],
        colors: [
          {
            backgroundColor: [
              'rgba(87, 151, 252, 0.8)',
              'rgba(78, 204, 72, 0.8)',
              'rgba(255, 222, 22, 0.8)',
              'rgba(255, 68, 93, 0.8)'
            ]
          }
        ]
      }
    },
    departments: [
      {
        name: 'Engineering',
        progressBar: {
          fillVal: 1432,
          maxVal: 1800,
          textColor: '',
          barPosition: 'start',
          barColor: 'bg-primary'
        }
      },
      {
        name: 'Utilities',
        progressBar: {
          fillVal: 1263,
          maxVal: 1800,
          textColor: '',
          barPosition: 'start',
          barColor: 'bg-success'
        }
      },
      {
        name: 'Finance',
        progressBar: {
          fillVal: 798,
          maxVal: 1800,
          textColor: '',
          barPosition: 'start',
          barColor: 'bg-yellow'
        }
      },
      {
        name: 'Others',
        progressBar: {
          fillVal: 348,
          maxVal: 1800,
          textColor: '',
          barPosition: 'start',
          barColor: 'bg-danger'
        }
      }
    ],
    operator: {
      name: 'Fikri Jalil',
      thumb: 'https://firebasestorage.googleapis.com/v0/b/trust-prime.appspot.com/o/fikri.png?alt=media&token=b9610bd5-5135-4dd7-80aa-67dda4cc1f97',
      rating: 4.8,
      description: 'Helped 370 citizens out of 400 assigned with 86% satisfied citizens.',
      ticketsHandled: 400,
      ticketsClosed: 370
    },
    ticketStatus: [
      {
        title: 'Opened',
        type: 'opened'
      },
      {
        title: 'Awaiting Reply',
        type: 'awaiting'
      },
      {
        title: 'Closed',
        type: 'closed'
      }
    ],
    tickets: [
      {
        user: {
          name: 'Umme Salma',
          thumb: 'https://via.placeholder.com/150X150',
          color: ''
        },
        message: 'Need to find where I can find face masks.',
        type: 'open',
        replied: 'replied 3 days ago',
        status: {
          text: 'Normal',
          color: 'badge-success'
        }
      },
      {
        user: {
          name: 'Hafidz Khalid',
          thumb: '',
          color: 'bg-success'
        },
        message: 'Pending Claim for Unemployment - Please help solve.',
        type: 'awaiting',
        replied: 'replied 2 days ago',
        status: {
          text: 'Critical',
          color: 'badge-danger'
        }
      },
      {
        user: {
          name: 'Dr Wafi',
          thumb: 'https://via.placeholder.com/150X150',
          color: ''
        },
        message: 'The garbage complain in Jln Dutta Sector 2/A.',
        type: 'closed',
        replied: 'replied 3 days ago',
        status: {
          text: 'High',
          color: 'badge-info'
        }
      },
      {
        user: {
          name: 'Anis Ramza',
          thumb: 'https://via.placeholder.com/150X150',
          color: ''
        },
        message: 'Discount for Council Tax During MCO',
        type: 'closed',
        replied: 'replied 3 days ago',
        status: {
          text: 'Noraml',
          color: 'badge-success'
        }
      },
      {
        user: {
          name: 'Shaamin Shah',
          thumb: 'https://via.placeholder.com/150X150',
          color: ''
        },
        message: 'Neighbour Violance, disturbances & suspected crime in the neighborhood.',
        type: 'opened',
        replied: 'replied 3 days ago',
        status: {
          text: 'High',
          color: 'badge-info'
        }
      }
    ],


    leads: {
      title: 'Citizen Happiness Index',
      data: {
        desktop: {
          lead: '86',
          data: [250, 180, 200, 350, 230]
        },
        mobile: {
          lead: '89',
          data: [200, 350, 250, 180, 290]
        },
        chart: {
          chartType: 'polarArea',
          options: {
            height: 200,
            width: 200,
            responsive: false,
            layout: {
              padding: 12
            },
            scale: {
              display: false
            }
          },
          labels: ['Satisfied Utilities', 'Less Crime', 'Easy Living', 'Good Governance', 'Others'],
          colors: [
            {
              backgroundColor: [
                'rgba(255, 68, 93, 0.8)',
                'rgba(255, 143, 58, 0.8)',
                'rgba(255, 222, 22, 0.8)',
                'rgba(78, 204, 72, 0.8)',
                'rgba(87, 151, 252, 0.8)'
              ]
            }
          ]
        },
        browsers: [
          {
            title: 'Satisfied Utilities',
            dotColor: 'bg-sky-blue'
          },
          {
            title: 'Less Crime',
            dotColor: 'bg-danger'
          },
          {
            title: 'Easy Living',
            dotColor: 'bg-orange'
          },
          {
            title: 'Good Governance',
            dotColor: 'bg-yellow'
          },
          {
            title: 'Others',
            dotColor: 'bg-success'
          }
        ],
      },
      countries: {
        heading: 'Most Happy States %',
        desc: 'List of States with Happiness Index.',
        data: [
          {
            name: 'Nigeri Sembilan',
            flag: '',
            lead: 89
          },
          {
            name: 'Johor',
            flag: '',
            lead: 81
          },
          {
            name: 'Selangor',
            flag: '',
            lead: 65
          },
          {
            name: 'Sarawak',
            flag: '',
            lead: 62
          },
          {
            name: 'Kuala Lumpur',
            flag: '',
            lead: 59
          }
        ]
      },
      monthlyLead: {
        heading: 'Adverse Ratings',
        desc: 'Bar chart based on monthly Adverse Complaints.',
        chart: {
          chartType: 'bar',
          options: {
            responsive: true,
            legend: {
              display: false
            },
            layout: {
              padding: 0
            },
            scales: {
              xAxes: [{
                gridLines: {
                  display: false
                },
                display: true,
                categoryPercentage: 1.0,
                barPercentage: 0.6
              }],
              yAxes: [{
                display: false
              }]
            }
          },
          labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          datasets: [
            {
              label: '-ve Happiness Index',
              borderWidth: 0,
              data: [10, 15, 8, 13, 10, 14, 5, 13, 11, 8, 13, 5, 0]
            }
          ],
          colors: [
            {
              backgroundColor: '#ff445d'
            }
          ]
        }
      }
    },
    campaigns: [
      {
        title: 'Take Your Card Anywhere',
        leadGain: '97',
        totalLead: '283',
        percentLead: '60%',
        percentColor: 'text-success'
      },
      {
        title: 'Fire Your Fox With Safari',
        leadGain: '83',
        totalLead: '279',
        percentLead: '58%',
        percentColor: 'text-success'
      },
      {
        title: 'Build With Dom',
        leadGain: '03',
        totalLead: '147',
        percentLead: '02%',
        percentColor: 'text-danger'
      },
      {
        title: 'A New Way To Live Life',
        leadGain: '00',
        totalLead: '07',
        percentLead: '00%',
        percentColor: 'text-danger'
      },
      {
        title: 'Fire Your Fox With Safari',
        leadGain: '83',
        totalLead: '279',
        percentLead: '68%',
        percentColor: 'text-success'
      }
    ],
    socialMedia: [
      {
        title: 'Facebook Ads',
        logo: {
          icon: 'facebook',
          color: 'text-primary'
        },
        likes: 63,
        shares: 387,
        spent: 570,
        progress: '20%'
      },
      {
        title: 'Twitter Ads',
        logo: {
          icon: 'twitter',
          color: 'text-sky-blue'
        },
        likes: 63,
        shares: 387,
        spent: 813,
        progress: '+20%'
      },
      {
        title: 'Instagram Ads',
        logo: {
          icon: 'instagram',
          color: 'text-light-pink'
        },
        likes: 63,
        shares: 387,
        spent: 2813,
        progress: '+20%'
      }
    ],



    projects: [
      {
        id: 1,
        title: 'Tender [77876] - Provision of material for Road Works',
        logo: {
          img: '',
          icon: 'chatbull',
          color: 'text-indigo'
        },
        color: 'bg-success',
        avgProgress: 55,
        tasks: 20
      },
      {
        id: 2,
        title: '#Planning : Utility Revamping plan for city centre area',
        logo: {
          img: '',
          icon: 'projects',
          color: 'text-orange'
        },
        color: 'bg-orange',
        avgProgress: 10,
        tasks: 10
      },
      {
        id: 3,
        title: 'Tender [77823] - PDRM & City Govt - Installation of AES Cameras for Speed Offenders',
        logo: {
          img: '',
          icon: 'leads1',
          color: 'text-light-pink'
        },
        color: 'bg-danger',
        avgProgress: 20,
        tasks: 16
      },
      {
        id: 4,
        title: '#Financial : Budget Preperation for next Q4, 2020',
        logo: {
          img: '',
          icon: 'revenue-new',
          color: 'text-yellow'
        },
        color: 'bg-info',
        avgProgress: 60,
        tasks: 117
      },
      {
        id: 5,
        title: '#Engineering : Repair of LED Advertisement Boards outside Citta Mall',
        logo: {
          img: '',
          icon: 'smart-phone-fill',
          color: 'text-light-green'
        },
        color: 'bg-yellow',
        avgProgress: 40,
        tasks: 271
      },
      {
        id: 6,
        title: '#Public Relations: SMS Campaign Survey for Public awareness for Face Masks.',
        logo: {
          img: '',
          icon: 'smart-phone',
          color: 'text-sky-blue'
        },
        color: 'bg-dark',
        avgProgress: 52,
        tasks: 71
      }
    ],
    tasksReport: {
      data: [
        {
          label: 'Completed',
          dotColor: 'bg-success',
          value: 31
        },
        {
          label: 'Overdue',
          dotColor: 'bg-danger',
          value: 18
        },
        {
          label: 'Due',
          dotColor: 'bg-warning',
          value: 6
        }
      ],
      chart: {
        'type': 'gauge',
        'theme': 'light',
        'axes': [{
          'axisAlpha': 0,
          'tickAlpha': 0,
          'labelsEnabled': false,
          'startValue': 0,
          'endValue': 12,
          'startAngle': 0,
          'endAngle': 360,
          'bands': [{
            'color': '#eee',
            'startValue': 0,
            'endValue': 12,
            'radius': '100%',
            'innerRadius': '95%'
          }, {
            'color': '#52c41a',
            'startValue': 0,
            'endValue': 8,
            'radius': '100%',
            'innerRadius': '95%',
            'balloonText': '6.5'
          }, {
            'color': '#eee',
            'startValue': 0,
            'endValue': 12,
            'radius': '90%',
            'innerRadius': '85%'
          }, {
            'color': '#f44336',
            'startValue': 0,
            'endValue': 6,
            'radius': '90%',
            'innerRadius': '85%',
            'balloonText': '2.5'
          }, {
            'color': '#eee',
            'startValue': 0,
            'endValue': 12,
            'radius': '80%',
            'innerRadius': '75%'
          }, {
            'color': '#fa8c16',
            'startValue': 0,
            'endValue': 3,
            'radius': '80%',
            'innerRadius': '75%',
            'balloonText': '5'
          }]
        }],
        'allLabels': [{
          'text': '55 Projects',
          'y': '45%',
          'size': 12,
          'bold': true,
          'color': '#212121',
          'align': 'center'
        }]
      }
    }
  };
}
