import { render, screen, fireEvent } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from '../../services/i18nextForTest';

describe('Popups opens', () => {
  it('policy', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
    fireEvent.click(
      await screen.findByRole('button', {
        name: 'Политикой конфеденциальности',
      })
    );
    expect(
      await screen.findByText('policy.title')
    ).toBeInTheDocument();
  });
});
