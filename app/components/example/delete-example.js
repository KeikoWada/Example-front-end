import Component from '@ember/component';

export default Component.extend({
  actions: {
    delete () {
      console.log(this.get('example'))
      if(confirm('delete that thing?'))
      this.sendAction('delete', this.get('example'))
    }
  }
});
