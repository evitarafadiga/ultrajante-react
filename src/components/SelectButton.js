export const SelectButton = ({setOpponent, battleOpponent}) => {
    return(
        <div className="hidden group-hover:block">
            <button onClick={() => setOpponent(battleOpponent)} type="button" className="text-bold text-xl w-[160px] h-[50px] bg-gradient-to-r from-red-900 to-red-700 hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500 border-none rounded-xl">
            Selecionar
            </button>
        </div>
    );
};