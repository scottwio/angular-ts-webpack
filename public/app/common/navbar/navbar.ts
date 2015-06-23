import navbarComponent from './navbar.component'; 

let navbarModule = angular.module('navbar', [
	'ui.router'
])
.directive('navbar', navbarComponent);

export default navbarModule;