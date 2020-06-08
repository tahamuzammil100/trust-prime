import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Location} from '@angular/common';
import {SettingsService} from '@app/settings/settings.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  settings: any;
  onSettingChanged: Subscription;

  layouts = [
    {
      name: 'Default Layout',
      slug: 'default',
      thumb: 'assets/images/demo-images/demo-1.jpg'
    },
    {
      name: 'SAAS Layout',
      slug: 'saas',
      thumb: 'assets/images/demo-images/demo-2.jpg'
    },
    {
      name: 'Listing Layout',
      slug: 'listing',
      thumb: 'assets/images/demo-images/demo-3.jpg'
    },
    {
      name: 'Intranet Layout',
      slug: 'intranet',
      thumb: 'assets/images/demo-images/demo-4.jpg'
    },
    {
      name: 'Back Office Layout',
      slug: 'back-office',
      thumb: 'assets/images/demo-images/demo-5.jpg'
    },
    {
      name: 'Back Office Minimal Layout',
      slug: 'back-office-mini',
      thumb: 'assets/images/demo-images/demo-6.jpg'
    },
    {
      name: 'Modern Layout',
      slug: 'modern',
      thumb: 'assets/images/demo-images/demo-7.jpg'
    },
    {
      name: 'CRM Layout',
      slug: 'crm',
      thumb: 'assets/images/demo-images/demo-8.jpg'
    }
  ];

  constructor(private settingService: SettingsService, private location: Location) {
    this.onSettingChanged = this.settingService.onSettingChanged.subscribe((settings) => {
      this.settings = settings;
    });
  }

  ngOnInit() {
  }

  /**
   * Get layout URL
   * @param layout
   */
  getLayoutUrl(layout) {
    return this.location.path().replace(this.settings.layout + '/', layout + '/');
  }

}
