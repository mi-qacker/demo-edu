import { Button, Form, Input } from "antd";
import { useCallback } from "react";

export type LoginProps = {
  formId: string;
  username: string;
  password: string;
  onSuccess?: () => void;
};

type FieldType = {
  username?: string;
  password?: string;
};

export const Login: React.FC<LoginProps> = (props) => {
  const onFinish = useCallback(
    (values: FieldType) => {
      if (
        props.username === values.username &&
        props.password === values.password
      ) {
        props.onSuccess?.();
      }
    },
    [props]
  );

  return (
    <Form
      name={props.formId}
      onFinish={onFinish}
      initialValues={{ username: props.username, password: props.password }}
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
