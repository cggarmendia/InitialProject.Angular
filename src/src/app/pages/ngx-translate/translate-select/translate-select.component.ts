import { Component, OnInit } from '@angular/core';
import { LanguageViewModel } from '../view-models';
import { I18nService } from '../../../core/services';

@Component({
  selector: 'translate-select',
  templateUrl: './translate-select.component.html',
  styleUrls: ['./translate-select.component.scss']
})
export class TranslateSelectComponent implements OnInit {
  public optionList : LanguageViewModel[] = [
    { lang: 'es-ES' },
    { lang: 'en-EN' }
  ];
  public selectedLanguage: LanguageViewModel = { lang: 'es-ES' };

  constructor(private i18nService: I18nService) { }

  ngOnInit(): void {
  }

  compareFn = (o1: LanguageViewModel, o2: LanguageViewModel) => (o1 && o2 ? o1.lang === o2.lang : o1 === o2);

  changeLocale(value: LanguageViewModel) {
    this.i18nService.changeLocale(value.lang);   
  }
}
