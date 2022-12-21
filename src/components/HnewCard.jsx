import React from 'react'
import { AiOutlineComment } from "react-icons/ai";

function HnewCard({title,  content, date, comment}) {
  return (
    <div className="hnew__grid__item">
        <div className="hnew-footer">
            <h5>{title}</h5>
            <div className="hnew-meta">
                <p className="p__14 gray__700">{content}</p>
                <p className="p__14 gray__700">| {date} |</p>
                <p className="p__14 gray__700"><AiOutlineComment/> {comment} comments</p>
            </div>
            <p className="p__16 gray__800 opinion">
                Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...
            </p>
        </div>
    </div>
  )
}

export default HnewCard