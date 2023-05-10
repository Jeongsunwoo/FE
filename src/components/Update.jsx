import React from "react";
import styled from "../styles/css/posting.module.css";
import { useInput } from "../utils/useInput";
import { useMutation, useQueryClient } from "react-query";
import { addReviewAxios } from "../apis/review";
import { getMyPageUserInfo, updatePost } from "../apis/mypage";
import { useNavigate, useParams } from "react-router-dom";

function Update({ rewiewId, wineName, wineContent, isModalOpen }) {

  const queryClient = useQueryClient()

  const [input] = useInput("");

  const mutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("mypageuser")
    }
  })

  const { data } = useQuery("mypageuser", getMyPageUserInfo)
    console.log("mypageUser받아온값 => ", data)

  // const param = useParams();
  // const navigate = useNavigate();

  // const wines = data.find((item) => item.id === param.id);

  // const updatedPost = {
  //   id: wines.id,
  //   content: editedTitle
  // }

  const handleClickUpdate = () => {
        if (!input) {
          alert("리뷰 내용을 입력해 주세요!");
          return;
        }
        mutation.mutate(input);
      };

  return (
    <div className={styled.outCon}>
      <div className={styled.modalCon}>
        <h5 className={styled.title}>Review Update</h5>
        <div className={styled.contentsCon}>
            <span className={styled.contentTitle}>Wine</span>
            <p className={styled.contentValue}>{wineName}</p>
          </div>
          <div className={styled.content}>
            <span className={styled.contentTitle}>Review</span>
            <textarea
              rows={6}
              cols={50}
              value={input}
              onChange={handleInputChange}
              className={`${styled.contentValue} ${styled.reviewContent}`}
            />
          </div>
          <div className={styled.buttonCon}>
            <button className={styled.postingBtn} onClick={handleClickUpdate}>
            Update
            </button>
          </div>
        </div>
      </div>
  );
}

export default Update;





// function Update({ wineId, isModalOpen }) {
//   const initialState = {
//     content: "",
//   };
//   const [input, handleInputChange, resetInput] = useInput(initialState);
//   const queryClient = useQueryClient();
//   const mutation = useMutation(addReviewAxios, {
//     onSuccess: () => {
//       alert("리뷰 작성 완료");
//       isModalOpen();
//       resetInput();
//       queryClient.invalidateQueries("reviews");
//     },
//     onError: () => {
//       alert("ERROR: 서버 에러 발생");
//     },
//   });

//   const handleClickUpdate = () => {
//     if (!input) {
//       alert("리뷰 내용을 입력해 주세요!");
//       return;
//     }
//     mutation.mutate(input);
//   };

//   return (
//     <div className={styled.outCon}>
//       <div className={styled.modalCon}>
//         <h5 className={styled.title}>Review Update</h5>
//         <div className={styled.contentsCon}>
//           <div className={styled.content}>
//             <span className={styled.contentTitle}>NickName</span>
//             <p className={styled.contentValue}>닉네임</p>
//           </div>
//           <div className={styled.content}>
//             <span className={styled.contentTitle}>Wine</span>
//             <p className={styled.contentValue}>{wineName}</p>
//           </div>
//           <div className={styled.content}>
//             <span className={styled.contentTitle}>Review</span>
//             <textarea
//               rows={6}
//               cols={50}
//               value={input}
//               onChange={handleInputChange}
//               className={`${styled.contentValue} ${styled.reviewContent}`}
//             />
//           </div>
//           <div className={styled.buttonCon}>
//             <button className={styled.postingBtn} onClick={handleClickUpdate}>
//             Update
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }