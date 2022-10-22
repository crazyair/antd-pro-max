import React, { useContext, useState } from 'react';
import { Button, Modal as AntdModal, ModalProps as AntdModalProps, FormProps, Form } from 'antd';
import Action from './Action';

export type onCancel = (e?: React.MouseEvent<HTMLElement>) => void;

export interface ModalProps<Values = any> extends AntdModalProps {
  children?: React.ReactNode;
  onFinish?: FormProps<Values>['onFinish'];
  initialValues?: FormProps<Values>['initialValues'];
  formProps?: FormProps<Values>;
  renderFooter?: (props: { onCancel: onCancel }) => React.ReactNode;
  onCancel?: onCancel;
}

function Modal<T = any>(props: ModalProps<T>) {
  const { destroyCallback, ...contextRest } = useContext(Action.Context);
  const {
    children,
    afterClose,
    onFinish,
    initialValues,
    formProps = {},
    onCancel,
    okText = '确认',
    okButtonProps,
    cancelText = '取消',
    cancelButtonProps,
    renderFooter,
    ...rest
  } = { ...contextRest, ...props };

  const handleAfterClose = () => {
    afterClose?.();
    destroyCallback?.();
  };

  // 关闭
  const handleOnCancel = (e?: React.MouseEvent<HTMLElement>) => {
    onCancel?.(e);
  };

  const handleOnFinish = async (values: T) => {
    await onFinish?.(values);
    handleOnCancel?.();
  };
  let _children = children;

  return (
    <>
      <AntdModal
        destroyOnClose
        modalRender={(node) => (
          <Form initialValues={initialValues} onFinish={handleOnFinish} {...formProps}>
            {node}
          </Form>
        )}
        afterClose={handleAfterClose}
        onCancel={handleOnCancel}
        footer={
          renderFooter ? (
            renderFooter({ onCancel: handleOnCancel })
          ) : (
            <>
              <Button onClick={handleOnCancel} {...cancelButtonProps}>
                {cancelText}
              </Button>
              <Button type="primary" htmlType="submit" {...okButtonProps}>
                {okText}
              </Button>
            </>
          )
        }
        {...rest}
      >
        <Action.ContextReset>{_children}</Action.ContextReset>
      </AntdModal>
    </>
  );
}

export default Modal;
