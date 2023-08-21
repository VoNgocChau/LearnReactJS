import React from 'react'

const TableHeader = (props) => {

    const { sortColumn, onSort } = props;


    const raiseSort = (path) => {
        const sort = { ...sortColumn };
        if (sort.path === path) {
            sort.order = (sort.order === "asc") ? "desc" : "asc";
        } else {
            sort.path = path;
            sort.order = "asc";
        }
        onSort(sort)
    }

    const renderSortIcon = (column) => {
        if (column.path !== sortColumn.path) return null;
        if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>
    }
    return (
        <thead>
            <tr>
                {props.columns.map(column =>
                    <th key={column.path || column.key}
                        onClick={() => raiseSort(column.path)}
                        className='clickable'>
                        
                        {column.label}{renderSortIcon(column)}
                    </th>)}
            </tr>
        </thead>
    )
}

export default TableHeader