import { Injectable } from '@angular/core';

export interface Language {
  language: string;
  abbreviation: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  private languages: Language[] = [
    { language: 'English', abbreviation: 'en' },
    { language: 'Russian', abbreviation: 'ru' },
  ];

  private selectedLang: any;

  translations = {
    en: {
      paymentProceed: 'The payment has either been processed, is pending or has timed out.',
      cusInfo: 'Customer information',
      cusEmail: 'Customer email',
      cusPhone: 'Customer phone',
      usage: 'Usage',
      fname: 'First name',
      lname: 'Last name',
      adr: 'Address 1',
      city: 'City',
      zip: 'Zip code',
      country: 'Country',
      state: 'State',
      payFor: 'You are about to pay for..',
      descr: 'Test Description',
      payCard: 'Pay with Credit Card',
      accCards: 'Accepted cards',
      billed: 'Your credit card statement will be billed as',
      testData: 'test 1234567',
      holder: 'Card holder',
      cardNum: 'Card number',
      expDate: 'Expiration date',
      pay: 'Pay',
      cancelRet: 'Cancel and return to merchant',
      terms1: 'I acknowledge I have read the',
      terms2: 'Terms & Conditions',
      terms3: 'of purchase,',
      terms4: 'Privacy Policy',
      terms5: 'and authorize the payment.',
    },
    ru: {
      paymentProceed: 'Платеж либо был обработан, либо ожидает обработки, либо истек срок ожидания.',
      cusInfo: 'Информация о клиенте',
      cusEmail: 'Электронная почта клиента',
      cusPhone: 'Телефон клиента',
      usage: 'Использование',
      fname: 'Имя',
      lname: 'Фамилия',
      adr: 'Адрес 1',
      city: 'Город',
      zip: 'Почтовый код',
      country: 'Страна',
      state: 'Штат',
      payFor: 'Вы собираетесь заплатить за..',
      descr: 'Тестовое описнаие',
      payCard: 'Заплатить кредитной картой',
      accCards: 'Принимаемые карты',
      billed: 'Выписка по вашей кредитной карте будет выставлена ​​как',
      testData: 'test 1234567',
      holder: 'Держатель карты',
      cardNum: 'Номер карты',
      expDate: 'Дaта истичения',
      pay: 'Оплатить',
      cancelRet: 'Отмена и возврат к продавцу',
      terms1: 'Я подтверждаю, что я прочитал',
      terms2: 'условия',
      terms3: 'договора,',
      terms4: 'ознакомлен с политикой конфиденциальности',
      terms5: 'и авторизован для оплаты.',
    },
  };
  get langs(): Language[] {
    return this.languages;
  }

  getTranslation(lang: string): string[] {
    return this.translations[lang];
  }
}
