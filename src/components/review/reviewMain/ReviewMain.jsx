import ReviewHosts from "../reviewComponents/reviewHosts/reviewHosts"
import ReviewPlaybook from "../reviewComponents/reviewPlaybook/reviewPlaybook"
import ReviewSystemStatus from "../reviewComponents/reviewSystemStatus/reviewSystemStatus"
import ReviewTasks from "../reviewComponents/reviewTasks/reviewTasks"
import ReviewTitle from "../reviewComponents/reviewTitle/ReviewTitle"
import "../../../css/global/card.css"


function ReviewMain() {
    return (
      <div className="rev_main">
        <ReviewTitle />
        <div className="rev_cards_cont">
            <ReviewPlaybook />
            <ReviewHosts />
            <ReviewTasks />
            <ReviewSystemStatus />
        </div>
      </div>
    )
  }
  export default ReviewMain