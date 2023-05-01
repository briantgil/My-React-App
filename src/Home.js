import CardRow from './Components/CardRow';

export default function Home(){

    const col_count = 3;
    const row_count = 3;
    const card_data = ["This is some text within a card body."];

    const rows = [];
    for (let i=0; i<row_count; i++){
        rows.push(<CardRow columns={col_count} data={card_data} />);
    }

    return (
            <div>
                    <p>Hello world!</p>
                    {rows}
            </div>
    );
}
