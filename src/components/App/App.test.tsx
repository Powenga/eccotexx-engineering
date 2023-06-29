import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from '../../services/i18nextForTest';

describe('App policy works correctly', () => {
  it('policy popup opens with callback form button', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Политикой конфеденциальности',
      })
    );
    expect(await screen.findByText('policy.title')).toBeInTheDocument();
  });
  it('policy popup opens with footer button', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
    fireEvent.click(
      screen.getByRole('button', {
        name: 'footer.policy',
      })
    );
    expect(await screen.findByText('policy.title')).toBeInTheDocument();
  });
  it('policy popup opens with consent message button', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
    fireEvent.click(
      screen.getByRole('button', {
        name: 'consentPolicy',
      })
    );
    expect(await screen.findByText('policy.title')).toBeInTheDocument();
  });
  it('policy popup closes', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
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
  it('opens with button', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
    fireEvent.click(
      screen.getByRole('button', {
        name: 'headerMenuButtonLabel',
      })
    );
    screen.debug()
    expect((await screen.findAllByText('nav-test-link')).length).toBe(3);
  });
});
