import { useSearchParams } from "react-router-dom";
import { useGetChallengeByPageQuery, useGetChallengeBySortedIdQuery, useGetChallengeQuery } from "../services/challengeApi";

const  useFetchChallenge = () => {
    const [searchParams] = useSearchParams();
    const sortById = searchParams.get('filterBy') || 'all';
    let data = {};

    //Pagination
    const page  = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
    console.log(page);

    const { data: allData, error: allError, isLoading: allLoading } = useGetChallengeQuery(page);
    const { data: sortedData, error: sortedError, isLoading: sortedLoading } = useGetChallengeBySortedIdQuery(sortById, page);
    const { data: pageData, error: pageError, isLoading: pageLoading } = useGetChallengeByPageQuery(page);

    //const data = pageData || sortedData || allData || {};

    const isLoading = allLoading || sortedLoading || pageLoading;
    const error = allError || sortedError || pageError;
    
   
    if(pageData) data = pageData;
    if(allData) data = allData;
    if(sortedData) data = sortedData;
    
    console.log(pageData);
    
    return { data, error, isLoading };
}

export default useFetchChallenge;