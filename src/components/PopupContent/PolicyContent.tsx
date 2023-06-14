import { FC, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Text, { TextTag, TextType } from '../Text/Text';

const PolicyContent: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'policy' });
  return (
    <>
      <Text Tag={TextTag.h3} type={TextType.popupTitle}>
        {t('title')}
      </Text>
      {t('paragraphs', { returnObjects: true }).map(({ title, content }) => (
        <Fragment key={title}>
          <Text type={TextType.popupContent}>{title}</Text>
          {content.map((elem) => (
            <Text key={elem} type={TextType.policyParagraph}>
              {elem}
            </Text>
          ))}
        </Fragment>
      ))}
    </>
  );
};

export default PolicyContent;
