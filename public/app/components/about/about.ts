import aboutComponent from './about.component'; 

let aboutModule = angular.module('about', [
	'ui.router'
])
.config(($stateProvider)=>{
	$stateProvider
		.state('about', {
			url: '/about',
			abstract: true,
			template: '<ui-view></ui-view>'
		})
		.state('about.state1', {
			url: '',
			template: '<about></about>'
		})
		.state('about.state2', {
			url: '/state2',
			template: 'The second state'
		})
})
.directive('about', aboutComponent);

export default aboutModule;