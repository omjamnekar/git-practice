import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2198245029/display_1500/stock-photo-autumn-nature-landscape-lake-bridge-in-fall-forest-path-way-in-gold-woods-romantic-view-image-2198245029.jpg",
    address: "Some address 5, 12345 Some city",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2198245029/display_1500/stock-photo-autumn-nature-landscape-lake-bridge-in-fall-forest-path-way-in-gold-woods-romantic-view-image-2198245029.jpg",
    address: "Some address 5, 12345 Some city",
    description: "This is a first meetup",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2198245029/display_1500/stock-photo-autumn-nature-landscape-lake-bridge-in-fall-forest-path-way-in-gold-woods-romantic-view-image-2198245029.jpg",
    address: "Some address 5, 12345 Some city",
    description: "This is a first meetup",
  },
];

function HomePage(props) {
  const [loadMessage, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUP);
  }, [loadMessage]);

  return (
    <div>
      <button>update</button>
      <button>added</button>
      <button>delete</button>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUP,
    },
  };
}

export default HomePage;
