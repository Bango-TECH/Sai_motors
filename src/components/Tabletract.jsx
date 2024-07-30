// import React, { useEffect, useState } from 'react';
// import { Container, Table, Image, Button } from 'react-bootstrap';
// import axios from 'axios';

// const Tabletract = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get("https://sai-motors-backend.vercel.app/trac/get-image")
//             .then(res => {
//                 console.log(res.data);
//                 setData(res.data.data); // Make sure to use the correct property from the response
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }, []);

//     function handledelete(UniqueID) {
//         axios.delete(`https://sai-motors-backend.vercel.app/trac/delet1/${UniqueID}`)
//             .then(res => {
//                 console.log(res.data);
//                 setData(prevData => prevData.filter(item => item.UniqueID !== UniqueID));
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }

//     return (
//         <Container fluid>
//             <br />
//             <h6 style={{ padding: "10px" }}>
//                 <span style={{ color: "white", backgroundColor: "#272829", borderStyle: 'ridge', borderWidth: '5px', borderRadius: "30px", padding: "15px 20px", textDecoration: "none" }}>Other Vehicles / इतर वाहने</span>
//             </h6><br />
//             <div className="table-responsive" style={{ border: '1px solid black', backgroundColor: '#E6E6FA' }}>
//                 <Table hover style={{ minWidth: '1000px', tableLayout: 'fixed' }}>
//                     <thead>
//                         <tr>
//                             <th style={{ width: '5%', backgroundColor: '#E6E6FA' }}>No</th>
//                             <th style={{ width: '7%', backgroundColor: '#E6E6FA' }}>Unique ID</th>
//                             <th style={{ width: '12%', backgroundColor: '#E6E6FA' }}>Car Name</th>
//                             <th style={{ width: '12%', backgroundColor: '#E6E6FA' }}>Model Name</th>
//                             <th style={{ width: '7%', backgroundColor: '#E6E6FA' }}>Model Year</th>
//                             <th style={{ width: '20%', backgroundColor: '#E6E6FA' }}>Details</th>
//                             <th style={{ width: '10%', backgroundColor: '#E6E6FA' }}>Photos</th>
//                             <th style={{ width: '7%', backgroundColor: '#E6E6FA' }}>Status</th>
//                             <th style={{ width: '8%', backgroundColor: '#E6E6FA' }}>Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((vehicle, index) => (
//                             <tr key={vehicle.UniqueID}>
//                                 <td>{index + 1}</td>
//                                 {/* <td>{vehicle.Id}</td> */}
//                                 <td>{vehicle.UniqueID}</td>
//                                 <td>{vehicle.CarName}</td>
//                                 <td>{vehicle.ModelName}</td>
//                                 <td>{vehicle.ModelYear}</td>
//                                 <td>{vehicle.Details}</td>
//                                 <td>
//                                     {vehicle.images && vehicle.images[0] && (
//                                         <Image
//                                             src={vehicle.images[0]}
//                                             thumbnail
//                                             style={{ height: '100px', width: '100px' }}
//                                         />
//                                     )}
//                                 </td>
//                                 <td>{vehicle.Status}</td>
//                                 <td>
//                                     <Button variant="danger" onClick={() => handledelete(vehicle.UniqueID)}>Delete</Button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//             </div>
//         </Container>
//     );
// }

// export default Tabletract;

import React, { useEffect, useState } from 'react';
import { Container, Table, Image, Button } from 'react-bootstrap';
import axios from 'axios';

const Tablepickup = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://sai-motors-backend.vercel.app/trac/get-image")
            .then(res => {
                console.log(res.data);
                setData(res.data.data); // Make sure to use the correct property from the response
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    function handledelete(UniqueID) {
        axios.delete(`https://sai-motors-backend.vercel.app/trac/delet1/${UniqueID}`)
            .then(res => {
                console.log(res.data);
                setData(prevData => prevData.filter(item => item.UniqueID !== UniqueID));
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <Container fluid>
            <br />
            <h6 style={{ padding: "10px" }}>
                <span style={{ color: "white", backgroundColor: "#272829", borderStyle: 'ridge', borderWidth: '5px', borderRadius: "30px", padding: "15px 20px", textDecoration: "none" }}>Other Vehicles / इतर वाहने</span>
            </h6><br />
            <div className="table-responsive" style={{ border: '1px solid black', backgroundColor: '#E6E6FA' }}>
                <Table hover style={{ minWidth: '1000px', tableLayout: 'fixed' }}>
                    <thead>
                        <tr>
                            <th style={{ width: '5%', backgroundColor: '#E6E6FA' }}>No</th>
                            <th style={{ width: '7%', backgroundColor: '#E6E6FA' }}>Unique ID</th>
                            <th style={{ width: '12%', backgroundColor: '#E6E6FA' }}>Car Name</th>
                            <th style={{ width: '12%', backgroundColor: '#E6E6FA' }}>Model Name</th>
                            <th style={{ width: '7%', backgroundColor: '#E6E6FA' }}>Model Year</th>
                            <th style={{ width: '20%', backgroundColor: '#E6E6FA' }}>Details</th>
                            <th style={{ width: '10%', backgroundColor: '#E6E6FA' }}>Photos</th>
                            <th style={{ width: '7%', backgroundColor: '#E6E6FA' }}>Status</th>
                            <th style={{ width: '8%', backgroundColor: '#E6E6FA' }}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((vehicle, index) => (
                            <tr key={vehicle.UniqueID}>
                                <td>{index + 1}</td>
                                {/* <td>{vehicle.Id}</td> */}
                                <td>{vehicle.UniqueID}</td>
                                <td>{vehicle.CarName}</td>
                                <td>{vehicle.ModelName}</td>
                                <td>{vehicle.ModelYear}</td>
                                <td>{vehicle.Details}</td>
                                <td>
                                    {vehicle.images && vehicle.images[0] && (
                                        <Image
                                            src={vehicle.images[0]}
                                            thumbnail
                                            style={{ height: '100px', width: '100px' }}
                                        />
                                    )}
                                </td>
                                <td>{vehicle.Status}</td>
                                <td>
                                    <Button variant="danger" onClick={() => handledelete(vehicle.UniqueID)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
}

export default Tablepickup;

