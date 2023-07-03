import { FC } from 'react';
import block from 'bem-css-modules';
import { useTranslation, Trans } from 'react-i18next';
import styles from './Products.module.css';
import Text, { TextStyle, TextTag, TextType } from '../../Text/Text';
import { productImages } from './imageData';

const b = block(styles);

const Products: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={b()}>
      <Text Tag={TextTag.h2} type={TextType.title}>
        {t('products.title')}
      </Text>
      <ul className={b('list')}>
        {t('products.entities', { returnObjects: true }).map(
          ({ id, advantages, imgAlt }, index) => (
            <li key={id} className={b('item')}>
              <div>
                <Text
                  Tag={TextTag.h2}
                  type={TextType.subtitle}
                  className={b('product-title')}
                >
                  <Trans i18nKey={`products.entities.${index}.title` as never}>
                    {'Композитная арматура '}
                    <Text
                      Tag={TextTag.span}
                      type={TextType.subtitle}
                      style={TextStyle.accent}
                    >
                      Eccotexx
                    </Text>
                  </Trans>
                </Text>
                <Text className={b('product-content')}>
                  <Trans
                    i18nKey={`products.entities.${index}.content` as never}
                  >
                    {'Предназначена для '}
                    <Text Tag={TextTag.span} style={TextStyle.accent}>
                      линейного
                    </Text>
                    {' армирования бетонных конструкций'}
                  </Trans>
                </Text>
                <ul className={b('advantages')}>
                  {advantages?.map((elem, advantagesIndex) => (
                    <li key={elem}>
                      <Text className={b('advantages-text')}>
                        <span className={b('advantages-icon')}>
                          {advantagesIndex + 1}
                        </span>
                        <span>{elem}</span>
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src={productImages.find((product) => product.id === id)?.imgSrc}
                alt={imgAlt}
                className={b('product-img')}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Products;
