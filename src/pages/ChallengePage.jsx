import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import ChallengeCard from "../features/ChallengeCard";
import useFetchChallenge from "../hooks/useFetchChallenge";
import { OPTIONS } from "../utils/constants";

const ChallengePage = () => {
    const { data } = useFetchChallenge();
 
    return (
        <div className="challenge-page">
            <h1>Challenges Page</h1>
            <Filter filterField={'filterBy'} options={OPTIONS}/>

            {/* TO BE IMPLEMENTED */}
            {/* <Filter filterField={'difficulty'} options={DIFFICULTY}/> */}

            <ChallengeCard data={data.data} />
            <Pagination count={data.length} total={data?.pagination?.total}/>
        </div>
    );

}

export default ChallengePage;