import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { LANGUAGES } from 'src/config/language-config';
import { User } from '../../../models/user';
import { I18nService } from 'ng-devui/i18n';
import { DialogService, DrawerService } from 'ng-devui';
import { SideSettingsComponent } from '../../side-settings/side-settings.component';
import { PersonalizeComponent } from '../../personalize/personalize.component';

@Component({
  selector: 'da-header-operation',
  templateUrl: './header-operation.component.html',
  styleUrls: ['./header-operation.component.scss'],
})
export class HeaderOperationComponent implements OnInit {
  user!: User;
  languages = LANGUAGES;
  language!: string;
  haveLoggedIn = false;
  noticeCount!: number;
  settingDrawer: any;

  constructor(private drawerService: DrawerService,private route: Router, private authService: AuthService, private translate: TranslateService, private i18n: I18nService,private dialogService:DialogService) {}

  ngOnInit(): void {
    if (localStorage.getItem('userinfo')) {
      this.user = JSON.parse(localStorage.getItem('userinfo')!);
      this.haveLoggedIn = true;
    } else {
      this.authService.login('Admin', 'Devui.admin').subscribe((res) => {
        this.authService.setSession(res);
        this.user = JSON.parse(localStorage.getItem('userinfo')!);
        this.haveLoggedIn = true;
      });
    }
    this.language = this.translate.currentLang;
  }

  onSearch(event: any) {
    console.log(event);
  }

  onLanguageClick(language: string) {
    this.language = language;
    localStorage.setItem('lang', this.language);
    this.i18n.toggleLang(this.language);
    this.translate.use(this.language);
  }

  handleUserOps(operation: string) {
    switch (operation) {
      case 'logout': {
        this.haveLoggedIn = false;
        this.authService.logout();
        this.route.navigate(['/', 'login']);
        break;
      }
      default:
        break;
    }
  }

  handleNoticeCount(event: number) {
    this.noticeCount = event;
  }
  openSettingDrawer() {
    if (this.settingDrawer) {
      this.settingDrawer.drawerInstance.show();
    } else {
      this.settingDrawer = this.drawerService.open({
        drawerContentComponent: SideSettingsComponent,
        width: '350px',
        destroyOnHide: false,
        data: {
          close: () => {
            this.settingDrawer.drawerInstance.hide();
          },
        },
      });
    }
  }
  personalizeConfig() {
    this.dialogService.open({
      id: 'theme',
      width: '800px',
      maxHeight: '800px',
      title: '',
      content: PersonalizeComponent,
      backdropCloseable: true,
      draggable: false,
      onClose: () => {},
      buttons: [],
    });
  }
}
