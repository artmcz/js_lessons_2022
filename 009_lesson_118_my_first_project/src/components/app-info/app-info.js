import "./app-info.css";

const AppInfo = ({increased, emplAlex, employees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employees} Alex: {emplAlex}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;