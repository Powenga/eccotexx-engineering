import { FC } from 'react';
import Text, { TextTag, TextType } from '../Text/Text';

const SuccessMessage: FC = () => (
  <>
    <Text Tag={TextTag.h3} type={TextType.popupTitle}>
      Сообщение отправлено
    </Text>
    <Text type={TextType.popupContent}>
      Благодарим за обращение. Мы свяжемся с Вами в ближайщее время.
    </Text>
  </>
);

export default SuccessMessage;
