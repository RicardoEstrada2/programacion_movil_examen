import React from "react";
import {Table} from "antd";

const Tabla = ({data}) => {

    const dataSource = data;

    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre',
        },
        {
            title: 'Apellido Paterno',
            dataIndex: 'app',
            key: 'app',
        },
        {
            title: 'Apellido Paterno',
            dataIndex: 'apm',
            key: 'apm',
        },
        {
            title: 'Telefono',
            dataIndex: 'telefono',
            key: 'telefono',
        },
    ]
    return(
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default Tabla;