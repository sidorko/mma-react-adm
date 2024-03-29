import React, { useContext } from 'react';
import EditableTable from '../EditableTable/EditableTable';
import { OrganizationsContext } from '../../contexts/OrganizationsContext';

const OrganizationTable = () => {
  const {
    organizations,
    loading,
    getOrganizations,
    addOrganization,
    updateOrganization,
  } = useContext(OrganizationsContext);

  // const nameFilters = [
  //   { text: 'Smith', value: 'Smith' },
  //   { text: 'Bush', value: 'Bush' },
  //   { text: 'Alice', value: 'Alice' },
  // ];

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      // width: '25%',
      editable: false,
      required: false,
    },
    {
      title: 'name',
      dataIndex: 'name',
      // width: '15%',
      editable: true,
      required: true,
    },
  ];

  const newItemTemplate = {
    id: 'new',
    name: 'kek',
    age: '',
    address: '',
  };

  return (
    <EditableTable
      title={'Организации'}
      columns={columns}
      dataSource={organizations}
      loading={loading}
      newItemTemplate={newItemTemplate}
      createNewItem={addOrganization}
      updateItem={updateOrganization}
      reload={getOrganizations}
    />
  );
};

export default OrganizationTable;
