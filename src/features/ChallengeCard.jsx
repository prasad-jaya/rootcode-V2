import { useNavigate } from "react-router-dom";

const ChallengeCard = ({ data } = {}) => {

    const navigate = useNavigate();

    const handleChallengeClick = (id) => {
        console.log("Challenge clicked", id);
        navigate(`qId=${id}`);
    }

    const renderChallenge = data?.map((data) => {
        return (
            <div key={data.id} className="bg-slate-0 rounded-[18px] border-2 border-grey-600 ">
                <div className="grid grid-cols-3 justify-between px-3 pb-4">
                    <div className="col-span-2 py-2">
                        <p className="text-sm font-bold text-gray-600 pb-2 w-[18ch] truncate">{data.challenge}</p>
                        <p className="text-sm  text-gray-500 truncate w-[20ch]">{data.level}</p>
                    </div>
                    <div className="flex flex-col items-end py-2 ">
                    <button className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm 
                        disabled:bg-gray-400 disabled:cursor-not-allowed hover:enabled:bg-gray-950 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer" onClick={() => handleChallengeClick(data.id)}>Get Started</button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="grid grid-cols-4 gap-12 p-4">
            {renderChallenge}
        </div>
    )


}

export default ChallengeCard;