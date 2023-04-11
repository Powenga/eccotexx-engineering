import { FC, KeyboardEvent, SyntheticEvent, useRef } from 'react';
import block from 'bem-css-modules';
import styles from './Callback.module.css';
import Text, { TextStyle, TextTag, TextType } from '../../Text/Text';
import useFormWithValidation from '../../../hooks/useForm';
import { SPACE_KEY_CODE, ENTER_KEY_CODE } from '../../../utils/config';
import Button from '../../Button/Button';

const b = block(styles);
const TEXTAREA_ROWS = 5;

type Props = {
  onSubmit: (dataForm: {
    userName: string;
    userEmail: string;
    userMessage: string;
    policy: boolean;
  }) => void;
  isSending: boolean;
  onPolicyClick: () => void;
};

enum InputNames {
  userName = 'userName',
  userEmail = 'userEmail',
  userMessage = 'userMessage',
  policy = 'policy',
}

const Callback: FC<Props> = ({ onSubmit, onPolicyClick, isSending }) => {
  const formRef = useRef(null);
  const form = useFormWithValidation(formRef);

  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();

    const dataForm = {
      policy: false,
      userEmail: '',
      userMessage: '',
      userName: '',
      ...form.values,
      ...form.checkboxValues,
    };

    onSubmit(dataForm);
    form.resetForm();
  };

  const handlePolicyKeydown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (![SPACE_KEY_CODE, ENTER_KEY_CODE].includes(event.key)) {
      return;
    }
    event.preventDefault();
    onPolicyClick();
  };

  const handlePolicyClick = (event: SyntheticEvent) => {
    event?.preventDefault();
    onPolicyClick();
  };

  return (
    <div className={b()}>
      <Text Tag={TextTag.h2} type={TextType.title} style={TextStyle.accent}>
        Форма обратной связи
      </Text>
      <form ref={formRef} noValidate className={b('form')}>
        <label htmlFor={InputNames.userName} className={b('label')}>
          <input
            id={InputNames.userName}
            name={InputNames.userName}
            value={form.values[InputNames.userName] || ''}
            type="text"
            className={b('input', {
              state: form.errors[InputNames.userName] ? 'error' : undefined,
            })}
            onChange={form.handleInputChange}
            placeholder="Ваше имя"
            minLength={2}
            maxLength={40}
            required
          />
          <Text
            Tag={TextTag.span}
            type={TextType.error}
            className={b('input-error')}
            aria-live="polite"
          >
            {form.errors[InputNames.userName]}
          </Text>
        </label>
        <label htmlFor={InputNames.userEmail} className={b('label')}>
          <input
            id={InputNames.userEmail}
            name={InputNames.userEmail}
            value={form.values[InputNames.userEmail] || ''}
            type="email"
            className={b('input', {
              state: form.errors[InputNames.userEmail] ? 'error' : undefined,
            })}
            onChange={form.handleInputChange}
            placeholder="Ваша электронная почта"
            required
          />
          <Text
            Tag={TextTag.span}
            type={TextType.error}
            className={b('input-error')}
            aria-live="polite"
          >
            {form.errors[InputNames.userEmail]}
          </Text>
        </label>
        <label htmlFor={InputNames.userMessage} className={b('label')}>
          <textarea
            id={InputNames.userMessage}
            name={InputNames.userMessage}
            value={form.values[InputNames.userMessage] || ''}
            className={b('textarea', {
              state: form.errors[InputNames.userMessage] ? 'error' : undefined,
            })}
            onChange={form.handleInputChange}
            placeholder="Ваше сообщение"
            rows={TEXTAREA_ROWS}
            required
            minLength={5}
            maxLength={40}
          />
          <Text
            Tag={TextTag.span}
            type={TextType.error}
            className={b('input-error')}
            aria-live="polite"
          >
            {form.errors[InputNames.userMessage]}
          </Text>
        </label>
        <label htmlFor={InputNames.policy} className={b('policy-wrap')}>
          <input
            id={InputNames.policy}
            name={InputNames.policy}
            checked={form.checkboxValues[InputNames.policy] || false}
            type="checkbox"
            className={b('policy-input')}
            onChange={form.handleCheckboxChange}
            required
          />
          <span
            aria-label="Политика конфиденциальности"
            className={b('policy-pseudo')}
          />
          <Text Tag={TextTag.span} className={b('policy-text')}>
            Я согласен с{' '}
            <span
              onClick={handlePolicyClick}
              onKeyDown={(event) => handlePolicyKeydown(event)}
              tabIndex={0}
              role="button"
              className={b('policy-link')}
            >
              Политикой конфеденциальности
            </span>
          </Text>
        </label>
        <Button onClick={handleSubmit} disabled={!form.isValid}>
          <Text Tag={TextTag.span} type={TextType.menu}>
            ОТПРАВИТЬ
          </Text>
        </Button>
        {isSending}
      </form>
    </div>
  );
};

export default Callback;