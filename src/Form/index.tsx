import { Form as AntdForm } from 'antd';

import Modal from './Modal';

type InternalFormType = typeof AntdForm;

interface FormInterface extends InternalFormType {
  useForm: typeof AntdForm.useForm;
  useWatch: typeof AntdForm.useWatch;
  Modal: typeof Modal;
}

const Form = AntdForm as FormInterface;
Form.useForm = AntdForm.useForm;
Form.useWatch = AntdForm.useWatch;
Form.Modal = Modal;

export default Form;
