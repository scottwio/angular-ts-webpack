
import controller from './about.controller';


let aboutComponent = function(){
	return {
		templateUrl:'app/components/about/about.html',
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default aboutComponent;