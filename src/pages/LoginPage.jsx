import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
    const { loginSubmit } = useLogin();

    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        validationSchema:Yup.object({
            email:Yup.string().email('Invalid email address').required('Required'),
            password:Yup.string().min(8,'Password must be at least 8 characters').required('Required')
        }),
        onSubmit: values => loginSubmit(values),
    })


    return (
        <>
        <div  className="flex justify-center h-[100vh] bg-slate-200 place-items-center">
            <div className=" sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 rounded-xl">
                <form  className="space-y-6" onSubmit={formik.handleSubmit}>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in to your account</h2>
                       </div>
                    <div>
                        <label  className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div className="mt-2">
                            <input id="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            {formik.touched.userName && formik.errors.email 
                            ? (
                                <p className="text-red-700 text-sm">{formik.errors.email}</p>
                            ): null }
                        </div>
                    </div>
                    <div>
                        <label  className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div className="mt-2">
                            <input id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}  type="Password" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            {formik.touched.password && formik.errors.password 
                            ? (
                                <p className="text-red-700 text-sm">{formik.errors.password}</p>
                            ): null }
                        </div>
                    </div>   
                    <button
                        type="submit"
                        disabled = {formik.touched.password && formik.errors.password || formik.touched.email && formik.errors.email}
                        className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm 
                        disabled:bg-gray-400 disabled:cursor-not-allowed hover:enabled:bg-gray-950 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Log In
                    </button>
                    </form>
            </div>
        </div>     
    </>
    )

}

export default LoginPage;