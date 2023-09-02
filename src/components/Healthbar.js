export const Healthbar = ({width, datavalue, datatotal}) => {
    return (
        <div className={`text-green-600 align-center justify-center bg-red-700 h-[24px] rounded border border-black`} style={{width: (width / datatotal) * 100 + 'px'}}>
            <div className={`bg-orange-500 duration-300 ease-in-out w-full h-[23px] rounded`} style={{width:datavalue + '%'}}>
                <div className="bg-green-800 transition duration-150 ease-in-out w-full h-[23px] rounded" style={{width:datavalue + '%'}}></div>
                {datavalue}
            </div>
        </div>
    );
};

