import { useSearchParams } from "react-router-dom";

const Filter = ({options, filterField}) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (e) => {
        searchParams.set(filterField, e.target.value);
        setSearchParams(searchParams);
    }
    return (
        <select onChange ={handleChange} className="border-2 border-gray-300 rounded-md p-2 mb-4" >
            {options.map((option) => (
                    <option key={option.id} value={option.id}>
                    {option.name}
                    </option>
                ))}
        </select>
    )
    }

  export default Filter;
   