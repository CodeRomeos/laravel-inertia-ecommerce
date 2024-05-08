export function TextMuted({children}) {
    return <span className="text-sm text-muted-foreground">{children}</span>;
}
export function TextLarge({ children, className = "" }) {
    return (
        <div className={`text-lg font-semibold ` + className}>{children}</div>
    );
}
