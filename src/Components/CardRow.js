import CardItem from "./CardItem";

export default function CardRow({columns, increment, data}){

    const row = [];
    for (let i=0;i<columns;i++){
        row.push(<CardItem text={data[0]} id={i+increment} />);
    }

    return (
                <div className="card-group">
                    {row}
                </div>
    );

}
