import './app-filter.css';

const AppFilter = () => {
    const btnType = 'button';

    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type={btnType}>
                    All employees
            </button>
            <button
                className="btn btn-outline-light"
                type={btnType}>
                    For promotion
            </button>
            <button
                className="btn btn-outline-light"
                type={btnType}>
                    Salary above $1000
            </button>
        </div>
    )
}

export default AppFilter;