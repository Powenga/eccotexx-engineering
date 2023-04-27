import { FC, SyntheticEvent } from 'react';
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
import Navigation from '../Navigation/Navigation';
import buttonPath from './button.svg';

const b = block(styles);

type Props = {
  className?: string;
  onMenuOpen: () => void;
  onCallbackClick?: () => void;
};

const Header: FC<Props> = ({ className = '', onMenuOpen, onCallbackClick }) => {
  const handleMenuOpen = (event: SyntheticEvent) => {
    event.preventDefault();
    onMenuOpen();
  };

  const handleCallbackClick = (event: SyntheticEvent) => {
    event.preventDefault();
    if (onCallbackClick) {
      onCallbackClick();
    }
  };

  return (
    <header className={cn(b(), className)}>
      <div className={b('menu-wrap')}>
        <a href="/" className={b('logo-wrap')}>
          <img src={logo} alt="Логотип" className={b('logo')} />
        </a>
        <div className={b('menu')}>
          <Navigation className={b('navigation')} />
          <Button
            type={ButtonType.button}
            onClick={handleCallbackClick}
            className={b('callback')}
          >
            <Text
              Tag={TextTag.span}
              type={TextType.menu}
              weight={TextWeight.bold}
            >
              Напишите нам
            </Text>
          </Button>
          <button onClick={handleMenuOpen} className={b('aside-menu-button')}>
            <img src={buttonPath} alt="Открыть меню" />
          </button>
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
};

export default Header;
