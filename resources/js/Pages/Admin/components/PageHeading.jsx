export default function PageHeading({children}) {
    return <div className="flex items-center justify-between space-y-2">
        {children}
    </div>
}

export const PageHeadingTitle = ({children}) => {
    return <h2 className="text-3xl font-bold tracking-tight">{children}</h2>;
}

export const PageHeadingActions = ({children}) => {
    return <div className="hidden md:flex items-center space-x-2">{children}</div>
}

PageHeading.Title = PageHeadingTitle;
PageHeading.Actions = PageHeadingActions;