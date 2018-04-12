import Component from '@ember/component';

export default Component.extend({
  didInsertElement () {
      this.set('newExample', {
        text: ''
      })
    },

  actions: {
      update (example) {
        console.log('this.get(example)', this.get('example'))
        this.sendAction('update', example)
        this.set('newExample', '')
      }
    }
});
