import { Link } from "react-router-dom"

type Props = {
    value: string;
    url: string;
}

export default function MochiButton({value, url}: Props) {
    return (
        <Link to={url}>
            <button className="mochi-button">
                {value}
            </button>
        </Link>
    )
}