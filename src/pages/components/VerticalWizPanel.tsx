type Props = {
    url1: string;
    url2: string;
}

export default function VerticalWizPanel({ url1, url2 } : Props) {
    return (
        <>
            <img className="wiz-photo" alt={'part of ' + {url1} + ' visualisation'} src={url1}></img>
            <img className="wiz-photo" alt={'part of ' + {url2} + ' visualisation'} src={url2}></img>
        </>
    )
}