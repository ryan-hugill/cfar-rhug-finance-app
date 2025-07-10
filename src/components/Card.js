export function Card({as: Component = 'div', className = '', children, ...props}) {
    return(
        <Component className={`card ${className}`} {...props}>
            {children}
        </Component>
    );
}
