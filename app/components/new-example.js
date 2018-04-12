import Component from '@ember/component';

export default Component.extend({
  // newExample: {
  //   text: ''
  // },
  //
  //

  didInsertElement () {
      this.set('newExample', {
        text: ''
      })
    },

  actions: {
    createExample () {
      this.sendAction('create', this.get('newExample'))
      // this.set('newExample.text', '')
    }
    // saveChange () {
    //   console.log('newExample:', newExample)
    //   // this.sendAction('saveChange', this.get('newExample'))
    // }
  }
})
