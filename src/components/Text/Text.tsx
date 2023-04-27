import { forwardRef, PropsWithChildren } from 'react';
import block from 'bem-css-modules';
import cn from 'classnames';
import styles from './Text.module.css';

const b = block(styles);

export enum TextTag {
  p = 'p',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  span = 'span',
}

export enum TextType {
  main = 'main',
  intro = 'intro',
  menu = 'menu',
  features = 'features',
  featuresAccent = 'features-accent',
  subtitle = 'subtitle',
  title = 'title',
  objectTitle = 'object-title',
  objectSubtitle = 'object-subtitle',
  objectParagraph = 'object-paragraph',
  advantagesTitle = 'advantages-title',
  advantagesContent = 'advantages-content',
  accordionPreview = 'accordion-preview',
  error = 'error',
  input = 'input',
  contactsTitle = 'contacts-title',
  contactsContent = 'contacts-content',
  presentation = 'presentation',
  footerInfo = 'footer-info',
  popupTitle = 'popup-title',
  popupContent = 'popup-content',
}

export enum TextStyle {
  accent = 'accent',
  white = 'white',
  error = 'error',
  inherit = 'inherit',
}

export enum TextWeight {
  normal = 'normal',
  bold = 'bold',
}

export enum TextAlign {
  center = 'center',
  left = 'left',
  right = 'right',
}

export interface IText {
  Tag?: TextTag;
  type?: TextType;
  style?: TextStyle;
  weight?: TextWeight;
  align?: TextAlign;
  className?: string;
  hovered?: boolean;
}

const Text = forwardRef<HTMLParagraphElement, PropsWithChildren<IText>>(
  (
    {
      Tag = TextTag.p,
      type = TextType.main,
      style = undefined,
      weight = undefined,
      align = undefined,
      children,
      className = '',
      hovered = false,
    },
    ref
  ) => (
    <Tag
      ref={ref}
      className={cn(
        className,
        b({
          type,
          style,
          weight,
          align,
          hovered,
        })
      )}
    >
      {children}
    </Tag>
  )
);

export default Text;
