import ReviewRefresh from "../reviewRefresh/ReviewRefresh"
import "../../../../css/global/cont.css"
import "./rev.css"


function ReviewTitle() {
    return (
      <div className="rev_title_cont">
        <div className="rev_title">Обзор</div>
        <div className="rev_ref">
            <ReviewRefresh />
        </div>
      </div>
    )
  }
  export default ReviewTitle