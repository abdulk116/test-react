import React, { useState } from 'react'
import { menus } from './utils'

const NavItem = ({ menu, id, handleArrowClick, selectedIds }) => {
    const isMenuOpen = selectedIds[id] || false;

    return (
        <>
            <div className='menu-items'>
                <div className='menu-names'>{menu.menuName}</div>
                <span className={`material-symbols-outlined arrow-span ${isMenuOpen ? "rotate" : ""}`} onClick={() => handleArrowClick(id)}>
                    arrow_drop_down
                </span>
            </div>
            <div>
                {menu?.children?.length > 0 && isMenuOpen && (
                    <div style={{ paddingLeft: "10px" }}>
                        {menu.children.map((subMenu, i) => (
                            <NavItem key={`m-${i}`} menu={subMenu} id={`${id}s${i}`} handleArrowClick={handleArrowClick} selectedIds={selectedIds} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

const SideBar = () => {
    const [selectedIds, setSelectedIds] = useState({})

    const handleArrowClick = (id) => {
        console.log(id, 'id')
        const keyItems = { ...selectedIds }
        // console.log(Object.hasOwn(keyItems, id), 'test')
        if (Object.hasOwn(keyItems, id)) {
            for (let key in keyItems) {
                if (id.includes(key)) {
                    if (key === id) {
                        keyItems[id] = !keyItems[id]
                    } else {
                        keyItems[key] = true;
                    }
                } else {
                    keyItems[key] = false;
                }
            }
        } else {
            keyItems[id] = true
            for (let key in keyItems) {
                if (!(id.includes(key))) {
                    keyItems[key] = false;
                }
            }
        }
        console.log(keyItems, "keyIems")
        setSelectedIds({ ...keyItems })
    }

    return (
        <div className='sidebar-column'>
            <h3>Test projects</h3>
            <div className="link-elements">
                {menus.map((menu, i) => (
                    <NavItem key={`m-${i}`} menu={menu} id={`m${i}`} handleArrowClick={handleArrowClick} selectedIds={selectedIds} />
                ))}
            </div>
        </div>
    )
}

export default SideBar