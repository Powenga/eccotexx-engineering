import { FC } from 'react';
import block from 'bem-css-modules';
import { useTranslation } from 'react-i18next';
import styles from './Contacts.module.css';
import Text, { TextTag, TextType } from '../../Text/Text';
import { icons } from './icons/icons';
import frameSrc from './frame.svg';

const b = block(styles);

const Contacts: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' });
  const renderText = (content: string) => (
    <Text type={TextType.contactsContent}>{content}</Text>
  );

  const renderContent = (
    content: string,
    link: string | undefined = undefined
  ) =>
    link ? (
      <a href={link} className={b('link')}>
        {renderText(content)}
      </a>
    ) : (
      renderText(content)
    );

  return (
    <div className={b()}>
      <div className={b('container')}>
        <Text Tag={TextTag.h2} type={TextType.title}>
          {t('title')}
        </Text>
        <ul className={b('list')}>
          {t('entities', { returnObjects: true }).map(
            ({ id, title, content, link }) => (
              <li key={id} className={b('item')}>
                <img
                  src={icons.find((icon) => icon.contacId === id)?.src}
                  alt=""
                  className={b('item-icon')}
                />
                <div>
                  <Text Tag={TextTag.h3} type={TextType.contactsTitle}>
                    {title}
                  </Text>
                  {renderContent(content, link)}
                </div>
              </li>
            )
          )}
        </ul>
      </div>
      <a
        target="_blank"
        href={t('presentation.link')}
        className={b('presentation')}
        rel="noreferrer noopener"
      >
        <img src={frameSrc} alt="Презентация компании" />
        <Text
          className={b('presentation-title')}
          Tag={TextTag.span}
          type={TextType.presentation}
        >
          {t('presentation.title')}
        </Text>
      </a>
    </div>
  );
};
export default Contacts;
