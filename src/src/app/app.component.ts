import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  constructor(
    private translate: TranslateService, 
    private i18nService: I18nService
  ) {
    translate.setDefaultLang('es-ES');
    translate.use('es-ES');
  }

  ngOnInit(): void {
    this.i18nService.localeEvent.subscribe(locale => 
      this.translate.use(locale)
    );    
  }

}
