const CardButtons = ({ moveA, moveB, onAttack, onHeal }) => {
    return (
        <div className="pt-2 justify-between align-center flex flex-row">
            <div className="p-1">
                <button onClick={onAttack} className={`w-[80px] h-[40px] rounded text-xs ${moveA.color}`}>{moveA.name}</button>
                <div className="p-[8px] w-[80px] rounded relative bg-black text-white text-[10px]">
                    {moveA.desc}
                </div>
            </div>
            <div className="p-1">
                <button onClick={onHeal} className={`w-[80px] h-[40px] rounded text-xs ${moveB.color}`}>{moveB.name}</button>
                <div className="p-[8px] w-[80px] flex rounded relative text-white bg-black text-[10px]">
                    {moveB.desc}
                </div>
            </div>

        </div>
    );
};

export default CardButtons;