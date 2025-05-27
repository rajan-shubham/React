import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h1>OOP's !!! </h1>
            <h2>Something Went Wrong</h2>
            <h2>{err.status}  {err.data}</h2>
        </div>
    );
};

export default Error;