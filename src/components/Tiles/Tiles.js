import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from 'react-reveal'
import 'animate.css/animate.css'

const Tiles = (props) => {

    const generateBlocks = ({ tiles }) => {
        if (tiles) {
            return tiles.map((t) => {
                return (
                    <Reveal
                        effect="animated fadeInUp"
                        key={t.id}
                        className={`item ${t.type}`}>

                        <div className="veil"></div>

                        <div className="image" style={{ background: `url(/images/blocks/${t.image}) no-repeat` }}>
                        </div>

                        <div className="title">
                            <Link to={t.link}>
                                {t.title}
                            </Link>
                        </div>

                    </Reveal>
                )
            })
        }
    }
    return (
        <div className="home_blocks">
            {generateBlocks(props)}
        </div>
    )
}

export default Tiles