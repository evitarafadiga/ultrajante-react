const CardButtons = ({ moveA, moveB, moveC, onAttack, onHeal, onMagic }) => {
    return (
        <div className="pt-2 justify-between align-center flex flex-row">
            <div className="group">
                <button onClick={onAttack} className={`w-[80px] h-[40px] rounded text-xs ${moveA.color}`}>{moveA.name}
                </button>
                <div className="hidden group-hover:block p-[8px] w-[80px] rounded relative bg-black text-white text-[10px]">
                    {moveA.desc}
                </div>
            </div>
            <div className="group">
                <button onClick={onHeal} className={`w-[80px] h-[40px] rounded text-xs ${moveB.color}`}>{moveB.name}
                </button>
                <div className="hidden group-hover:block p-[8px] w-[80px] flex rounded relative text-white bg-black text-[10px]">
                    {moveB.desc}
                </div>
            </div>
            <div className="group">
                <button onClick={onMagic} className={`w-[80px] h-[40px] rounded text-xs ${moveC.color}`}>{moveC.name}
                </button>
                <div className="hidden group-hover:block p-[8px] w-[80px] flex rounded relative text-white bg-black text-[10px]">
                    {moveC.desc}
                </div>
            </div>

        </div>
    );
};

export default CardButtons;