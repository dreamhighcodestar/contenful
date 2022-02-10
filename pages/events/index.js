import Event from "../../Components/Event";
import { createClient } from "contentful";
import { fadeUp } from "../../animations/fadeUp";
import { useEffect } from "react";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "event",
  });

  return {
    props: {
      events: res.items,
    },
    revalidate: 60,
  };
}

const Products = ({ events }) => {
  useEffect(() => {
    fadeUp("#page-title");
    fadeUp("#events");
  }, []);

  return (
    <div className="pt-5 my-5">
      <h2 id="page-title" className="text-center mt-5 text-blue-800">
        Events
      </h2>
      <div id="events" className="d-flex flex-wrap justify-content-center">
        {events.map((event) => {
          return <Event key={event.sys.id} event={event.fields} />;
        })}
      </div>
    </div>
  );
};

export default Products;
