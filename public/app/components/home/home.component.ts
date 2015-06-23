import controller from './home.controller';

let homeComponent = function(){
	return {	
		templateUrl:'app/components/home/home.html',
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};



export default homeComponent;