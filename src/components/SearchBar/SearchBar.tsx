import { useState } from "react";

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
        <div className="absolute top-[45%] mx-[30%]">
            <div className="bg-white w-[45rem] h-[5rem] rounded-full">
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="text"
                            name='title'
                            value={search.title}
                            onChange={onChangeInput}
                            className="text-[2rem] rounded-full font-bold h-[5rem] min-w-full shadow-2xl  pl-[4rem] placeholder:-px-[20px] placeholder:font-bold focus:outline-none focus:ring-slate-800 focus:ring-2 font-sans" />
                    </label>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
