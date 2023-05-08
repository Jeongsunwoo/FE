import styled from "../styles/css/winePost.module.css";
import { useNavigate } from "react-router-dom";

function WinePost({ post }) {
  const navigate = useNavigate();
  const { image_url, country, grape, vintage, name, type } = post;

  return (
    <div className={styled.postCon}>
      <div className={styled.leftCon}>
        <div className={styled.imgCon}>
          <img src={image_url} alt="wine-image" />
        </div>
      </div>
      <div className={styled.detailCon}>
        <h3 className={`${styled.data} ${styled.name}`}>{name}</h3>

        <div className={`${styled.infoCon} ${styled.country}`}>
          <span className={styled.title}>생산국가/지역</span>
          <p className={styled.data}>{country}</p>
        </div>
        <div className={`${styled.infoCon} ${styled.grape}`}>
          <span className={styled.title}>포도품종</span>
          <p className={styled.data}>{grape}</p>
        </div>
        <div className={`${styled.infoCon} ${styled.vintage}`}>
          <span className={styled.title}>빈티지</span>
          <p className={styled.data}>{vintage}</p>
        </div>
        <div className={`${styled.infoCon} ${styled.type}`}>
          <span className={styled.title}>와인타입</span>
          <p className={styled.data}>{type}</p>
        </div>

        <div
          className={styled.review}
          onClick={() => navigate(`/wineList/${post.id}`)}
        >
          GO TO REVIEW
        </div>
      </div>
    </div>
  );
}

export default WinePost;
