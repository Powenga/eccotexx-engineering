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
      {products.map(({ id, title }) => (
        <li className={b('item')} key={id}>
          <ParsedComponent
            rootComponent={Text}
            rootProps={{ className: b('title'), Tag: TextTag.h2 }}
            childrens={title}
            createClassFuntion={b}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default Products;
