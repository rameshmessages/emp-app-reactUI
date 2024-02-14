import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListEmployeesApp from "./ListEmployees";
import UpdateEmployeeApp from "./UpdateEmployee";

export default function EmployeeApp()
{
    return(
        <div className="EmployeeApp">  
            <BrowserRouter>
                <Routes>
                    <Route path="/employees" element={<ListEmployeesApp />}></Route>
                    <Route path="/update" element={<UpdateEmployeeApp/>}></Route>
                 </Routes>
            </BrowserRouter>
        </div>
    )
}