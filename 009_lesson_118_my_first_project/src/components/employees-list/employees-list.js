import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data}) => {

    const elements = data.map((item) => {
        const {id, ...itemProp} = item;
        return (
            <EmployeesListItem key={id} {...itemProp}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;