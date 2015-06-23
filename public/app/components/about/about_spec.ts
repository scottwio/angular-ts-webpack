import AboutModule from './about'
import AboutController from './about.controller';
import AboutComponent from './about.component';

describe('About', ()=>{
	let $rootScope,
	makeController;
	
	beforeEach(window.module(AboutModule.name));
	beforeEach(inject((_$rootScope_)=>{
		$rootScope = _$rootScope_;
		makeController = ()=>{
			return new AboutController();
		};
	}));
	
	describe('Module', ()=>{
		// test things about the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
	});
	
	describe('Controller', ()=>{
		// test your controller here
		
		it('should have a name property [REMOVE]', ()=>{ // erase me if you remove this.name from the controller
			let controller = makeController();
			expect(controller["name"]).toBeDefined();
		});
	});
	
	describe('Component', ()=>{
			// test the component/directive itself
			let component = AboutComponent();
			
			it('should use controllerAs', ()=>{
				expect(component["controllerAs"]).toBeDefined();
			});
			
			it('should use the right controller', ()=>{
				expect(component.controller).toEqual(AboutController);
			});
	});
});

 




