import React, { useContext } from 'react';
import styles from './LoginForm.module.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const LoginForm = () => {
  const { login, loginError } = useContext(UserContext);

  return (
    <div className={styles.loginForm}>
      <Form
        name="normal_login"
        className={styles.from}
        initialValues={{
          remember: true,
        }}
        validateMessages={{
          required: 'This field is required!',
          types: {
            email: 'Not a validate email!',
          },
        }}
        onFinish={e => {
          login(e.email, e.password);
        }}
      >
        <Form.Item
          name="email"
          help={loginError || undefined}
          validateStatus={!!loginError ? 'error' : undefined}
          rules={[
            {
              required: true,
              // message: 'Please input your Username!',
              type: 'email',
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          help={loginError || undefined}
          validateStatus={!!loginError ? 'error' : undefined}
          rules={[
            {
              required: true,
              // message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link className={styles.forgot} to="/forgot">
            Forgot password
          </Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.button}>
            Log in
          </Button>
          Or <Link to="/reg">register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
