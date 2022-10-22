import React from 'react';
import { Button, Input } from 'antd';
import { Action, Form } from 'antd-pro-max';

const Demo = () => {
  return (
    <Action action={<Button>open</Button>}>
      <Form.Modal title="标题" onFinish={(v) => console.log(v)} initialValues={{ name: '张三' }}>
        <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
          <Input autoFocus />
        </Form.Item>
      </Form.Modal>
    </Action>
  );
};

export default Demo;
