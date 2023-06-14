import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Text, { TextTag, TextType } from '../Text/Text';

const ErrorMessage: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'messages.error' });
  return (
    <>
      <Text Tag={TextTag.h3} type={TextType.popupTitle}>
        {t('title')}
      </Text>
      <Text type={TextType.popupContent}>{t('content')}</Text>
    </>
  );
};

export default ErrorMessage;
