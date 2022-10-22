import React, { createContext, isValidElement, useEffect, useState } from 'react';

type onCancel = (e?: React.MouseEvent<HTMLElement>) => void;
type onClick = (e?: React.MouseEvent<HTMLElement>) => void;

export interface ActionProps {
  open?: boolean;
  children?: React.ReactNode;
  onCancel?: onCancel;
  action?:
    | (React.ReactElement & { onClick?: onClick })
    | ((e: { onClick: onClick }) => React.ReactNode);
}

export interface ActionContextProps {
  open?: boolean;
  onCancel: onCancel;
  destroyCallback?: () => void;
}
export const Context = createContext<ActionContextProps>({ onCancel: () => undefined });

const Action = (props: ActionProps) => {
  const { action, onCancel, children, open: propsOpen } = props;

  const [load, setLoad] = useState<Record<string, any>>();
  const [open, setOpen] = useState<boolean>();

  useEffect(() => {
    if (propsOpen) {
      setLoad({});
    } else {
      setOpen(false);
    }
  }, [propsOpen]);

  useEffect(() => {
    setOpen(!!load);
  }, [load]);

  // 打开
  const handleOnClick = async (e: unknown) => {
    if (isValidElement(action)) {
      const { onClick } = action.props;
      if (typeof onClick === 'function') {
        await onClick?.(e);
      }
    }
    setLoad({});
  };
  // 关闭
  const handleOnCancel = (e?: React.MouseEvent<HTMLElement>) => {
    onCancel?.(e);
    setOpen(false);
  };
  return (
    <>
      {isValidElement(action) ? (
        <action.type {...action.props} onClick={handleOnClick} />
      ) : (
        action?.({ onClick: handleOnClick })
      )}
      <Context.Provider
        value={{ open, onCancel: handleOnCancel, destroyCallback: () => setLoad(undefined) }}
      >
        {(load || propsOpen) && children}
      </Context.Provider>
    </>
  );
};

// 重置
const ContextReset = ({ children }: { children: React.ReactNode }) => {
  return <Context.Provider value={{ onCancel: () => undefined }}>{children}</Context.Provider>;
};

Action.Context = Context;
Action.ContextReset = ContextReset;

export default Action;
