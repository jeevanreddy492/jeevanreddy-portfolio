import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { ItemDirective, ItemsDirective, TimelineComponent } from "@syncfusion/ej2-react-layouts";
import { Typography } from "@mui/material";
export default function Experience() {
  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.heading}>Experience</h2>
      <Timeline position="alternate-reverse">

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" fontWeight="bold">WestCliff University</Typography>
          <Typography variant="" color="text.secondary">August 2023 - March 2026</Typography>
          <Typography>Masters in Computer Science</Typography>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" fontWeight="bold">Accenture - Custom Software Analyst</Typography>
          <Typography variant="" color="text.secondary">October 2021 - August 2023</Typography>
          <Typography>Oracle Documaker, DAL Scripts, Agile, JIRA</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" fontWeight="bold">ACL Digital - Software Intern</Typography>
          <Typography variant="" color="text.secondary">January 2021 - August 2021</Typography>
          <Typography>Java API, Networking Configurations</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" fontWeight="bold">Sri Vasavi Engineering College</Typography>
          <Typography variant="" color="text.secondary">June 2017 - July 2021</Typography>
          <Typography>Bachelors in Computer Science</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
      <div style={styles.timeline}>
        {/* Accenture */}
        <div style={styles.item}>
          <div style={styles.date}>Oct 2021 – Aug 2023</div>
          <h3 style={styles.company}>Accenture – Custom Software Engineering Analyst</h3>
          <ul style={styles.details}>
            <li>Developed and optimized enterprise document workflows using Oracle Documaker.</li>
            <li>Built and maintained DAL scripts, triggers, and templates for automated communications.</li>
            <li>Worked on an internal employee referral portal using Java (Spring MVC).</li>
            <li>Collaborated with cross-functional Agile teams for testing and delivery.</li>
          </ul>
        </div>

        {/* ACL Digital */}
        <div style={styles.item}>
          <div style={styles.date}>Jan 2021 – Aug 2021</div>
          <h3 style={styles.company}>ACL Digital – Trainee Software Engineer</h3>
          <ul style={styles.details}>
            <li>Trained in core programming and networking fundamentals (routers, firewalls, VPNs).</li>
            <li>Simulated secure enterprise network communications and applied encryption techniques.</li>
            <li>Learned SDLC lifecycle and version control practices.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 60px",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: "32px",
    color: "#007acc",
    textAlign: "center",
    marginBottom: "50px",
  },
  timeline: {
    borderLeft: "3px solid #007acc",
    marginLeft: "-40px",
    paddingLeft: "20px",
  },

  item: {
    marginBottom: "40px",
  },
  date: {
    fontWeight: "bold",
    color: "#555",
  },
  company: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  details: {
    lineHeight: "1.8",
  },
};


/*

<Timeline position="alternate-reverse">

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            August 2023 - March 2026
          </TimelineOppositeContent>


          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>WestCliff University<br></br><i>Masters in Computer Science</i></TimelineContent>
        </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          12:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          9:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>
*/