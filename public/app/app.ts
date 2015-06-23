/// <reference path="../typings/tsd.d.ts" />

import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

angular.module('app', [
	'ui.router',
	Common.name,
	Components.name
]).directive('app', AppComponent);
