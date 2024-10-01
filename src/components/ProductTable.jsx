import React from 'react'
import Table from './Table'
import ProductItem from './products/ProductItem'
import ProductCategoryHeader from './products/ProductCategoryHeader'

const ProductTable = ({headers, products}) => {

    const sportinggoods = products.filter((product) => product.type == 1);
    const electronics = products.filter((product) => product.type == 2);

    return (
        <div>
        <Table.Tablecontainer>
          <Table.THead>
            <Table.Row>
                <Table.ColumnHeader>Name</Table.ColumnHeader>
                <Table.ColumnHeader>Price</Table.ColumnHeader>
            </Table.Row>
          </Table.THead>
    
          <Table.TBody>
    
            <ProductCategoryHeader category={headers[0]}/>
          {sportinggoods.map((sportingGood) => (
            <ProductItem name={sportingGood.name} price={sportingGood.price}/>
          ))}
            
            <ProductCategoryHeader category={headers[1]}/>
    
            {electronics.map(({id,name,price,type}) => (
              <ProductItem key={`${type}-${id}`} name={name} price={price}/>
            ))}
    
          </Table.TBody>
          <Table.TFoot>
            <Table.Row>
                <Table.ColumnHeader colspan="2">TOTAL</Table.ColumnHeader>
                <Table.Column>${products.reduce((previousvalue, currentvalue) => previousvalue + currentvalue.price, 0)}</Table.Column>
            </Table.Row>
          </Table.TFoot>
          </Table.Tablecontainer>
        </div>
      )
    }
    
    export default ProductTable