import { FC } from 'react';
import Text, { TextTag, TextType } from '../Text/Text';

const ErrorMessage: FC = () => (
  <>
    <Text Tag={TextTag.h3} type={TextType.popupTitle}>
      Произошла ошибка
    </Text>
    <Text type={TextType.popupContent}>
      К сожалению, Ваше сообщение на было отправлено. Пожалуйста, попробуйте
      позже
    </Text>
  </>
);

export default ErrorMessage;
