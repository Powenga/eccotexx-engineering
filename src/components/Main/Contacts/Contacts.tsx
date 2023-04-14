import { FC } from 'react';
import block from 'bem-css-modules';
import styles from './Contacts.module.css';
import Text, { TextTag, TextType } from '../../Text/Text';
import { contacts } from './data';
import frameSrc from './frame.svg';

const b = block(styles);

const Contacts: FC = () => {
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
          Контакты
        </Text>
        <ul className={b('list')}>
          {contacts.map(({ id, title, content, link, icon }) => (
            <li key={id} className={b('item')}>
              <img src={icon} alt="" className={b('item-icon')} />
              <div>
                <Text Tag={TextTag.h3} type={TextType.contactsTitle}>
                  {title}
                </Text>
                {renderContent(content, link)}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <a
        target="_blank"
        href="/eccotexx_presentation.pdf"
        className={b('presentation')}
      >
        <img src={frameSrc} alt="Презентация компании" />
        <Text
          className={b('presentation-title')}
          Tag={TextTag.span}
          type={TextType.presentation}
        >
          Презентация компании
        </Text>
      </a>
    </div>
  );
};
export default Contacts;
