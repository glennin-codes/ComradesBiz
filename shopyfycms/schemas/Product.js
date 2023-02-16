export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Id',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
      
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      
    },
    // {
    //   name: 'image',
    //   title: 'Image2',
    //   type: 'image',
      
    // },
    {
        name: 'description',
        title: 'Description',
        type: 'string'
      },
    {
        name: 'category',
        title: 'Category',
        type: 'string'
      },
    {
        name: 'company',
        title: 'Company',
        type: 'string'
      },
    {
        name: 'stars',
        title: 'Rating',
        type: 'number'
      },
    {
        name: 'reviews',
        title: 'Reviews',
        type: 'number'
      },
   
  ],
}
