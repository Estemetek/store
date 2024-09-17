import React from 'react'

const Tablecontainer = ({children}) => {
  return <table >{children}</table>;
};

const THead = ({children}) => {
    return <thead >{children}</thead>
};

const TBody = ({children}) => {
    return <tbody >{children}</tbody>
};

const TFoot = ({children}) => {
    return <tfoot >{children}</tfoot>
};

const Row = ({children}) => {
    return <tr >{children}</tr>
};

const Column = ({children}) => {
    return <td >{children}</td>
};

const ColumnHeader = ({children}) => {
    return <td >{children}</td>
};

const Table = {
    Tablecontainer,
    THead,
    TBody,
    TFoot,
    Row,
    Column,
    ColumnHeader
};

export default Table;
