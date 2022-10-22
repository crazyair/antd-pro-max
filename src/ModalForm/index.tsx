import { Form as AntdForm, Input } from 'antd';
import Action from './Action';
import Modal from './Modal';

type InternalFormType = typeof AntdForm;

interface FormInterface extends InternalFormType {
  useForm: typeof AntdForm.useForm;
  Modal: typeof Modal;
  Action: typeof Action;
  Input: typeof Input;
}

const Form = AntdForm as FormInterface;
Form.useForm = AntdForm.useForm;
Form.Modal = Modal;
Form.Action = Action;

Form.Input = Input;

export default Form;
