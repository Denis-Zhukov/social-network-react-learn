import {Navbar} from "./Navbar";
import StoreContext from "../../StoreContext";

export const NavbarContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => <Navbar {...store.getState().navbar}/>}
        </StoreContext.Consumer>
    )
}