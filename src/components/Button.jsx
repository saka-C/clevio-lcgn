const Button = ({ text, page = "" }) => {
    return(
        <a href={`${page}`} className="inline-block bg-gradient-to-r from-secondary-500 to-secondary-300 px-5 py-3 rounded-3xl"><h4 className="sm:text-xl text-base">{text}</h4></a>
    )
}
export default Button