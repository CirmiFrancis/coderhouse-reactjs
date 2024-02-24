const Loading = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col text-center">
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;