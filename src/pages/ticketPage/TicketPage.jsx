import "./TicketPage.css"

function TicketPage() {
  return (
    <div className="ticketpage">
        <header>
            <h1>Create a Ticket</h1>
        </header>
        <form className="ticket__form" >
            <div className="ticket__formOne">
            <div><label>Title</label><input type="text" /></div>
            <div><label>Owner</label><input type="text" /></div>
            </div>
            <div className="ticket__formtwo">
            <div><label>Description</label><input type="text" /></div>
            <div><label>Avatar</label><input type="text" /></div>
            </div>
            <div className="ticket__formthree">
                <label>Category</label>
                <select name="" id="">
                    <option/>
                </select>
            </div>
        </form>
    </div>
  )
}

export default TicketPage