/* eslint-disable */
import TicketSort from '../TicketSort/TicketSort'
import TicketList from '../TicketList/TicketList'
import ShowMoreTickets from '../ShowMoreTickets/ShowMoreTickets'

import styles from './TicketsSection.module.scss'

function TicketsSection() {
  return (
    <div className={styles.ticketsSection}>
      <TicketSort />
      <TicketList />
      <ShowMoreTickets />
    </div>
  )
}
export default TicketsSection
