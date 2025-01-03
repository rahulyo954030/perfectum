const Section = (props: any) => {
    return (
        <div className={`main-container ${props.mainClasses ? props.mainClasses : ''} `} style={props.style}>
            <div className={`${props.small ? 'small-container' : 'big-container'} ${props.classes ? props.classes : ''}`}>
                {props.children}
            </div>
        </div>
    )
}

export default Section;
