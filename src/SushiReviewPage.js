import "./App.css"

function SushiReviewPage(){
    return(
        <div>
            <div id={"form-container"}>

                <div id={"form-box"}>
                    <div >
                        <form id={"review-form"} action="">

                            <input id={"review-title"} placeholder={"how's it taste?!"} type="text"/>
                            <textarea id={"review-text"} placeholder={"please tell us more..."} type="text"/>

                        </form>
                    </div>

                    <button id={"submit-review-btn"}> submit </button>

                </div>


            </div>
        </div>
    )
}
export default SushiReviewPage