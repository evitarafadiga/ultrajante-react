export const EndMenu = ({ winner, onStartClick }) => {
    return (
      <div className={'justify-center align-center flex flex-col p-5'}>
        <h1>{winner.name} venceu!</h1>
        <button className={'text-bold text-xl w-[200px] h-[80px] bg-gradient-to-r from-red-900 to-red-700 hover:from-pink-500 hover:via-orange-500 hover:to-yellow-500 border-none rounded-xl'} onClick={onStartClick}>
          Jogar novamente
        </button>
      </div>
    );
};