import { Fragment } from "react"

const HolyGrail = () => {
    return (
        <Fragment>
            <div className="parent" >
                <header className="header">Some Header Text</header>
                <div className="left">Left side text</div>
                <div className="center">Center side text</div>
                <div className="right">Right side text</div>
                <footer className="footer">Some Footer Text</footer>
            </div>
        </Fragment>
    )
}
export default HolyGrail