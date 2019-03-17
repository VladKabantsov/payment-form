export interface MainForm {
  transaction_id: string;
  transaction_type: string;
  currency: string;
  amount: number;
  first_name: string;
  last_name: string;
  card_holder: string;
  card_number: string;
  expiration_year: number;
  expiration_month: number;
  cvv: number;
  customer_email: string;
  customer_phone: string;
  usage: string;
  address1: string;
  city: string;
  zip_code: string;
  country: string;
  state: string;
}
