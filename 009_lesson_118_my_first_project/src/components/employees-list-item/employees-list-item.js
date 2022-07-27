import './employees-list-item.css';

const EmployeesListItem = ({name, salary, increase}) => {

    let className = "list-group-item d-flex justify-content-between";

    if (increase) {
        className += " increase";
    }

    return (
        <li className={className}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" value={salary + '$'} readOnly={true}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button" className="btn-trash">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star btn-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;