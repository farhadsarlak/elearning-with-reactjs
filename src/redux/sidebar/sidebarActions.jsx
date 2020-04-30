import {sidebarType} from "./sidebarTypes";

export const toggleSidebar = () =>({
   type:sidebarType.TOGGLE_SIDEBAR
});

export const hideSidebar =() =>({
    type:sidebarType.HIDE_SIDEBAR
});
