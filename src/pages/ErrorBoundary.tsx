import MochiButton from "../components/MochiButton"

export default function ErrorBoundary() {
    return(
        <div className="mt-36">
            <p className="text-2xl">Niestety tutaj nasze usługi nie sięgają, prosimy o powrót do strony głównej :)</p>
            <MochiButton value="Powrót na stronę główną" url="/"/>
        </div>
    )
}