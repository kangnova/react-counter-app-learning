import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="card">
            <h2>Counter Canggih</h2>

            <div className="counter-display">
                {count}
            </div>

            <div className="button-group">
                <button
                    className="subtract"
                    onClick={() => setCount(count - 1)}
                >
                    - Kurangi
                </button>

                <button
                    className="reset"
                    onClick={() => setCount(0)}
                >
                    Reset
                </button>

                <button
                    className="add"
                    onClick={() => setCount(count + 1)}
                >
                    Tambah +
                </button>
            </div>
        </div>
    )
}

export default Counter
