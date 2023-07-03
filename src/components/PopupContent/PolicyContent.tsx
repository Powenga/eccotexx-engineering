import { FC, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Text, { TextTag, TextType } from '../Text/Text';

const POLICY_CONTENT_TITLE_ID = 'policy-content-title';

const PolicyContent: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'policy' });

  return (
    <div role="dialog" aria-labelledby={POLICY_CONTENT_TITLE_ID} aria-modal>
      <Text
        Tag={TextTag.h3}
        type={TextType.popupTitle}
        id={POLICY_CONTENT_TITLE_ID}
      >
        {t('title')}
      </Text>
      {t('paragraphs', { returnObjects: true }).map(({ title, content }) => (
        <Fragment key={title}>
          <Text type={TextType.popupContent}>{title}</Text>
          {content?.map((elem) => (
            <Text key={elem} type={TextType.policyParagraph}>
              {elem}
            </Text>
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default PolicyContent;
