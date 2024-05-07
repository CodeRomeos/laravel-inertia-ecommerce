export const navItems = [
    {
        title: "Dashboard",
        href: route("admin.dashboard"),
        icon: "dashboard",
        label: "Dashboard",
    },
    // {
    //     title: "Customer",
    //     href: "#",
    //     icon: "users",
    //     label: "Customer",
    //     permit: "view customers|create customers|edit customers",
    //     items: [
    //         {
    //             title: "New Customer",
    //             href: route("customers.create"),
    //             icon: "userRoundPlus",
    //             label: "New Customer",
    //             permit: "create customers",
    //         },
    //         {
    //             title: "All Customer",
    //             href: route("customers.index"),
    //             icon: "list",
    //             label: "All Customer",
    //             permit: "view customers",
    //         },
    //     ],
    // },
    {
        title: "Users",
        href: "#",
        icon: "users",
        label: "Users",
        permit: "view users|create users|edit users",
        items: [
            {
                title: "Add User",
                href: route("admin.users.create"),
                icon: "userRoundPlus",
                label: "Add User",
                permit: "create users",
            },
            {
                title: "All User",
                href: route("admin.users.index"),
                icon: "list",
                label: "All User",
                permit: "view users",
            },
        ],
    },
    {
        title: "Roles",
        href: "#",
        icon: "users",
        label: "Roles",
        permit: "view roles|create roles|edit roles",
        items: [
            {
                title: "Add Role",
                href: route("admin.roles.create"),
                icon: "userRoundPlus",
                label: "Add User",
                permit: "create roles",
            },
            {
                title: "All Roles",
                href: route("admin.roles.index"),
                icon: "list",
                label: "All Roles",
                permit: "view roles",
            },
        ],
    },
    {
        title: "Acitivity Logs",
        href: route("admin.activityLogs.index"),
        icon: "list",
        label: "Acitivity Logs",
        permit: "view activity logs",
    },
];
