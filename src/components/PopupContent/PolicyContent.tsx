import { FC, Fragment, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Text, { TextTag, TextType } from '../Text/Text';

const POLICY_CONTENT_TITLE_ID = 'policy-content-title';

const PolicyContent: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'policy' });
  const focusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={focusRef}
      tabIndex={-1}
      role="dialog"
      aria-labelledby={POLICY_CONTENT_TITLE_ID}
      aria-modal
      style={{ outline: 'none' }}
    >
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
