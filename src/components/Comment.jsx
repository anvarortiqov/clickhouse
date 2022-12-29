import React from 'react'
import { BsFillReplyFill } from "react-icons/bs";

function Comment(props) {
    const {fullName, time, answer} = props;
  return (
    <div className="comment__bit">
        <div className="bit-left">
            <p className="p__18 gray__900"><b>{fullName}</b></p>
            <p className="p__14 gray__700">{time}</p>
        </div>
        <div className="bit-right">
            <p className="p__16 gray__800">{answer}</p>
            <div className="reply gray__700"><BsFillReplyFill className='replying'/> Reply</div>
        </div>
    </div>
  )
}

export default Comment