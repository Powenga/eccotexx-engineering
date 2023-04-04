import { FC } from 'react';
import block from 'bem-css-modules';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Header.module.css';
import Text, { TextTag, TextType, TextWeight } from '../Text/Text';
import menuItems from './menu-items';
import logo from './logo.svg';
import Button, { ButtonType } from '../Button/Button';
import 'swiper/css';
import 'swiper/css/pagination';
import slides from './slides/slides';

const b = block(styles);

const Header: FC = () => (
  <header className={b()}>
    <div className={b('menu')}>
      <a href="/" className={b('logo-wrap')}>
        <img src={logo} alt="Логотип" className={b('logo')} />
      </a>
      <nav className={b('nav')}>
        <ul className={b('nav-list')}>
          {menuItems.map(({ title, to }) => (
            <li className={b('nav-item')} key={title}>
              <a href={to} className={b('link')}>
                <Text
                  Tag={TextTag.span}
                  type={TextType.menu}
                  className={b('link-text')}
                >
                  {title}
                </Text>
              </a>
            </li>
          ))}
        </ul>
        <Button type={ButtonType.button}>
          <Text
            Tag={TextTag.span}
            type={TextType.menu}
            weight={TextWeight.bold}
          >
            Напишите нам
          </Text>
        </Button>
      </nav>
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
