import { Form as AntdForm } from 'antd';

import Action from './Action';
import Modal from './Modal';

type InternalFormType = typeof AntdForm;

interface FormInterface extends InternalFormType {
  useForm: typeof AntdForm.useForm;
  useWatch: typeof AntdForm.useWatch;
  Action: typeof Action;
  Modal: typeof Modal;
}

const Form = AntdForm as FormInterface;
Form.useForm = AntdForm.useForm;
Form.useWatch = AntdForm.useWatch;
Form.Action = Action;
Form.Modal = Modal;

export default Form;
