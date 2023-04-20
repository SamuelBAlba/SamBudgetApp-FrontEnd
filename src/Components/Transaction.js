import { Link } from "react-router-dom"


export default function Transaction({transaction, index}) {
    return (
        <tr>
            <td>{transaction.date}</td>
            <td><Link to={`/transactions/${index}`}>{transaction.itemName}</Link></td>
            <td>{transaction.category === 'bills' ? '-' + transaction.amount: transaction.amount}</td>

        </tr>
      
    )
};