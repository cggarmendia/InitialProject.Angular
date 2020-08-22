import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from '../../core/services';

@Component({
  selector: 'app-translate',
  templateUrl: './ngx-translate.component.html',
  styleUrls: ['./ngx-translate.component.scss']
})
export class NgxTranslateComponent implements OnInit {

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


