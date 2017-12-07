export default function() {


  this.get('/list-items', () => {
    return listItems;
  });


}




const listItems = {
  data: [{
      id: 1,
      type: 'list-item',
      attributes: {
        name: 'foo_1',
      },
      relationships: {
        things: {
          data: [{
              type: 'thing',
              id: 1
            },
            {
              type: 'thing',
              id: 2
            },
            {
              type: 'thing',
              id: 3
            },
          ]
        }
      }
    }, {
      id: 2,
      type: 'list-item',
      attributes: {
        name: 'foo_2',
      },
      relationships: {}
    }, {
      id: 3,
      type: 'list-item',
      attributes: {
        name: 'foo_3',
      },
      relationships: {}
    }

  ],
  included: [{
      id: 1,
      type: 'thing',
      attributes: {
        name: 'something1'
      }
    },
    {
      id: 2,
      type: 'thing',
      attributes: {
        name: 'something2'
      }
    },
    {
      id: 3,
      type: 'thing',
      attributes: {
        name: 'something3'
      }
    }
  ]
}