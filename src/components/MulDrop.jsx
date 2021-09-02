import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Register from './Register';


const MulDrop = () => {
    let state = ["", "MH", "MP", "UP"]
    let city = []


    const [changecity, setchangecity] = useState("");
    const [changestate, setchangestate] = useState("");
    const [filtdata, setfiltdata] = useState([]);
    const [d, setd] = useState([])
    const dfserver = () => {
        axios.get('http://localhost:5000/student/all')
            .then((res) => {
                const dfromserver = res.data
                console.log(dfromserver)
                setd(dfromserver)
            }
            )
    }
    const ct = (e) => {
        // console.log(e.target.value)
        setchangecity(e.target.value)
    }
    const st = (e) => {
        // console.log(e.target.value)
        setchangestate(e.target.value)

    }
    useEffect(() => {
        dfserver()
    }, [])
    if (changestate === "MH") {
        city = ["Nagpur", "Pune", "Mumbai"]
    }
    else if (changestate === "MP") {
        city = ["Bhopal", "Jabalpur", "Baitul"]
    }
    if (changestate === "UP") {
        city = ["a", "b", "c"]
    }
    const searchfun = () => {

        const fildata = d.filter((data) => { return data.state === changecity || data.state === changestate })
        // const fidata = fildata
        setfiltdata(fildata)
        console.log(fildata)

    }


    return (
        <div>
            <div className='row justify-content-md-center'>
                <center><h3>SEARCH </h3></center>
                <div className="col ">
                    <select className="form-select sm" onChange={st} name="State" id="">
                        {state.map((data) => <option key={data} value={data}>{data}</option>)}
                    </select><br />
                </div>

                {changestate === "" ? "  " :
                    <div className="col">
                        <select className="form-select sm" onChange={ct} name="City" id="">
                            {city.map((data) => <option key={data} value={data}>{data}</option>)}
                        </select>
                    </div>
                }
                <input type="button" value="Search" onClick={searchfun} /><br />
            </div>
            {filtdata.map((d) =>
                <div className="container">
                    <div className="card" style={{ background: "brown", margin: "5px", textAlign: "center" }}>
                        <div className="card-body">
                            <h5 className="card-title">{d.first_name} {d.last_name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{d.city} {d.state} </h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                //    d._id)
            )}<br />
            <div style={{ border: "10px solid white" }}>
                <Register />
            </div>
        </div>
    )
}

export default MulDrop
