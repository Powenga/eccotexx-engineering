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

beforeEach(() => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
});

describe('App policy works correctly', () => {
  it('policy popup opens with callback form button', async () => {
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Политикой конфеденциальности',
      })
    );
    expect(await screen.findByText('policy.title')).toBeInTheDocument();
  });
  it('policy popup opens with footer button', async () => {
    fireEvent.click(
      screen.getByRole('button', {
        name: 'footer.policy',
      })
    );
    expect(await screen.findByText('policy.title')).toBeInTheDocument();
  });
  it('policy popup opens with consent message button', async () => {
    fireEvent.click(
      screen.getByRole('button', {
        name: 'consentPolicy',
      })
    );
    expect(await screen.findByText('policy.title')).toBeInTheDocument();
  });
  it('policy popup closes', async () => {
    fireEvent.click(
      screen.getByRole('button', {
        name: 'consentPolicy',
      })
    );
    expect(await screen.findByText('policy.title')).toBeInTheDocument();
    fireEvent.click(await screen.findByLabelText('closePopup'));
    await waitFor(() => {
      expect(screen.queryByText('policy.title')).not.toBeInTheDocument();
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
