export default function HeaderButton({ value }: { value: string }) {
    return (
        <button className="uppercase">
            {value}
        </button>
    );
}