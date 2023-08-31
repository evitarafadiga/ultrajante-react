const CardButtons = ({ moveA, moveB }) => {
    return (
        <div className="pr-[18px] pt-2 flex flex-row">
            <div className="p-[2px]">
                <button className={`w-[100px] h-[30px] rounded text-xs ${moveA.color} w-[130px]`}>{moveA.name}</button>
                <div class="hidden group-hover:block p-[12px] w-[100px] rounded relative transition ease-out bg-black text-white text-[10px]">
                    {moveA.desc}
                </div>
            </div>
            <div className="p-[2px]">
                <button className={`w-[100px] h-[30px] rounded text-xs ${moveB.color} w-[130px]`}>{moveB.name}</button>
                <div className="hidden group-hover:block p-[12px] w-[100px] rounded relative transition ease-out text-white bg-black text-[10px]">
                    {moveB.desc}
                </div>
            </div>

        </div>
    );
};

export default CardButtons;