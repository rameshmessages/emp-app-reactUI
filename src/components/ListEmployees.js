import axios from "axios";
import { useState } from "react";

export default function ListEmployeesApp()
{
    const [employees, setEmployee] = useState([])

    function getEmployees() {
        console.log('Fetching LS Tech Employees')
        axios.get('http://localhost:8080/employees')
             .then( (response) => onSuccess(response))
             .catch( (response) => onError(response))
             .finally( () => console.log('Finally done'))
    }
    function onSuccess(response)
    {
        console.log(response);
        setEmployee(response.data);
    }

    function onError(response)
    {
        console.log(response);
    }

    return(
        <div className="ListEmployeesApp">
            <h1>Employees List</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                employee => (
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                    </tr>
                                )

                            )
                        }
                    </tbody>


                </table>
            </div>
            <button className="btn btn-success" onClick={getEmployees}>Get Employees</button>
        </div>
    )
}