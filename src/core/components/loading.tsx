import {Oval} from "react-loader-spinner";

export default function Loading() {
    return (
        <div className={"flex items-center justify-center h-screen"}>
            <Oval
                color={"#2D3748"}
                height={100}
                width={100}
            />
        </div>
    );
};
