import { useState } from "react";
import { motion } from "framer-motion";

import './SearchBar.css';

const SearchBar: React.FC = () => {



    const [search, setSearch] = useState({
        title: ''
    });

    const onChangeInput = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;

        setSearch(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = (event: any) => {
        event.preventDefault();
        setSearch(() => ({
            title: ''
        }));
    };

    return (
        <div className='absolute top-[45%] mx-[30%]'>
            <div className="w-[45rem] h-[5rem] rounded-full">
                <form onSubmit={handleSubmit}>
                    <motion.label>
                        <motion.input
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2 }}
                            type="text"
                            name='title'
                            value={search.title}
                            onChange={onChangeInput}
                            placeholder="Why u read bái chī ?"
                            className="text-[2rem] rounded-full font-bold h-[5rem] min-w-full shadow-2xl  pl-[14rem] placeholder:-px-[20px] placeholder:font-bold focus:outline-none focus:ring-slate-800 focus:ring-2 font-sans" />
                    </motion.label>
                </form>
            </div>

        </div>

    );
};

export default SearchBar;
