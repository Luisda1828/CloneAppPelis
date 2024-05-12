

export function SecondComponet({ id, poster, onSelect }) {
        function peliSelected() {
            onSelect();
        }
    
        return (
            <div onFocus={peliSelected} tabIndex="0" className="min-h-[20rem] min-w-[15rem] focus:outline-none focus:scale-[1.17] transition-all duration-300">
                <img className="min-h-[20rem] min-w-[15rem] focus:outline-none" src={poster} alt="" />
            </div>
        );
    }
    
