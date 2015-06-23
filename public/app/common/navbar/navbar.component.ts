import controller from './navbar.controller';

let navbarComponent = function(){
	return {
		templateUrl:'app/common/navbar/navbar.html',
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};


export default navbarComponent;