import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar, AddEmployee, EmployeeList, UpdateEmployee } from './components';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index element={<EmployeeList />} />
                    <Route path="/" element={<EmployeeList />}></Route>
                    <Route path="/employees" element={<EmployeeList />} />
                    <Route path="/add-employee" element={<AddEmployee />} />
                    <Route path="/:id/update" element={<UpdateEmployee />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
