import CardItem from "./CardItem";

export default function CardRow({columns, data}){

    const row = [];
    for (let i=0;i<columns;i++){
        row.push(<CardItem text={data[0]}/>);
    }

    return (
                <div className="card-group">
                    {row}
                </div>
    );

}
