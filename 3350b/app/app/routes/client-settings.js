import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
      if (this.get('oudaAuth').get('isAuthenticated')=== false) {
        this.transitionTo('landing-page');
      }
    },
});
