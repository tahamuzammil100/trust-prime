import { Component, HostBinding, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { SettingsService } from '@app/settings/settings.service';
import { AuthService } from '@app/layouts/auth-layout/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @HostBinding('class') classNames = 'dt-header';
  settings: any;
  isNavFolded = false;
  languages = [
    {
      id: 'en',
      title: 'English',
      flag: 'flag-icon-us'
    },
    {
      id: 'my',
      title: 'Bahasa M',
      flag: 'flag-icon-my'
    },
    {
      id: 'cn',
      title: 'Chinese',
      flag: 'flag-icon-cn'
    }
  ];
  currentLanguage: any;
  currentUser: any = {
    name: 'Abbas Ali',
    thumb: '../../../../../assets/images/linkedInProfileAbbas.jpeg',
    position: 'Administrator'
  };

  logoImageUrl = '../../../../../assets/images/logo/trustprime-horizontal-logo-white.png';

  onSettingChanged: Subscription;
  onLanguageChanged: Subscription;

  constructor(private settingService: SettingsService,
    public translate: TranslateService,
    private authService: AuthService) {
    this.setActiveLang(this.translate.currentLang);
    this.onLanguageChanged = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setActiveLang(event.lang);
    });

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe((settings) => {
      this.settings = settings;
      this.isNavFolded = this.settings.navigationStyle === 'folded' && window.innerWidth >= 992;

      if (settings.theme === 'light') {
        this.logoImageUrl = '../../../../../assets/images/logo/trustprime-horizontal-logo.png';
      } else {
        this.logoImageUrl = '../../../../../assets/images/logo/trustprime-horizontal-logo-white.png';
      }
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.isNavFolded = this.settings.navigationStyle === 'folded' && window.innerWidth >= 992;
  }

  ngOnInit() {
  }

  toggleNavigation() {
    if (this.settings.navigationStyle === 'drawer' || window.innerWidth < 992) {
      this.settings.activeNavDrawer = !this.settings.activeNavDrawer;
    } else if (this.settings.navigationStyle === 'folded') {
      this.settings.navigationStyle = 'default';
    } else {
      this.settings.navigationStyle = 'folded';
    }

    this.settingService.setSettings(this.settings);
  }

  setActiveLang(lang: string) {
    this.languages.forEach((language) => {
      if (language.id === lang) {
        this.currentLanguage = language;
      }
    });
  }

  switchLanguage(lang) {
    this.translate.use(lang.id);
    localStorage.setItem('language', lang.id);
  }

  /**
   * Logout user
   * @param event
   */
  onLogout(event) {
    event.preventDefault();

    this.authService.logout();
  }

  ngOnDestroy() {
    this.onSettingChanged.unsubscribe();
    this.onLanguageChanged.unsubscribe();
  }

}
