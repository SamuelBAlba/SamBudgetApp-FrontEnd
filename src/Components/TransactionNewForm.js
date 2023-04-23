import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const API = process.env.APP_API_URL;

export default function TransactionsNewForm() {
    const navigate = useNavigate();

    const [transaction, setTransaction] = useState({
        itemName: "",
        amount: "",
        date: "",
        from: "",
        category: ""
    })



    function handleTextChange(event) {
        setTransaction({...transaction, [event.target.id]: event.target.value})
    }

    function newTransaction() {
        axios
            .post(`${API}/transactions`, transaction )
            .then((response) => {
                setTransaction(response.data)
                navigate(`/transactions`)
            }).catch((e) => console.warn("warn", e))

    }

    function handleSubmit(event) {
        event.preventDefault()
        newTransaction()
    }





    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="itemName">Item:</label>
                <input
                id="itemName"
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

        <input type="submit" />
 

            </form>

        </div>
    )
}