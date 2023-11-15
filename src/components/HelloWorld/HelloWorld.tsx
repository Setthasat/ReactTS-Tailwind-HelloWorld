import "./HelloWorld.css";
interface HelloWorldProps {
    // Define the props you need
    // For example, assuming each displayLetter and setDisplayLetter pair is a prop
    displayLetterH: string;
    displayLetterE: string;
    displayLetterL1: string;
    displayLetterL2: string;
    displayLetterL3: string;
    displayLetterO: string;
    displayLetterW: string;
    displayLetterR: string;
    displayLetterD: string;

    // ... repeat for other letters
}

const HelloWorld: React.FC<HelloWorldProps> = ({ displayLetterH, displayLetterE, displayLetterL1, displayLetterL2, displayLetterL3, displayLetterO, displayLetterW, displayLetterR, displayLetterD }) => {

    return (
        <div className="">
            <div className="flex justify-center items-center text-[550%] text-gray-200 font-bold absolute top-[25%] right-[10%] ">
                <div className="flex justify-center items-center  mx-[0.75rem] gap-2">
                    <p>consloe.log("</p>
                    <p>{displayLetterH}</p>
                    <p>{displayLetterE}</p>
                    <p>{displayLetterL1}</p>
                    <p>{displayLetterL2}</p>
                    <p>{displayLetterO}</p>
                </div>
                <div className="flex justify-center items-center mx-[0.75rem] gap-2">
                    <p>{displayLetterW}</p>
                    <p>{displayLetterO}</p>
                    <p>{displayLetterR}</p>
                    <p>{displayLetterL3}</p>
                    <p>{displayLetterD}</p>
                    <p>")</p>
                </div>
            </div>


        </div>
    );
};

export default HelloWorld;
