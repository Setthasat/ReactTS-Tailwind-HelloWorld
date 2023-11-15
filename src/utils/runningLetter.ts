import { SetStateAction } from "react";

export function runningLetter(letters: string | String, setDisplayLetterH: { (value: SetStateAction<string>): void; (arg0: any): void; }, setDisplayLetterE: { (value: SetStateAction<string>): void; (arg0: any): void; }, setDisplayLetterL1: { (value: SetStateAction<string>): void; (arg0: any): void; }, setDisplayLetterL2: { (value: SetStateAction<string>): void; (arg0: any): void; }, setDisplayLetterL3: { (value: SetStateAction<string>): void; (arg0: any): void; }, setDisplayLetterO: { (value: SetStateAction<string>): void; (arg0: any): void; }, setDisplayLetterW: { (value: SetStateAction<string>): void; (arg0: any): void; }, setDisplayLetterR: { (value: SetStateAction<string>): void; (arg0: any): void; }, setDisplayLetterD: { (value: SetStateAction<string>): void; (arg0: any): void; }) {
    const H = () => {
        let index: number = 2;
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
        let index: number = 1;
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
    const L1 = () => {
        let index: number = 0;
        const intervalId = setInterval(() => {
            setDisplayLetterL1(letters.charAt(index));
            index++;

            if (index >= 12) {
                clearInterval(intervalId);
            }
        }, 250);

        return () => {
            clearInterval(intervalId);
        };
    };
    const L2 = () => {
        let index: number = 2;
        const intervalId = setInterval(() => {
            setDisplayLetterL2(letters.charAt(index));
            index++;

            if (index >= 12) {
                clearInterval(intervalId);
            }
        }, 250);

        return () => {
            clearInterval(intervalId);
        };
    };
    const L3 = () => {
        let index: number = 3;
        const intervalId = setInterval(() => {
            setDisplayLetterL3(letters.charAt(index));
            index++;

            if (index >= 12) {
                clearInterval(intervalId);
            }
        }, 250);

        return () => {
            clearInterval(intervalId);
        };
    };
    const O = () => {
        let index: number = 6;
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
        let index: number = 8;
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
        let index: number = 2;
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
        let index: number = 0;
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
    L1();
    L2();
    L3();
    O();
    W();
    R();
    D();

}