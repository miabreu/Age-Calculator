import './custom.css';
import {useFormik} from "formik";
import * as Yup from "yup";


const InputFields = ({onSubmit}) => {
    const currentYear = new Date().getFullYear();

    const validationSchema = Yup.object().shape({
        day: Yup.number().typeError("Must not be empty").min(1, 'Must be a valid day').max(31, 'Must be a valid day'),
        month: Yup.number().typeError("Must not be empty").min(1, 'Must be a valid month').max(12, 'Must be a valid month'),
        year: Yup.number().typeError("Must not be empty").min(1).max(currentYear, 'Must be in a past'),
    });


    const formik = useFormik({
        initialValues:{
            day:null,
            month:null,
            year:null
        },
        validationSchema: validationSchema,
        onSubmit
    })


    return (
        <form className="space-y-20 md:space-y-12" onSubmit={formik.handleSubmit}>
            <div className="flex space-x-2 md:space-x-5 max-w-xs md:max-w-md md:mr-32">
                <div className="relative flex flex-col justify-center items-start space-y-1 ">
                    <label className={`input-desc ${formik.errors.day&& formik.touched.day?'text-error':''}`}>day</label>
                    <input id="day" name="day" value={formik.values.day} onChange={formik.handleChange} placeholder="DD"
                           className={`input-container ${formik.errors.day && formik.touched.day?'error-border': ''}`}/>
                    {formik.touched.day && formik.errors.day ? (
                        <div className={`absolute p-1 left-0 top-16  text-[0.6rem] text-red-500  md:text-[0.8rem]`}>{formik.errors.day}</div>
                    ) : null}
                </div>


                <div className="relative flex flex-col justify-center items-start space-y-1 ">
                    <label className={`input-desc ${formik.errors.month && formik.touched.month?'text-error':''}`}>month</label>
                    <input type="number" name="month" value={formik.values.month} onChange={formik.handleChange} placeholder="MM"
                           className={`input-container ${formik.errors.month && formik.touched.month?'error-border': ''}`}/>
                    {formik.touched.month && formik.errors.month ? (
                        <div className="absolute py-1 left-0 top-16 text-[0.6rem] text-red-500 md:text-[0.8rem]">{formik.errors.month}</div>
                    ) : null}
                </div>

                <div className="relative flex flex-col justify-center items-start space-y-1">
                    <label className={`input-desc ${formik.errors.year && formik.touched.year ?'text-error':''}`}>year</label>
                    <input type="number" name="year" value={formik.values.year} onChange={formik.handleChange} placeholder="YYYY"
                           className={`input-container ${formik.errors.year && formik.touched.year?'error-border': ''}`}/>
                    {formik.touched.year && formik.errors.year ? (
                        <div className= "p-1 absolute left-0 top-16 text-[0.6rem] text-red-500  md:text-[0.8rem]">{formik.errors.year}</div>
                    ) : null}
                </div>
            </div>
            <div className=" relative border-b border-b-gray-200 w-[100%]  ">
                <div className="absolute inset-0  flex justify-center items-center z-10 md:justify-end ">
                    <button type="submit" className="group">
                        <div
                            className=" flex justify-center items-center rounded-full w-20 h-20 bg-purple-600 duration-200 group-hover:opacity-80 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44">
                                <g fill="none" stroke="#FFF" stroke-width="2">
                                    <path
                                        d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/>
                                </g>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </form>)

}
export default InputFields
