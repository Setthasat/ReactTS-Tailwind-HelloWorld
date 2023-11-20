import HelloWorld from "../components/HelloWorld/HelloWorld";
import { useEffect, useState } from "react";
import { runningLetter } from "../utils/runningLetter";
import SearchBar from "../components/SearchBar/SearchBar";

const Helloworld: React.FC = () => {

  const letters: String = 'ABCDEFGHIJKLMNOPQRSTUVW';
  const [displayLetterH, setDisplayLetterH] = useState('');
  const [displayLetterE, setDisplayLetterE] = useState('');
  const [displayLetterL1, setDisplayLetterL1] = useState('');
  const [displayLetterL2, setDisplayLetterL2] = useState('');
  const [displayLetterL3, setDisplayLetterL3] = useState('');
  const [displayLetterO, setDisplayLetterO] = useState('');
  const [displayLetterW, setDisplayLetterW] = useState('');
  const [displayLetterR, setDisplayLetterR] = useState('');
  const [displayLetterD, setDisplayLetterD] = useState('');

  useEffect(() => {
    runningLetter(letters, setDisplayLetterH, setDisplayLetterE, setDisplayLetterL1, setDisplayLetterL2, setDisplayLetterL3, setDisplayLetterO, setDisplayLetterW, setDisplayLetterR, setDisplayLetterD);
  }, [letters]);

  return (
    <div className="bg-slate-700 w-screen flex-col h-screen justify-center items-center">
      <HelloWorld displayLetterH={displayLetterH} displayLetterE={displayLetterE} displayLetterL1={displayLetterL1} displayLetterL2={displayLetterL2} displayLetterL3={displayLetterL3} displayLetterO={displayLetterO} displayLetterW={displayLetterW} displayLetterR={displayLetterR} displayLetterD={displayLetterD} />

      {displayLetterH === 'H' && displayLetterE === 'E' && (displayLetterL1 && displayLetterL2 && displayLetterL3 === 'L') && displayLetterO === 'O' && displayLetterW === 'W' && displayLetterR === 'R' && displayLetterD === 'D' ? (
        <SearchBar />
      ) : (
        <></>
      )}

    </div>
  );
};

export default Helloworld;