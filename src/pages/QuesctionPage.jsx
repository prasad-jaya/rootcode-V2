
import { useGetChallengeByIdQuery } from "../services/challengeApi";

import { useParams } from "react-router-dom";

const QuesstionPage = () => {
    const { qId } = useParams();
    const [field, direction] = qId.split('=');
    console.log(field);

    const { data } = useGetChallengeByIdQuery(direction);
    const quections = data?.data[0]?.questions
  
    let renderQuestion = quections?.map((item) => {
        return (
            <div key={data.id} className="bg-slate-0 rounded-[18px] border-2 border-grey-600 grid gap-5 mb-4">
                <div className="grid grid-cols-3 justify-between px-3 pb-4">
                    <div className="col-span-3 py-2 ">
                        <p className="text-sm font-bold text-gray-600 pb-2 w-md truncate">{item.question}</p>
                        <p className="text-sm  text-gray-500 truncate w-[20ch]">{item.id}</p>
                        <button className="float-right w-[100px] flex justify-center rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm 
                         hover:enabled:bg-gray-950 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer" >Start</button>
                    </div>
                </div>
            </div>
        )
    })
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Questions</h1>
            {renderQuestion} 
        </div>
    )
}

export default QuesstionPage;