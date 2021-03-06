/* @ngInject */
export default class UsersList {
    constructor(usersService) {
        this.usersService = usersService;
    }

    $onInit() {
        this.fetchUsers();
    }

    fetchUsers() {
        this.usersService.getData({}).then(response=> {
            this.users = response.data;
        });
    }
}
