import { useTranslation } from 'react-i18next';
import block from 'bem-css-modules';
import styles from './Application.module.css';
import Text, { TextTag, TextType } from '../../Text/Text';

const b = block(styles);

const Application = () => {
  const { t } = useTranslation();
  const videoSrc = `https://www.youtube.com/embed/${t('application.videoID')}`;
  return (
    <div className={b()}>
      <Text Tag={TextTag.h2} type={TextType.title}>
        {t('application.title')}
      </Text>
      <div>
        <iframe
          className={b('video')}
          width="100%"
          height="auto"
          src={videoSrc}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Application;
