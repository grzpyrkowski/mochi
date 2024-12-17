export default function HeaderButton({ value }: { value: string }) {
    return (
        <button className="roboto-light uppercase">
            {value}
        </button>
    );
}