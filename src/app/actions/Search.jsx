'use server'
import React from 'react'
import db from "../../db/db";
import Product from '../../models/Products'

async function Search(searchTerm) {

        try {

            await db.connect()
            console.log('working')
          const products = await Product.find(
            {
             '$or':[
              {titulo: {$regex:searchTerm}}
             ]
            }
             
            );
          res.json(products);
          console.log(products)
        } catch (error) {
        //   res.status(500).json({ error: 'An error occurred while searching for products.' });
        console.log('error')
        }
     
}

export default Search