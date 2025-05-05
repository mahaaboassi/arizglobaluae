import { Helmet } from "react-helmet-async";

const Page_404 = ()=>{
    return <div className="page-404">
            <Helmet>
                <title>404 - Page Not Found | Ariz Global</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content="Sorry, the page you’re looking for doesn’t exist. Please check the URL or return to the homepage." />
                {/* <link rel="canonical" href="https://arizglobal.com/404" /> */}
            </Helmet>
            <div className="lines">
                {Array.from({ length: 1000 }).map((_, idx) => {
                        const height = Math.floor(Math.random() * 400) + 100; // 100px to 500px
                        const delay = Math.random() * 3; // 0s to 3s
                    return <div key={`Line_404_Page_${idx}`}  style={{
                        height: `${height}px`,
                        animationDelay: `${delay}s`,
                      }} className="line" ></div>
                })}
            </div>
        <h1>
            404 
        </h1>
        <div className="card-404">
            <div>
                Oops, Page not found !
            </div>
        </div>

    </div>
}

export default Page_404