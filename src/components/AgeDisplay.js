import './custom.css';

const AgeDisplay = (props) =>{


    return <div className="flex flex-col justify-center items-start space-y-3 ">

     <div className="flex space-x-4  ">
         <h1 className="text-purple-600">{props.data.year || "--"}</h1>
         <h1>years</h1>
     </div>

        <div className="flex space-x-4 ">
            <h1 className=" text-purple-600">{ props.data.month || "--"}</h1>
            <h1>months</h1>
        </div>

        <div className="flex space-x-4 ">
            <h1 className="text-purple-600">{ props.data.day || "--" }</h1>
            <h1>days</h1>
        </div>

    </div>
}
export default AgeDisplay;
