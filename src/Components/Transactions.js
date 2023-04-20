import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;



export default function Transactions() {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        axios
        .get(`${API}/transactions`)
        .then((response) => setTransactions(response.data))
        .catch((e) => console.error("catch", e))

    },[])


    function calculateAmount() {
        let total = 0;

        transactions.forEach((transaction) => {
            if(transaction.category === "Income"){
                total += transaction.amount;
            }else {
                total -= transaction.amount;
            }
        })
        return total;
    }

    const totalAmount = calculateAmount();



    return (
        <div className="Transactions">
            <section>
                <table>
                    <thead>
                        <th>Total: {totalAmount}</th>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => {
                            return (
                                <Transaction
                                key={index}
                                transaction={transaction}
                                index={index}/>
                            )
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}