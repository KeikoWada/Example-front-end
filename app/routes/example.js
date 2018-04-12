import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    // go get the necessary list
    console.log(params)
    return this.get('store').findRecord('example', params.example_id)
  },

  actions: {
    // console.log('hi')
    // persistItem (item) {
    // // persistItem: function (item) {
    //   item.save()
    // },
    // deleteItem (item) {
    //   item.destroyRecord()
    //     // .then(() => this.transitionTo('index'))
    //     // .catch(itWasnt)
    // },
    deleteExample (example) {
      console.log('delete')
      example.destroyRecord()
        // .then(() => this.transitionTo('examples'))
    },
    // // addItemToList (itemPojo) {
    // //   const item = this.get('store').createRecord('item', itemPojo)
    // //   return item.save()
    // // },
    updateExample (example) {
      console.log(example)
      example.save()
    }
  }
});
