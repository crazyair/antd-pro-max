import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';

const Child = ({
  open,
  onCancel,
  afterClose,
}: {
  open?: boolean;
  onCancel?: () => void;
  afterClose?: () => void;
}) => {
  useEffect(() => {
    console.log('加载了');
    return () => {
      console.log('卸载了');
    };
  }, []);

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      onOk={onCancel}
      afterClose={afterClose}
      title="标题"
      modalRender={(node) => (
        <Form onFinish={(v) => console.log(v)} initialValues={{ name: '张三' }}>
          {node}
        </Form>
      )}
      okButtonProps={{ htmlType: 'submit' }}
    >
      <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
        <Input autoFocus />
      </Form.Item>
    </Modal>
  );
};

const Demo = () => {
  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setOpen(!!load);
  }, [load]);

  return (
    <>
      <Button onClick={() => setLoad(true)}>open</Button>
      {(open || load) && (
        <Child open={open} onCancel={() => setOpen(false)} afterClose={() => setLoad(false)} />
      )}
    </>
  );
};

export default Demo;
