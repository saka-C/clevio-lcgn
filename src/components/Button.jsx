const Button = ({ text, page = "" }) => {
    return(
        <a href={`${page}`} className="inline-block bg-gradient-to-r hover:bg-gradient-to-l from-secondary-500  hover:from-primary-500  to-secondary-300  hover:to-primary-300 hover:-translate-y-1 hover:scale-110 hover:text-white duration-200 px-5 py-3 rounded-3xl"><h4 className="sm:text-xl text-base">{text}</h4></a>
    )
}
export default Button