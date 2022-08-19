import {Navbar} from "./Navbar";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    navItems: state.navbar.navItems
})

const mapDispatchToProps = dispatch => ({});

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);