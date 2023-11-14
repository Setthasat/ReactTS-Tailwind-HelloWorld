import "./HelloWorld.css";
import { useState, useEffect } from "react";


 
const HelloWorld: React.FC = () => {
    const letters : String = 'ABCDEFGHIJKLMNOPQRSTUVW';
    const [displayLetterH, setDisplayLetterH] = useState('');
    const [displayLetterE, setDisplayLetterE] = useState('');
    const [displayLetterL, setDisplayLetterL] = useState('');
    const [displayLetterO, setDisplayLetterO] = useState('');
    const [displayLetterW, setDisplayLetterW] = useState('');
    const [displayLetterR, setDisplayLetterR] = useState('');
    const [displayLetterD, setDisplayLetterD] = useState('');


    useEffect(() => {
        const H = () => {
            let index : number = 0;
            const intervalId = setInterval(() => {
                setDisplayLetterH(letters.charAt(index));
                index++;

                if (index >= 8) {
                    clearInterval(intervalId);
                }
            }, 320);

            return () => {
                clearInterval(intervalId);
            };
        };
        const E = () => {
            let index : number = 0;
            const intervalId = setInterval(() => {
                setDisplayLetterE(letters.charAt(index));
                index++;

                if (index >= 5) {
                    clearInterval(intervalId);
                }
            }, 300);

            return () => {
                clearInterval(intervalId);
            };
        };
        const L = () => {
            let index : number = 0;
            const intervalId = setInterval(() => {
                setDisplayLetterL(letters.charAt(index));
                index++;

                if (index >= 12) {
                    clearInterval(intervalId);
                }
            }, 350);

            return () => {
                clearInterval(intervalId);
            };
        };
        const O = () => {
            let index : number = 0;
            const intervalId = setInterval(() => {
                setDisplayLetterO(letters.charAt(index));
                index++;

                if (index >= 15) {
                    clearInterval(intervalId);
                }
            }, 170);

            return () => {
                clearInterval(intervalId);
            };
        };
        const W = () => {
            let index : number = 0;
            const intervalId = setInterval(() => {
                setDisplayLetterW(letters.charAt(index));
                index++;

                if (index >= 23) {
                    clearInterval(intervalId);
                }
            }, 120);
            return () => {
                clearInterval(intervalId);
            };
        };
        const R = () => {
            let index : number = 0;
            const intervalId = setInterval(() => {
                setDisplayLetterR(letters.charAt(index));
                index++;

                if (index >= 18) {
                    clearInterval(intervalId);
                }
            }, 200);

            return () => {
                clearInterval(intervalId);
            };
        };
        const D = () => {
            let index : number = 0;
            const intervalId = setInterval(() => {
                setDisplayLetterD(letters.charAt(index));
                index++;

                if (index >= 4) {
                    clearInterval(intervalId);
                }
            }, 300);

            return () => {
                clearInterval(intervalId);
            };
        };


        H();
        E();
        L();
        O();
        W();
        R();
        D();

    }, [letters]);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex justify-center items-center h-screen mx-[0.5rem]">
                <p>{displayLetterH}</p>
                <p>{displayLetterE}</p>
                <p>{displayLetterL}</p>
                <p>{displayLetterL}</p>
                <p>{displayLetterO}</p>
            </div>
            <div className="flex justify-center items-center h-screen mx-[0.5rem]">
                <p>{displayLetterW}</p>
                <p>{displayLetterO}</p>
                <p>{displayLetterR}</p>
                <p>{displayLetterL}</p>
                <p>{displayLetterD}</p>
            </div>

        </div>
    );
};

export default HelloWorld;
