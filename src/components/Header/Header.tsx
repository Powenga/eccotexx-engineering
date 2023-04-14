import { FC } from 'react';
import block from 'bem-css-modules';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';
import Text, { TextTag, TextType, TextWeight } from '../Text/Text';
import logo from '../../images/logo.svg';
import Button, { ButtonType } from '../Button/Button';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Header.module.css';
import slides from './slides/slides';
import Menu from '../Menu/Menu';

const b = block(styles);

type Props = {
  className?: string;
};

const Header: FC<Props> = ({ className = '' }) => (
  <header className={cn(b(), className)}>
    <div className={b('menu')}>
      <a href="/" className={b('logo-wrap')}>
        <img src={logo} alt="Логотип" className={b('logo')} />
      </a>
      <div className={b('menu')}>
        <Menu />
        <Button type={ButtonType.button} onClick={() => {}}>
          <Text
            Tag={TextTag.span}
            type={TextType.menu}
            weight={TextWeight.bold}
          >
            Напишите нам
          </Text>
        </Button>
      </div>
    </div>
    <Swiper
      className={b('slider')}
      modules={[Pagination, A11y]}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {slides.map(({ id, path, alt }) => (
        <SwiperSlide key={id}>
          <img src={path} alt={alt} className={b('slider-image')} />
        </SwiperSlide>
      ))}
    </Swiper>
  </header>
);

export default Header;
