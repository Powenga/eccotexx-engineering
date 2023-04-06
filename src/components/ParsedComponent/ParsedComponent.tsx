import { FC, ReactNode, createElement } from 'react';

// From bem-css-modules

interface IModsType {
  [key: string]: boolean | string | number | undefined;
}

interface IStatesType {
  [key: string]: boolean | undefined;
}

interface IBlock {
  (
    element?: string,
    mods?: IModsType | null,
    states?: IStatesType | null
  ): string;
  (mods?: IModsType | null, states?: IStatesType | null): string;
}

type Childrens =
  | null
  | string
  | {
      type: string;
      props: Record<string, unknown> | null;
      childrens?: Childrens[];
    };

type TParsedComponent = {
  rootComponent: string | FC;
  rootProps: Record<string, unknown>;
  childrens: Childrens[];
  createClassFuntion?: IBlock;
};

const ParsedComponent: FC<TParsedComponent> = ({
  rootComponent,
  rootProps,
  childrens,
  createClassFuntion,
}) => {
  const parseChildrens = (childrenArray?: Childrens[]) => {
    if (!childrenArray?.length) {
      return [];
    }
    return childrenArray.map((element): ReactNode => {
      if (typeof element === 'string') {
        return element;
      }
      if (
        typeof element === 'object' &&
        !Array.isArray(element) &&
        element !== null
      ) {
        const dataClassName = element?.props?.className;
        let className = dataClassName;

        if (dataClassName && createClassFuntion) {
          if (typeof dataClassName === 'string') {
            className = createClassFuntion(dataClassName);
          }
          if (Array.isArray(dataClassName)) {
            className = createClassFuntion(...dataClassName);
          }
        }

        return createElement(
          element.type,
          {
            ...element.props,
            className,
          },
          ...parseChildrens(element.childrens)
        );
      }
      return [];
    });
  };

  return createElement(rootComponent, rootProps, ...parseChildrens(childrens));
};

export default ParsedComponent;
