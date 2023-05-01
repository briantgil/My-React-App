import CardRow from './Components/CardRow';

export default function Home(){

    const col_count = 3;
    const row_count = 3;
    const card_data = ["This is some text within a card body."];

    const rows = [];
    let j = 0;
    for (let i=0; i<row_count; i++){
        rows.push(<CardRow id={"r"+i.toString()} columns={col_count} increment={j} data={card_data} />);
        j += 3;
    }

    return (
            <div>
                    <p>Hello world!</p>
                    {rows}
            </div>
    );
}
