import { FC } from 'react';
import block from 'bem-css-modules';
import styles from './Products.module.css';
import Text, { TextTag, TextType } from '../../Text/Text';
import { products } from './data';
import ParsedComponent from '../../ParsedComponent/ParsedComponent';

const b = block(styles);

const Products: FC = () => (
  <div className={b()}>
    <Text type={TextType.title} className={b('title')}>
      Продукция компании
    </Text>
    <ul className={b('list')}>
      {products.map(({ id, title, content, advantages, img }) => (
        <li key={id} className={b('item')}>
          <div>
            <ParsedComponent
              rootComponent={Text}
              rootProps={{
                className: b('product-title'),
                Tag: TextTag.h2,
                type: TextType.subtitle,
              }}
              childrens={title}
              createClassFuntion={b}
            />
            <ParsedComponent
              rootComponent={Text}
              rootProps={{ className: b('product-content') }}
              childrens={content}
              createClassFuntion={b}
            />
            <ul className={b('advantages')}>
              {advantages.map((elem, index) => (
                <li key={elem}>
                  <Text className={b('advantages-text')}>
                    <span className={b('advantages-icon')}>{index + 1}</span>
                    <span>{elem}</span>
                  </Text>
                </li>
              ))}
            </ul>
          </div>
          <img src={img.src} alt={img.alt} className={b('product-img')} />
        </li>
      ))}
    </ul>
  </div>
);

export default Products;
