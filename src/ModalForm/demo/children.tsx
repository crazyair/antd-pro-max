import React from 'react';
import { Button, Input } from 'antd';
import { Form } from 'antd-modal-form';

const FormDemo = () => {
  // 该组件只有弹窗打开才会加载，关闭之后才卸载，确保 form 实例在关闭弹窗后卸载。
  const [form] = Form.useForm();
  const name = Form.useWatch('name', form);
  return (
    <Form.Modal
      // 可以是调用详情接口动态配置
      title="标题"
      formProps={{ form }}
      onFinish={(v) => console.log(v)}
      // 可以是调用详情接口动态配置
      initialValues={{ name: '张三' }}
    >
      <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
        <Input autoFocus />
      </Form.Item>
      <div>name：{name}</div>
    </Form.Modal>
  );
};

const Demo = () => {
  return (
    <Form.Action action={<Button>open</Button>}>
      <FormDemo />
    </Form.Action>
  );
};

export default Demo;
