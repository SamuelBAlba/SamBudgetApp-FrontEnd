import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function TransactionDetails() {
    let navigate = useNavigate();
    const [transaction, setTransaction] = useState({});
    let {index} = useParams();

    useEffect(() => {
        axios
        .get(`${API}/transactions/${index}`)
        .then((response) => {
            setTransaction(response.data)
        }).catch(() => {
            navigate("*")
        })
    })

    function handleDelete() {
        axios
        .delete(`${API}/transactions/${index}`)
        .then(() => {
            navigate(`/transactions`)
        }).catch((e) => console.error(e))

    }
    
    return (
        <div>
            <h3>{transaction.itemName}</h3>
            <h3>From: {transaction.from}</h3>
            <p>Amount: ${transaction.amount}</p>
            <p>Type: {transaction.category}</p>
            <p>Date: {transaction.date}</p>

            <Link to={`/transactions`}><button>Go back</button></Link>
            <Link to={`transactions/${index}/edit`}><button>Edit</button></Link>
            <button onClick={handleDelete}>Delete</button>
            
            
        </div>
    )
}