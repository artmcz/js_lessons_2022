import './app.css';

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App() {

    const data = [
        {name: 'Alex Poll', salary:9800, increase:true, id:1, idd:1},
        {name: 'Jonny Depp', salary:1800, increase:true, id:2, idd:2},
        {name: 'Harry Potter', salary:3520, increase:false, id:3, idd:3},
    ];

    return (
        <div className='app'>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;