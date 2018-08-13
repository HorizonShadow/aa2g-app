import { observable, action } from 'mobx';

class AppStore {
    @observable drawerOpen = false;  

    @action.bound
    openDrawer() {
        this.drawerOpen = true;
        
    }

    @action.bound
    closeDrawer() {
        this.drawerOpen = false;
    }

    @action.bound
    toggleDrawer() {
        this.drawerOpen = !this.drawerOpen;
        console.log('toggling drawer');
    }
}

export default AppStore;