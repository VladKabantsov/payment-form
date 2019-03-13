import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

interface Language {
  language: string;
  abbreviation: string;
}

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  private host: string = environment.baseUrl;
  public displayed = false;
  public languages: Language[] = [
    { language: 'English', abbreviation: 'en' },
    { language: 'Russian', abbreviation: 'rus' },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  changeLang(lang: Language): void {
    // this.router.navigateByUrl(`${this.host}${lang.abbreviation}`);
  }
}
