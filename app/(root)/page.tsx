import { podcastData } from '@/constants';
import PodcastCard from '@/components/PodcastCard';
import React from 'react';

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        {podcastData.map((podcast) => (
          <PodcastCard />
        ))}
      </section>
    </div>
  );
};

export default Home;
