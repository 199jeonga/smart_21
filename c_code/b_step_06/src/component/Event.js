
import EventList from './eventlist';
import '../style/event.scss';

export default function Event() {
  return (
    <article className="event_container">
        <EventList />        
        <button type="button">Plus</button>
    </article>
  )
}