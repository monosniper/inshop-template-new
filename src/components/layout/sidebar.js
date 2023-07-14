import React from 'react';
import SupportWidget from "@/components/widgets/support";
import Categories from "@/components/Categories";
import {observer} from "mobx-react-lite";
import store from "@/store";

const Sidebar = () => {
    return <aside className={"side" + (store.isSubMenuShow ? " side_active" : '')}>
        <div className="side__title">Explore</div>
        <div className="side__body">
            <nav className="side-menu">
                <ul className="side-menu__list">
                    <li className="side-menu__item">
                        <button onClick={store.toggleSubMenu} className="side-menu__link side-menu__link_m _icon-arr"
                                type="button">
                            <span>Back</span>
                        </button>
                    </li>
                    <Categories />
                </ul>
            </nav>
        </div>
        <div className="side__footer">
            {/*<SupportWidget />*/}
        </div>
    </aside>;
};

export default observer(Sidebar);