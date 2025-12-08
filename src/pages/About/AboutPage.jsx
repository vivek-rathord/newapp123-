import { Box } from '@mui/material';
import AboutHero from './AboutHero';
import TimelineSection from './TimelineSection';
import HowWeWork from './HowWeWork';
import TeamSection from './TeamSection';
 import BuildTeam from './BuildTeam';

const AboutPage = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <AboutHero />
      <TimelineSection />
      <HowWeWork />
      <TeamSection />
       <BuildTeam />
    </Box>
  );
};

export default AboutPage;