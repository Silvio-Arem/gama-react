import "./styles.css";

interface BoxProps{
    background: string;
}

export default function Box(props: BoxProps) {
    return (<section className="box"></section>);
}