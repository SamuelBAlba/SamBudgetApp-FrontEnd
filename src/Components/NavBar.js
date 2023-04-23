import { Link } from "react-router-dom"

export default function NavBar() {

    return (
        <nav>

        <h1>
            <Link to="/">Home</Link>
        </h1>

        <h1>
            <Link to="/transactions">Transactions</Link>
        </h1>

            <Link to ="/transactions/new">
            <button>New Transaction</button>
            </Link>

    </nav>

    )
}