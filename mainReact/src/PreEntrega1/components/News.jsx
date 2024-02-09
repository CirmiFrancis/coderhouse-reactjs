import NewsPart1 from "./NewsPart1"
import NewsPart2 from "./NewsPart2"

const News = () => {
    return (
        <div className="container-fluid py-5 main-bg-color padding-custom">
            <NewsPart1 />
            <NewsPart2 />
        </div>
    )
}

export default News;