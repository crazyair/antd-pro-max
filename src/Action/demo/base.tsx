import React, { useContext } from 'react';
import { Button } from 'antd';
import { Action } from 'antd-pro-max';

const Child = () => {
  const { destroyCallback } = useContext(Action.Context);

  return (
    <div>
      <Button onClick={destroyCallback}>卸载</Button>
    </div>
  );
};

const Demo = () => {
  return (
    <Action action={<Button>加载</Button>}>
      <Child />
    </Action>
  );
};

export default Demo;
