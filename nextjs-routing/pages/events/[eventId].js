import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../helpers/api-util";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
// import {getEventById} from '../../dummy_data';
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

import Head from "next/head";

function EventDetailPage(props) {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = props.selectedEvent;

  console.log("event", event[0]);

  if (!event) {
    return (
      <div className="center">
        <p>loading</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta
          name="description"
          content="Find alot of great events that allow you to evolve "
        />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  console.log("paths:  >> ", paths);
  return {
    paths: paths,
    // fallback: true, and show the error
    fallback: "blocking",
  };
}

export default EventDetailPage;
