import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;


export default function TransactionEditForm() {
    const navigate = useNavigate();
    let {index} = useParams();

    const [transaction, setTransaction] = useState({
        itemName: "",
        amount: "",
        date: "",
        from: "",
        category: ""
    })

    useEffect(() => {
        axios
        .get(`${API}/transactions/${index}`)
        .then((response) => {
            setTransaction(response.data)
        }).catch((e) => console.error(e))
    }, [index])

    function updateTransaction() {
         axios
            .put(`${API}/transactions/${index}`, transaction)
            .then((response) => {
                setTransaction(response.data)
                navigate(`/transactions/${index}`)
            }).catch((e) => console.warn("warn", e))
    }

    function handleTextChange(event) {
        setTransaction({...transaction, [event.target.id]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        updateTransaction()
    }

    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="item">Item:</label>
                <input
                id="item"
                value={transaction.itemName}
                type="text"
                onChange={handleTextChange}
                placeholder="Name of Transaction"
                required
                />

                <label htmlFor="amount">Amount:</label>
                <input
                id="amount"
                value={transaction.amount}
                type="number"
                onChange={handleTextChange}
                placeholder="Amount of Transaction"
                required
                />

                <label htmlFor="date">Date:</label>
                <input
                id="date"
                value={transaction.date}
                type="text"
                onChange={handleTextChange}
                placeholder="Date of Transaction"
                required
                />

                <label htmlFor="from">From:</label>
                <input
                id="from"
                value={transaction.from}
                type="text"
                onChange={handleTextChange}
                placeholder="Transaction is From"
                required
                />


                <label htmlFor="category">Category:</label>
                <input
                id="category"
                value={transaction.category}
                type="text"
                onChange={handleTextChange}
                placeholder="Category of Transaction"
                required
                />
                <br/>

                <input type="submit"/>
                <Link to={`/transactions/${index}`}><button>Go back</button></Link>

            </form>
        </div>
    )
}