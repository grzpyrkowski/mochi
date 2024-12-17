type Props = {
    url1: string;
    url2: string;
}

export default function VerticalWizPanel({ url1, url2 } : Props) {
    return (
        <>
            <img className="wiz-photo" alt='' src={url1}></img>
            <img className="wiz-photo" alt='' src={url2}></img>
        </>
    )
}