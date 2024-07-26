export interface Sender {
  email: string;
  name?: string;
}

export interface EmailParamsType {
  to: string;
  from: Sender;
  subject: string;
  htmlContent: string;
}
