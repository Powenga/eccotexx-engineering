import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { render, waitFor } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from '../../services/i18next';

const spy = jest
  .spyOn(document.documentElement, 'setAttribute')
  .mockImplementation(() => '');

const checkSuccessLoading = jest.fn();
const checkErrorLoading = jest.fn();

const handlers = [
  rest.get('/locales/:lang/:ns', async (req, res, ctx) => {
    const { lang, ns } = req.params;
    try {
      const result = await import(`../../../public/locales/${lang}/${ns}`);
      checkSuccessLoading({ lang, ns });
      return await res(ctx.json(result), ctx.delay(100));
    } catch (error) {
      checkErrorLoading({ lang, ns });
      return res(ctx.status(404));
    }
  }),
];

const server = setupServer(...handlers);

describe('App', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('loads tranlations', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
    await waitFor(() => {
      // Default lang
      expect(checkErrorLoading).toHaveBeenCalledWith(
        expect.objectContaining({
          lang: 'en-US',
          ns: 'translation.json',
        })
      );
      // Fallback lang
      expect(checkSuccessLoading).toHaveBeenCalledWith(
        expect.objectContaining({
          lang: 'en',
          ns: 'translation.json',
        })
      );
      expect(spy).toHaveBeenCalledWith('lang', 'en');
    });
  });
});
