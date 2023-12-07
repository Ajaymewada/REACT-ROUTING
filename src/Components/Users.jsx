import React from 'react'
import ShirtList from './Shirts'
import { Outlet, useSearchParams } from 'react-router-dom';

function Users() {
    const [searchParams, setSearchParams] = useSearchParams({});
    // let queryObj = {
    //     filter: "active"
    // }
    const showActiveUsers = searchParams.get("filter");

    console.log(showActiveUsers);
    let shirtData = ShirtList;
    shirtData = shirtData.filter((item) => item.size == showActiveUsers);
    // console.log(shirtData);

    return (
        // <div style={{ marginTop: "100px" }}>
        //     {/* <div style={{marginTop: "15px"}}>Pravalika 1</div>
        //     <div style={{marginTop: "15px"}}>Chandhana 2</div>
        //     <div style={{marginTop: "15px"}}>Pavan 3</div> */}
        //     <button onClick={() => setSearchParams(queryObj)}>Active Users</button>
        //     <button onClick={() => setSearchParams({})} style={{ marginLeft: "15px" }}>Reset Users</button>
        //     {showActiveUsers ? <h1>Showing Active Users</h1> : <h1>Showing All Users</h1>}
        //     <Outlet />
        // </div>
        <>
            <div className="btn-group my-4" role="group" aria-label="Basic example">
                <h4 className='mx-4'>Filter By Size</h4>
                <button type="button" onClick={() => setSearchParams({
                    filter: "L"
                })} className="btn btn-primary">L</button>
                <button type="button" onClick={() => setSearchParams({
                    filter: "M"
                })} className="btn btn-primary">M</button>
                <button type="button" onClick={() => setSearchParams({
                    filter: "S"
                })} className="btn btn-primary">S</button>
            </div>
            <div className="row">
                {
                    shirtData.map((shirt) => {
                        return <div key={shirt.brand} className="col-lg-3">
                            <div className="card">
                                <img src={shirt.img} style={{ height: "200px" }} className="img-fluid card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Brand: {shirt.brand}</h5>
                                    <p className="card-text">Size: {shirt.size}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Users