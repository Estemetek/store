import React from 'react'
import Table from './Table'
import ProductItem from './products/ProductItem'
import ProductCategoryHeader from './products/ProductCategoryHeader'

const ProductTable = ({headers, products}) => {

    const sportingGoods = products.filter((product) => product.type == 1);
    const electronics = products.filter((product) => product.type == 2);

  return(
    <div>
        <Table.Tablecontainer>
            <Table.THead>
                <Table.Row>
                    <Table.ColumnHeader>Name</Table.ColumnHeader>
                    <Table.ColumnHeader>Price</Table.ColumnHeader>
                </Table.Row>
            </Table.THead>

            <Table.TBody>
                <ProductCategoryHeader text={headers[0]}/>

                {sportingGoods.map((sportingGood) => (
                    <ProductItem 
                        key = {`${sportingGood.type}``${sportingGood.id}`}
                        name = {sportingGood.name}
                        price = {sportingGood.price}
                    />
                ))}

                {electronics.map((sportingGood) => (
                    <ProductItem 
                        key = {`${sportingGood.type}``${sportingGood.id}`}
                        name = {sportingGood.name}
                        price = {sportingGood.price}
                    />
                ))}
            </Table.TBody>
        </Table.Tablecontainer>
    </div>
  )
}

export default ProductTable
