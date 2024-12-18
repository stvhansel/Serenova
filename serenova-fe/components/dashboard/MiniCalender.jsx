import { Calendar } from "react-multi-date-picker"

const MiniCalender = () => {
  return (
    <div>
      <div className="flex justify-center mt-3 z-10">
                <Calendar
                    fontColor="#333"
                    shadow={false}
                    arrow="custom"
                    arrowStyle={{ color: "#FF0000" }}
                    style={{
                        borderRadius: "12px",
                        border: "none",
                    }}
                />
            </div>
    </div>
  )
}

export default MiniCalender
