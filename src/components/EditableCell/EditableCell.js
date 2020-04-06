import React from 'react';
import { Form, Input, InputNumber } from 'antd';
import InputTags from './InputTags';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  required,
  placeholder,
  rules = [],
  ...restProps
}) => {
  const inputNode =
    inputType === 'number' ? (
      <InputNumber placeholder={placeholder} />
    ) : inputType === 'tags' ? (
      // <Input placeholder={placeholder} />
      <InputTags />
    ) : (
      <Input placeholder={placeholder} />
    );
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: required,
              message: `Please Input ${title}!`,
            },
            ...rules,
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default EditableCell;
