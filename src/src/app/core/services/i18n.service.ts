import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class I18nService implements OnInit{

  localeEvent = new Subject<string>();

  constructor(private translate: TranslateService) { 
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('es-ES');
    this.translate.use('es-ES');
  }

  public changeLocale(locale: string){
    this.translate.use(locale);
    this.localeEvent.next(locale);
  }

}