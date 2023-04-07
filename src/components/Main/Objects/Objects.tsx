import { FC } from 'react';
import block from 'bem-css-modules';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Text, { TextTag, TextType } from '../../Text/Text';
import styles from './Objects.module.css';

import 'swiper/css';
import 'swiper/css/pagination';
import { objects } from './data';

const b = block(styles);

const Objects: FC = () => (
  <div className={b()}>
    <div className={b('inner')}>
      <div className={b('decoration')} />
      <div className={b('decoration')} />
      <Text Tag={TextTag.h2} type={TextType.title} className={b('title')}>
        Реализованные объекты
      </Text>
      <Swiper
        modules={[Pagination, A11y]}
        slidesPerView={3}
        spaceBetween={110}
        pagination={{ clickable: true }}
        wrapperClass={b('slider-wrap')}
      >
        {objects.map(({ id, title, location, square, years }) => (
          <SwiperSlide key={id}>
            <div className={b('object')}>
              <div className={b('object-decoration')} />
              <div className={b('object-decoration')} />
              <Text
                Tag={TextTag.h3}
                type={TextType.objectTitle}
                className={b('object-title')}
              >
                {title}
              </Text>
              <div className={b('object-info')}>
                <Text Tag={TextTag.p} type={TextType.objectSubtitle}>
                  Местоположение:{' '}
                </Text>
                <Text Tag={TextTag.p} type={TextType.objectParagraph}>
                  {location}
                </Text>
                <Text Tag={TextTag.p} type={TextType.objectSubtitle}>
                  Площадь:{' '}
                </Text>
                <Text Tag={TextTag.p} type={TextType.objectParagraph}>
                  {square}
                </Text>
                <Text Tag={TextTag.p} type={TextType.objectSubtitle}>
                  Год выполнения:{' '}
                </Text>
                <Text Tag={TextTag.p} type={TextType.objectParagraph}>
                  {years}
                </Text>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default Objects;
