import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Text, { TextTag, TextType } from '../Text/Text';

const SuccessMessage: FC = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'messages.success',
  });
  return (
    <>
      <Text Tag={TextTag.h3} type={TextType.popupTitle}>
        {t('title')}
      </Text>
      <Text type={TextType.popupContent}>{t('content')}</Text>
    </>
  );
};

export default SuccessMessage;
