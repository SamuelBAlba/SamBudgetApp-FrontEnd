import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const API = process.env.APP_API_URL;

export default function TransactionsNewForm() {
    const [transaction, setTransactions] = useState({
        itemName: "",
        amount: "",
        date: "",
        from: "",
        category: ""
    })


    return (
        <div>
            <form>
                <label></label>
            </form>

        </div>
    )
}