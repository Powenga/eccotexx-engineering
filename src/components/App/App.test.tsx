import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from '../../services/i18nextForTest';
import { COOKIE_LOCAL_STORAGE_KEY } from '../../utils/config';

beforeEach(() => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
});

describe('App policy', () => {
  it('opens with callback form button', async () => {
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Политикой конфеденциальности',
      })
    );
    expect(
      await screen.findByRole('dialog', { name: 'policy.title' })
    ).toBeInTheDocument();
  });
  it('opens with footer button', async () => {
    fireEvent.click(
      screen.getByRole('button', {
        name: 'footer.policy',
      })
    );
    await screen.findByRole('dialog', { name: 'policy.title' });
  });
  it('opens with consent message button', async () => {
    fireEvent.click(
      screen.getByRole('button', {
        name: 'consentPolicy',
      })
    );
    await screen.findByRole('dialog', { name: 'policy.title' });
  });
  it('closes with close button', async () => {
    fireEvent.click(
      screen.getByRole('button', {
        name: 'consentPolicy',
      })
    );
    await screen.findByRole('dialog', { name: 'policy.title' });
    fireEvent.click(await screen.findByRole('button', { name: 'closePopup' }));
    await waitFor(() => {
      expect(
        screen.queryByRole('dialog', { name: 'policy.title' })
      ).not.toBeInTheDocument();
    });
  });
  it('closes with escape', async () => {
    fireEvent.click(
      screen.getByRole('button', {
        name: 'consentPolicy',
      })
    );
    await screen.findByRole('dialog', { name: 'policy.title' });
    fireEvent.keyDown(document, { key: 'Escape' });
    await waitFor(() => {
      expect(
        screen.queryByRole('dialog', { name: 'policy.title' })
      ).not.toBeInTheDocument();
    });
  });
  it('closes with overlay click', async () => {
    fireEvent.click(
      screen.getByRole('button', {
        name: 'consentPolicy',
      })
    );
    await screen.findByRole('dialog', { name: 'policy.title' });
    fireEvent.click(screen.getByTestId('modal-overlay'));
    await waitFor(() => {
      expect(
        screen.queryByRole('dialog', { name: 'policy.title' })
      ).not.toBeInTheDocument();
    });
  });
});

describe('App menu', () => {
  it('opens with button and closes with overalay click', async () => {
    fireEvent.click(
      screen.getByRole('button', {
        name: 'headerMenuButtonLabel',
      })
    );
    expect(
      await screen.findByRole('dialog', { name: 'menu' })
    ).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('modal-overlay'));
    await waitFor(() => {
      expect(
        screen.queryByRole('dialog', { name: 'menu' })
      ).not.toBeInTheDocument();
    });
  });
  it('opens with button and closes with Esc', async () => {
    fireEvent.click(
      screen.getByRole('button', {
        name: 'headerMenuButtonLabel',
      })
    );
    expect(
      await screen.findByRole('dialog', { name: 'menu' })
    ).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    await waitFor(() => {
      expect(
        screen.queryByRole('dialog', { name: 'menu' })
      ).not.toBeInTheDocument();
    });
  });
  it('closes with link click', async () => {
    fireEvent.click(
      screen.getByRole('button', {
        name: 'headerMenuButtonLabel',
      })
    );
    const menu = await screen.findByRole('dialog', { name: 'menu' });
    expect(menu).toBeInTheDocument();
    fireEvent.click(
      await within(menu).findByRole('link', { name: 'nav-test-link' })
    );
    await waitFor(() => {
      expect(
        screen.queryByRole('dialog', { name: 'menu' })
      ).not.toBeInTheDocument();
    });
  });
});

describe('Cookie notification', () => {
  it('opens when page is loaded', () => {
    expect(
      screen.getByRole('alertdialog', { name: 'consentPolicy' })
    ).toBeInTheDocument();
  });
  it('closes with button and save result to localstorage', async () => {
    const notification = screen.getByRole('alertdialog', {
      name: 'consentPolicy',
    });
    expect(localStorage.getItem(COOKIE_LOCAL_STORAGE_KEY)).toBe(null);
    fireEvent.click(
      within(notification).getByRole('button', { name: 'consentCookie' })
    );
    await waitFor(() => {
      expect(
        screen.queryByRole('alertdialog', { name: 'consentPolicy' })
      ).not.toBeInTheDocument();
    });
    expect(localStorage.getItem(COOKIE_LOCAL_STORAGE_KEY)).toBe('true');
  });
});
