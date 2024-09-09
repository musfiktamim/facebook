import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useContext, useEffect, useMemo, useState } from "react";
import { LikeAdd, LikeRemove } from "../../../../../api/api";
import { usercontext } from "../../../../../contextapi/index.context";
import HomemainboxFooterComment from "./HomemainboxFooterItems/HomemainboxFooterComment";

function HomemainboxFooter({ postId, like, items,comment,users }) {
  const { Muser } = useContext(usercontext);
  const [isLiked, setIsLiked] = useState(null);
  const [likeLength, setLikeLength] = useState(like.length);
  const [showComment, setShowComment] = useState(false);
  useEffect(() => {
    const likeds = like.filter((items) => items.id == Muser._id);
    if (likeds.length != 0) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [items, postId, Muser]);

  async function handleClickLike() {
    if (!isLiked) {
      const res = await LikeAdd({ postId: postId });
      if (res.success) {
        setLikeLength(res.updatedPost.like.length)
        setIsLiked(true);
      }
    } else {
      const res = await LikeRemove({ postId: postId });
      if (res.success) {
        setLikeLength(res.updatedPost.like.length)
        setIsLiked(false);
      }
    }
  }
  return (
    <>
      <div className="h-[45px] px-4 flex gap-2 items-center">
        <button
          className="w-1/3 h-[35px] shadow-md hover:bg-gray-400 flex justify-evenly items-center text-sm  rounded-lg"
          onClick={() => {
            handleClickLike();
          }}
        >
          {!isLiked ? (
            <ThumbUpOutlinedIcon fontSize="small" />
          ) : (
            <ThumbUpIcon fontSize="small" />
          )}
          {likeLength}
        </button>
        <button
          className="w-1/3 h-[35px] shadow-md hover:bg-gray-400 rounded-lg"
          onClick={() => {
            setShowComment(true);
          }}
        >
          <ChatBubbleOutlineOutlinedIcon />
        </button>
        <button className="w-1/3 h-[35px] shadow-md hover:bg-gray-400 rounded-lg">
          <SendOutlinedIcon />
        </button>
      </div>
      {
          showComment?<HomemainboxFooterComment users={users}  setShowComment={setShowComment} postId={postId} comment={comment.reverse()} />:null
      }
    </>
  );
}

export default HomemainboxFooter;
