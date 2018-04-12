import Route from '@ember/routing/route';

export default Route.extend({

  model () {
    return this.get('store').findAll('example')
  },
  actions: {
    createList (examplePojo) {
      console.log('hi')
      console.log(examplePojo.text)
      this.get('store').createRecord('example', examplePojo)
      // first 'example' hsould be the model name, second examplePojo is coming from this.get('newExample')
      .save()
    },
    // saveUpdate (examplePojo) {
    //   this.get('store').createRecord('example', examplePojo)
    //   .save()
    // },
    delete (examplePojo) {
      console.log(this.get('example'))
      console.log(examplePojo)
      if(confirm('delete that thing?'))
      this.get('example').destroyRecord('example', examplePojo)
      // examplePojo.destroyRecord()
    }
  }
})
