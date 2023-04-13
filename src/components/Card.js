const Card = (props) => {
    return (<div className="flex justify-center items-center bg-gray-100 h-screen">
        <div className="flex flex-col md:pr-20 pb-16 space-y-20 md:space-y-12  bg-white p-8 rounded-l-3xl rounded-tr-3xl rounded-br-[9rem] md:rounded-br-[14rem]">
            {props.children}
        </div>
    </div>)
}
export default Card;
