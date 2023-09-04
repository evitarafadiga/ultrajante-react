export const Healthbar = ({hp, maxHp}) => {
    return (
        <div className="w-[200px]">
        <div className={`relative box-border w-[200px] h-[23px] text-green-500 align-center justify-center bg-red-700 h-[24px] rounded border border-black w-full`}>
            <div className={`text-1xl relative bg-orange-500 duration-700 ease-in-out w-full h-[23px] rounded`} style={{width: (hp/maxHp) * 200 + 'px'}}>
                <div className="relative bg-green-800 transition duration-150 ease-in-out w-full h-[23px] rounded" style={{width: (hp/maxHp) * 200 + 'px'}} >
                <p className="pl-2">
                    HP: {hp} / {maxHp}
                </p>
                </div>
            </div>
        </div>
        </div>
    );
};

