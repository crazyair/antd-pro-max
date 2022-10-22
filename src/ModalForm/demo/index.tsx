import { Button, Input, Modal } from 'antd';
import React from 'react';

import { Form } from 'antd-modal-form';

const Demo = () => {
  return (
    <>
      <Form.Action action={<Button>open</Button>}>
        <Form.Modal title="标题" onFinish={(v) => console.log(v)} initialValues={{ name: '张三' }}>
          <Form.Item name="name" label="姓名">
            <Input autoFocus />
          </Form.Item>
        </Form.Modal>
      </Form.Action>
    </>
  );
};

export default Demo;
