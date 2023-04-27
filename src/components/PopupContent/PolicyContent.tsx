import { FC, Fragment } from 'react';
import Text, { TextTag, TextType } from '../Text/Text';
import { policy } from './policy-content';

const PolicyContent: FC = () => (
  <>
    <Text Tag={TextTag.h3} type={TextType.popupTitle}>
      Политика в отношении обработки персональных данных
    </Text>
    {policy.map(({ title, content }) => (
      <Fragment key={title}>
        <Text>{title}</Text>
        {content.map((elem) => (
          <Text key={elem}>{elem}</Text>
        ))}
      </Fragment>
    ))}
  </>
);

export default PolicyContent;
