export const menus = [
    {
        menuName: "dashboard"
    },
    {
        menuName: "flow1",
        children: [
            {
                menuName: "subItem1"
            },
            {
                menuName: "subItem2"
            }
        ]
    },
    {
        menuName: "flow2"
    },
    {
        menuName: "flow3",
        children: [
            {
                menuName: "subItem1"
            },
            {
                menuName: "subItem2"
            },
            {
                menuName: "subItem3"
            },
            {
                menuName: "subItem4",
                children: [
                    {
                        menuName: "child-sub1"
                    }
                ]
            }
        ]
    },
]