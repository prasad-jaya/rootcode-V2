import { useGetChallengeByIdQuery } from "../services/challengeApi";

const useQuestions = () => {

    const { data } = useGetChallengeByIdQuery(id);
    console.log(data);

    return data;

}
export default useQuestions;