const Layout = ({titulo, subtitulo, children}) => {
    return (
        <div>
            <h1 className='text-center text-white bg-danger m-0 p-2'>{titulo}</h1>
            <h4 className='text-center bg-warning m-0 p-3'>{subtitulo}</h4>
            <div className='text-center bg-dark text-white m-0 p-5'>
                {children}
            </div>
        </div>
    )
}

const Mensaje = ({texto}) => {
    return (
        <p className='text-dark bg-light'>{texto}</p>
    )
}

const Children = () => {
    return (
        <div>
           <Layout titulo={'Titulo'} subtitulo={'Subtitulo'}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque tenetur ab recusandae distinctio. Doloribus magnam nobis ipsa voluptatibus. Minus, numquam!</p>
                <Mensaje texto={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque tenetur ab recusandae distinctio. Doloribus magnam nobis ipsa voluptatibus. Minus, numquam!'} />
           </Layout>
        </div>
    )
}

export default Children;