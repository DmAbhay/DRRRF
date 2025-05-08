// import axios from "axios";
// import { useState, useEffect } from "react";

// export function UseEffectWithApi() {


//     const [employee, setEmployee] = useState(null);
//     const [result, setResult] = useState("")
//     const [empId, setEmpId] = useState("")

//     const [change, setChange] = useState("")

//     const showChagne = () => {
//         console.log("jai shree krishna");
//     }

//     const fetchEmployee = async () => {
//         try {
//             const response = await axios.get(`http://192.168.6.45:2020/dont-react-rather-respond/get-employee-by-id`, {
//                 params: { empId }
//             });
//             if (response.data == "Employee with given empId is not found") {
//                 setResult(response.data)
//             } else {
//                 setResult(response.data.name)
//                 setEmployee(response.data)
//                 console.log(employee)
//             }

//         } catch (e) {
//             console.log("jai shree krishna")
//         }

//     }

//     useEffect(() => {

//         if (empId) {
//             fetchEmployee();
//         }
//         if (change) {
//             showChagne();
//         }

//     }, [empId, change]); // runs every time count changes

//     const handleChange = (e) => {
//         setEmpId(e.target.value); // update state with input value
//     };

//     return (
//         <>
//             <div>
//                 <input type="text" value={empId} onChange={handleChange} />
//                 {result && <h3>{result}</h3>}
//             </div>
//             <div>
//                 <input type="text" value={change} onChange={handleChange} />
//             </div>
//         </>
//     );

// }


import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserProvider";

export function UseEffectWithApi() {

    const baseUrl = import.meta.env.VITE_BASE_URL;

    const { user, setUser } = useContext(UserContext);

    const [employee, setEmployee] = useState(null);
    const [result, setResult] = useState("");
    const [empId, setEmpId] = useState("");
    const [change, setChange] = useState("");

    const showChange = () => {
        console.log("jai shree krishna - change triggered");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "empId") {
            setEmpId(value);
        } else if (name === "change") {
            setChange(value);
            console.log(baseUrl);
            console.log(import.meta.env.VITE_BASE_URL);
            console.log(import.meta.env)

            
        }
    };

    const fetchEmployee = async () => {
        try {
            console.log(user);
            
            const response = await axios.get(
                `${baseUrl}/get-employee-by-id`,
                { params: { empId } }
            );

            if (response.data === "Employee with given empId is not found") {
                setResult(response.data);
                setEmployee(null);
            } else {
                setEmployee(response.data);
                setResult(response.data.name);
                setUser(response.data);
                console.log(response.data);
                console.log(`context user ${user}`)
            }
        } catch (e) {
            console.log("jai shree krishna - API error", e);
        }
    };

    useEffect(() => {
        if (empId) {
            fetchEmployee();
        }
    }, [empId]);

    useEffect(() => {
        if (change) {
            showChange();
        }
    }, [change, empId]);

    return (
        <>
            <div>
                <label>Emp ID:</label>
                <input
                    type="text"
                    name="empId"
                    value={empId}
                    onChange={handleChange}
                />
                {result && <h3>{result}</h3>}
            </div>
            <div>
                <label>Change Trigger:</label>
                <input
                    type="text"
                    name="change"
                    value={change}
                    onChange={handleChange}
                />
            </div>
        </>
    );
}
