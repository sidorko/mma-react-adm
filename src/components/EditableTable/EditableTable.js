import React from 'react';
import { Table } from 'antd';
import EditableCell from '../EditableCell/EditableCell';

const EditableTable = ({
  columnsSettings,
  dataSource,
  editingKey,
  // ...props
}) => {
  const columns = columnsSettings.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        //TODO сделать нормальный инпут тайп
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: editingKey === record.key,
        required: col.required,
      }),
    };
  });

  return (
    <Table
      components={{
        body: {
          cell: EditableCell,
        },
      }}
      rowClassName={() => 'editable-row'}
      bordered
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export default EditableTable;