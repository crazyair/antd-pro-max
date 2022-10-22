import React from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.less';

export function rootContainer(container: React.ReactNode) {
  return <ConfigProvider>{container}</ConfigProvider>;
}
