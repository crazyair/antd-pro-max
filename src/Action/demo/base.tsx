import React, { useContext } from 'react';
import { Button } from 'antd';
import { Action } from 'antd-pro-max';

const Child = () => {
  const { destroyCallback } = useContext(Action.Context);

  return <Button onClick={destroyCallback}>卸载本组件</Button>;
};

const Demo = () => {
  return (
    <Action action={<Button>加载子组件</Button>}>
      <Child />
    </Action>
  );
};

export default Demo;
