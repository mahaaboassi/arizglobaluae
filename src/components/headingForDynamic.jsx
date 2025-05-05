const HeadingForDynamic = ({title, subTitle})=>{
    return(<div className="heading-dynamic">
        {/* <h3>{title}</h3> */}
        <h2>{subTitle}</h2>
        <h1>{title}</h1>
    </div>)
}

export default HeadingForDynamic