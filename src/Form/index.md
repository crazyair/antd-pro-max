## Form.Modal

### 使用

<code src="./demo/base.tsx" title="基础弹窗表单">

<code src="./demo/children.tsx" title="子组件弹窗表单">

<code src="./demo/menu.tsx" title="测试">

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| initialValues | 表单默认值 | Form['initialValues'] | - |
| onFinish | 提交表单方法(返回 resolve 关闭 Modal，反之 reject) | Form['onFinish'] | - |
| renderFooter | 自定义按钮 | (props: { onCancel: onCancel }) => React.ReactNode | - |
| onCancel | 关闭方法 | (e?: React.MouseEvent<\HTMLElement>) => void | - |
| formProps | [Form API](#form-api) | - | - |
| ... | [Antd Modal API](https://ant.design/components/modal-cn/#API) | - | - |

### Form.Modal 实现原理

<code src="./demo/index.tsx" title="实现原理">
