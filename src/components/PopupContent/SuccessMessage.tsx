import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Text, { TextTag, TextType } from '../Text/Text';

const SUCCESS_MESSAGE_TITLE_ID = 'success_message_title';

const SuccessMessage: FC = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'messages.success',
  });

  return (
    <div
      role="alertdialog"
      aria-labelledby={SUCCESS_MESSAGE_TITLE_ID}
      aria-modal
    >
      <Text
        id={SUCCESS_MESSAGE_TITLE_ID}
        Tag={TextTag.h3}
        type={TextType.popupTitle}
      >
        {t('title')}
      </Text>
      <Text type={TextType.popupContent}>{t('content')}</Text>
    </div>
  );
};

export default SuccessMessage;
