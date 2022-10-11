import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data, onDelete}) => {

    const elements = data.map((item) => {
        const {id, ...itemProp} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProp}
                onDelete={() => onDelete(id)}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;