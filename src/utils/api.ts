import { REACT_APP_API_URL as BASE_URL } from './config';

export type TCallbackData = {
  userName: string;
  userEmail: string;
  userMessage: string;
  policy: boolean;
};

class Api {
  protected baseUrl: string;

  protected headers: HeadersInit | undefined;

  constructor({
    baseUrl,
    headers,
  }: {
    baseUrl: string;
    headers: Record<string, string>;
  }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  protected static onError(res: Response) {
    return res.json().then((data) => {
      if (res.ok) {
        return Promise.resolve(data);
      }
      return Promise.reject(data);
    });
  }

  sendCallbackQuery(data: TCallbackData) {
    return fetch(`${this.baseUrl}/callback`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
    }).then(Api.onError);
  }
}

export default new Api({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
