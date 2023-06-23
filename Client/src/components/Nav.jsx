import SearchBar from './SearchBar';
import {NavLink} from 'react-router-dom';
import styled from "./Nav.module.css"

const Nav= ({onSearch}) => {

    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <button className={styled.botonAbout}>
                <NavLink to='/about' className={styled.botonlink}>ABOUT</NavLink>
            </button>

            <button className={styled.botonHome}>
                <NavLink to='/home' className={styled.botonlink}>HOME</NavLink>
            </button>

            <button className={styled.botonFavorites}>
                <NavLink to='/favorites' className={styled.botonlink}>FAVORITES</NavLink>
            </button>
        </div>
    )
}

export default Nav;