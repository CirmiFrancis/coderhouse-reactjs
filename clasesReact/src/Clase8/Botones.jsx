import useCount from "./useCount";

const Botones = () => {

    const {counter, reset, increment, decrement} = useCount(1, 0, 10)

    return (
        <div className="container-fluid m-0 p-0">
            <h1 className="text-center">CustomHook & Children</h1>
            <div className="row m-0 p-0">
                <div className="col d-flex flex-column justify-content-center p-0">
                    <div className="btn-group gap-1" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-danger" onClick={decrement}>-</button>
                        <button type="button" className="btn btn-primary">{counter}</button>
                        <button type="button" className="btn btn-success" onClick={increment}>+</button>
                    </div>
                </div>
            </div>
            <div className="row d-flex flex-column align-items-center m-0 pt-3">
                <button type="button" className="btn btn-warning w-50" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Botones;