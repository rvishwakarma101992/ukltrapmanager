function routes_demo($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/company_pages/create_project");
    $stateProvider
    .state('company_pages', {
        abstract: true,
        url: "/company_pages",
        templateUrl: "views/common/content.html",
    })
    // .state('dashboards', {
    //     abstract: true,
    //     url: "/dashboards",
    //     templateUrl: "views/common/content.html",
    // })
    // .state('dashboards.dashboard_1', {
    //     url: "/dashboard_1",
    //     templateUrl: "views/dashboard_1.html",
    // })
    .state('company_pages.components', {
        url: '/components',
        templateUrl: 'company_pages/components/components.ng.html',
        controller: 'controller_components',
        data: { pageTitle: 'components' }
    })
    .state('company_pages.add_trap', {
        url: '/add_trap',
        templateUrl: 'company_pages/add_trap/add_trap.ng.html',
        controller: 'controller_add_trap',
        data: { pageTitle: 'Add Trap' }
    })
    .state('company_pages.rectify_trap', {
        url: '/rectify_trap',
        templateUrl: 'company_pages/rectify_trap/rectify_trap.ng.html',
        controller: 'controller_rectify_trap',
        data: { pageTitle: 'Rectify Trap' }
    })
    .state('company_pages.all_traps', {
        url: '/all_traps',
        templateUrl: 'company_pages/all_traps/all_traps.ng.html',
        controller: 'controller_all_traps',
        data: { pageTitle: 'All Traps' }
    })
    .state('company_pages.rectification_trap', {
            url: '/rectification_trap',
            templateUrl: 'company_pages/rectification_trap/rectification_trap.ng.html',
            controller: 'controller_rectification_trap',
            data: { pageTitle: 'Edit Trap' }
        })
    .state('company_pages.create_project', {
            url: '/create_project',
            templateUrl: 'company_pages/create_project/create_project.ng.html',
            controller: 'controller_create_project',
            data: { pageTitle: 'Create Project' }
        }) 
    .state('company_pages.all_projects', {
            url: '/all_projects',
            templateUrl: 'company_pages/all_projects/all_projects.ng.html',
            controller: 'controller_all_projects',
            data: { pageTitle: 'All Projects' }
        })
    .state('company_pages.edit_project', {
            url: '/edit_project',
            templateUrl: 'company_pages/edit_project/edit_project.ng.html',
            controller: 'controller_edit_project',
            data: { pageTitle: 'Edit Project' }
        })

    .state('company_pages.create_candidate', {
        url: '/create_candidate',
        templateUrl: 'company_pages/create_candidate/create_candidate.ng.html',
        controller: 'controller_create_candidate',
        data: { pageTitle: 'Create Candidate' }
    })

    .state('company_pages.edit_candidate', {
        url: '/edit_candidate',
        templateUrl: 'company_pages/edit_candidate/edit_candidate.ng.html',
        controller: 'controller_edit_candidate',
        data: { pageTitle: 'Update Candidate' }
    })

    .state('company_pages.list_candidates', {
        url: '/list_candidates',
        templateUrl: 'company_pages/list_candidates/list_candidates.ng.html',
        controller: 'controller_list_candidates',
        data: { pageTitle: 'All Candidates' }
    })

    .state('company_pages.view_candidates', {
        url: '/view_candidates',
        templateUrl: 'company_pages/view_candidates/view_candidates.ng.html',
        controller: 'controller_view_candidates',
        data: { pageTitle: 'View All Candidates' }
    })
    ;
}
angular
    .module('inspinia')
    .config(routes_demo)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });