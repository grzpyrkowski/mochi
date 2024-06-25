import piekny from "../data/pictures/piekny.jpg";

export default function LandingPage() {
    return (
        <>
            <section className="bg-mochi-gray text-mochi-orange text-8xl">
                <h1 className="s">mo.chi</h1>
            </section>
            <section className="bg-mochi-gray">
                <div className="fan mx-8 my-5 flex">
                    <img className="fan-photo" src={piekny} alt="piekny"/>
                    <img className="fan-photo" src={piekny} alt="piekny"/>
                    <img className="fan-photo" src={piekny} alt="piekny"/>
                </div>
            </section>
        </>
    )
}