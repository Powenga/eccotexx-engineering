import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Text, { TextTag, TextType } from '../Text/Text';

const ERROR_MESSAGE_TITLE_ID = 'error_message_title';

const ErrorMessage: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'messages.error' });

  return (
    <div
      role="alertdialog"
      aria-labelledby={ERROR_MESSAGE_TITLE_ID}
      aria-modal
    >
      <Text
        id={ERROR_MESSAGE_TITLE_ID}
        Tag={TextTag.h3}
        type={TextType.popupTitle}
      >
        {t('title')}
      </Text>
      <Text type={TextType.popupContent}>{t('content')}</Text>
    </div>
  );
};

export default ErrorMessage;
