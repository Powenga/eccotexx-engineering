import { FC } from 'react';
import block from 'bem-css-modules';
import { useTranslation } from 'react-i18next';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Text, { TextStyle, TextTag, TextType } from '../../Text/Text';
import styles from './Objects.module.css';

import 'swiper/css';
import 'swiper/css/pagination';

const b = block(styles);

const Objects: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'objects' });
  return (
    <div className={b()}>
      <div className={b('inner')}>
        <div className={b('decoration')} />
        <div className={b('decoration')} />
        <Text
          Tag={TextTag.h2}
          type={TextType.title}
          className={b('title')}
          style={TextStyle.white}
        >
          {t('title')}
        </Text>
        <Swiper
          modules={[Pagination, A11y]}
          slidesPerView={1}
          spaceBetween={50}
          pagination={{ clickable: true }}
          wrapperClass={b('slider-wrap')}
          breakpoints={{
            1760: {
              slidesPerView: 3,
              spaceBetween: 180,
            },
            1360: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            650: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          {t('entities', { returnObjects: true }).map(
            ({ id, title, location, square }) => (
              <SwiperSlide key={id} style={{ height: 'auto' }}>
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
                      {t('locationTitle')}:{' '}
                    </Text>
                    <Text Tag={TextTag.p} type={TextType.objectParagraph}>
                      {location}
                    </Text>
                    <Text Tag={TextTag.p} type={TextType.objectSubtitle}>
                      {t('squareTitle')}:{' '}
                    </Text>
                    <Text Tag={TextTag.p} type={TextType.objectParagraph}>
                      {square}
                    </Text>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Objects;
