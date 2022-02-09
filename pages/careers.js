import { useEffect } from "react";
import { fadeUp } from "../animations/fadeUp";
import JobPost from "../Components/JobPost";
import { createClient } from "contentful";

export async function getServerSideProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "jobPost",
  });

  return {
    props: {
      jobPosts: res.items,
    },
  };
}

const Careers = ({ jobPosts }) => {
  useEffect(() => {
    fadeUp("#career-title");
    fadeUp("#career-text");
  });
  console.log(jobPosts);
  return (
    <>
      <div className="pt-5 my-5">
        <h2 id="career-title" className="text-center mt-5 text-blue-800">
          Careers
        </h2>
      </div>
      <div id="career-text" className="container mb-5 text-blue-800">
        <h3 className="mt-5">
          Welcome to the Careers page for F&amp;S Scientific Ltd
        </h3>
        <p>
          F&amp;S Scientific is a leading provider of laboratory and field
          testing solutions in East Africa. We serve customers in Healthcare,
          Industries, Research and Academia. Our accurate and high-quality
          technology solutions enable our customers to monitor and improve
          quality and safety, as well as drive efficiencies. We see ourselves as
          problem solvers driven to help our customers do what they do better.
          To do this well we dedicate our efforts to understanding their needs,
          to acquiring a deep understanding of our products, and to ensuring a
          robust process in bringing these solutions to our customer.
        </p>
        <p>
          We are looking for ambitious and enthusiastic individuals to join our
          various divisions. It's your chance to be part of a dynamic team and
          make an immediate impact!
        </p>
        <h4>Benefits of working at F&amp;S Scientific:</h4>
        <ul>
          <li>
            A stable and growing company that is passionate about delivering
            first-class scientific products and services to our customers.
          </li>
          <li>
            The opportunity to develop your career with leading innovative
            brands in the world of science.
          </li>
          <li>
            We care, and we want to make a difference. Every team member impacts
            our customers one way or another and in doing so contributes to the
            success of our company.
          </li>
          <li>
            A vibrant environment that fosters employee satisfaction and
            friendship, loyalty and longevity.
          </li>
          <li>Competitive salary scheme and additional employee benefits.</li>
        </ul>
        <h4>What we are looking for:</h4>
        <ul>
          <li>
            Highly motivated, an appreciation for science and yearning to make a
            difference.
          </li>
          <li>
            Willingness to learn, open-minded and ready to roll up your sleeves.
          </li>
          <li>
            A self-starter, who proactively takes the initiative to get one step
            closer to the overall goals.
          </li>
          <li>
            An excellent team player, who loves a challenge and brings their
            smile to work every day.
          </li>
        </ul>
      </div>

      <h4 className="container text-blue-800">Current Positions</h4>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          {jobPosts.map((job) => {
            return <JobPost key={job.sys.id} job={job.fields} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Careers;
