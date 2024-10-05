import logo from "../data/pictures/landing_page/logo.svg"

export default function LandingPage() {
    return (
        <>
            <section className="bg-mochi-gray text-mochi-orange text-2xl">
                <div className="my-16">
                    <img alt="logo-mochi" src={logo}></img>
                </div>
                <div>
                    <p className="roboto-thin w-1/2">Tworzymy wnętrza z pasją do ludzi, architektury i designu - tworzymy przestrzenie z pasją i dbałością o każdy detal. 
                        Wierzymy, że wnętrza odzwierciedlają osobowość i styl życia, dlatego każdy projekt jest unikalny i dopasowany do Twoich potrzeb. Zapraszamy do współpracy!
                    </p>
                </div>
            </section>
            <section className="bg-mochi-gray">
                
            </section>
        </>
    )
}