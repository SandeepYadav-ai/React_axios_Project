export const Form  = ()=> {
    return(
        <form action="" className="mx-auto flex max-w-lg flex-row items-center gap-3">
            <div className="flex flex-cols gap-3">
                <label htmlFor="title"></label>
                <input 
                    type="text"
                    autoCapitalize="off"
                    id="title"
                    name="title"
                    placeholder="Add Title"
                    className="min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                 />
            </div>

            <div>
                <label htmlFor=""></label>
                <input 
                    type="text"
                    autoCapitalize="off"
                    id="body"
                    name="body"
                    placeholder="Add Post"
                    className="min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                 />
            </div>    
            <button type="submit"
            className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 
            active:scale-[0.98]"
            >Submit</button>        
        </form>
    );
};