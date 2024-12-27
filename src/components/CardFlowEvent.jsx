const CardFlowEvent = ({children, event, date}) => {
    return(
        <div className="flex flex-col items-center text-center">
            <div className="bg-thirdnary-500 mb-4 w-14 h-14 flex justify-center items-center rounded-full text-primary-500 text-2xl">{children}</div>
            <h3 className="text-white">{event}</h3>
            <h4 className="text-thirdnary-500">{date}</h4>
        </div>
    )
}
export default CardFlowEvent