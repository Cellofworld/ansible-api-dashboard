import ReviewHosts from "../reviewComponents/reviewHosts/reviewHosts"
import ReviewPlaybook from "../reviewComponents/reviewPlaybook/reviewPlaybook"
import ReviewSystemStatus from "../reviewComponents/reviewSystemStatus/reviewSystemStatus"
import ReviewTasks from "../reviewComponents/reviewTasks/reviewTasks"
import ReviewTitle from "../reviewComponents/reviewTitle/ReviewTitle"


function ReviewMain() {
    return (
      <div>
        <ReviewTitle />
        <div>
            <ReviewPlaybook />
            <ReviewHosts />
            <ReviewTasks />
            <ReviewSystemStatus />
        </div>
      </div>
    )
  }
  export default ReviewMain