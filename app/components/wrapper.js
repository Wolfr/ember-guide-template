import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

export default class styleguideComponent extends Component {
  @service router;

  get routeTree() {
    var data = this.router._router._routerMicrolib.recognizer.names;

    var myRoutes = Object.keys(data);

    // Filter out the ones containing some choice words
    let filteredRoutes = myRoutes.filter(function(el) {
      return !el.includes("loading")
          && !el.includes("error")
          && !el.includes("styleguide")
          && !el.includes("debug")
          && !el.includes("application")
          && !el.includes("index")
  	});
    //console.log(filteredRoutes);
    
    // The first level of our nav
    let lvl1 = filteredRoutes.map(
      el => el.split('.')[0]
  	).filter( onlyUnique );
    
    //console.log(lvl1);

    return filteredRoutes;
  }
  
}
