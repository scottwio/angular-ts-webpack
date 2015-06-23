import NavbarModule from './navbar'
import NavbarController from './navbar.controller';
import NavbarComponent from './navbar.component';

describe('Navbar', ()=>{
	let $rootScope,
	makeController;
	
	beforeEach(window.module(NavbarModule.name));
	beforeEach(inject((_$rootScope_)=>{
		$rootScope = _$rootScope_;
		makeController = ()=>{
			return new NavbarController();
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
			let component = NavbarComponent();
			
			it('should use controllerAs', ()=>{
				expect(component["controllerAs"]).toBeDefined();
			});
			
			it('should use the right controller', ()=>{
				expect(component.controller).toEqual(NavbarController);
			});
	});
});

 




