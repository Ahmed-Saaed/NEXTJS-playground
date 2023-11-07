import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";

import Head from "next/head";

function AllEventsPage(props) {
  const router = useRouter();
  const events = props.events;

  console.log("events list >>>:", events);

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>ALl Events</title>
        <meta
          name="description"
          content="Find alot of great events that allow you to evolve "
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
