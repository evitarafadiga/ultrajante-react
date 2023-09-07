export const Topbar = (showTrivia) => {
    return (

        <div>
            <nav className="bg-slate-800 shadow-lg bg-opacity-90">
                <div className="max-w-6xl mx-screen px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div className="overflow">
                                <a href="/#" className="flex items-center py-4 px-2">
                                    <img
                                        src="logo.png"
                                        alt="Logotipo Ultrajante"
                                        className="transition-transform h-8 w-300 mr-2 hover:transform-y-5"
                                    />
                                    <span className="font-semibold text-gray-500 text-lg" />
                                </a>
                            </div>
                            <div className="hidden md:flex items-center space-x-1">
                                <a href="/" className="py-4 px-2 text-gray-500 hover:border-b-4 border-yellow-500 font-semibold hover:text-cyan-500 transition duration-300">
                                    <div className="flex align-bottom justify-center">
                                        <div className="m-[5px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                                            </svg>
                                        </div>
                                        <div>Home</div>
                                    </div>
                                </a>
                                {/*
                                <a
                                    href="/login" className="py-4 px-2 text-gray-500 hover:border-b-4 border-yellow-500 font-semibold hover:text-cyan-500 transition duration-300">
                                    <div className="flex align-bottom justify-center">
                                        <div className="m-[5px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                            </svg>
                                        </div>
                                        <div>Perfil</div>
                                    </div>
                                </a>
                                
                                <a
                                    href="/" className="py-4 px-2 text-gray-500 hover:border-b-4 border-yellow-500 font-semibold hover:text-cyan-500 transition duration-300" onClick={() => showTrivia}>
                                    <div className="flex align-bottom justify-center">
                                        <div className="m-[5px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-joystick" viewBox="0 0 16 16">
                                                <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z" />
                                                <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z" />
                                            </svg>
                                        </div>
                                        <div>Trivia</div>
                                    </div>
                                </a>
                                */}
                            </div>
                        </div>
                        {/*
                        <div className="flex items-center justify-end">
                            <button className="btn float-right">Sair</button>
                        </div>
                        */}
                    </div>
                </div>
            </nav>
        </div>
    );
};