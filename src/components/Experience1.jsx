import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Card, CardContent, Typography } from "@mui/material";

export default function Experience() {
  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      
      <Timeline position="alternate-reverse">

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: "#38bdf8" }} />
            <TimelineConnector sx={{ backgroundColor: "#334155" }} />
          </TimelineSeparator>

          <TimelineContent>
            <Card elevation={2} sx={{ width: 300, p: 1.5, borderRadius: 5, ml: 40, backgroundColor: "#1e293b", color: "#f1f5f9" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">WestCliff University</Typography>
                <Typography sx={{ color: "#94a3b8" }}>August 2023 - March 2026</Typography>
                <Typography>Masters in Computer Science</Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: "#38bdf8" }} />
            <TimelineConnector sx={{ backgroundColor: "#334155" }} />
          </TimelineSeparator>

          <TimelineContent>
            <Card elevation={2} sx={{ width: 400, p: 1.5, borderRadius: 5, mx: "0px", backgroundColor: "#1e293b", color: "#f1f5f9" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">Accenture - Custom Software Analyst</Typography>
                <Typography sx={{ color: "#94a3b8" }}>October 2021 - August 2023</Typography>
                <Typography>Oracle Documaker, DAL Scripts, Agile, JIRA</Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: "#38bdf8" }} />
            <TimelineConnector sx={{ backgroundColor: "#334155" }} />
          </TimelineSeparator>

          <TimelineContent>
            <Card elevation={2} sx={{ width: 325, p: 1.5, borderRadius: 5, ml: 32, backgroundColor: "#1e293b", color: "#f1f5f9" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">ACL Digital - Software Intern</Typography>
                <Typography sx={{ color: "#94a3b8" }}>January 2021 - August 2021</Typography>
                <Typography>Java API, Networking Configurations</Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: "#38bdf8" }} />
          </TimelineSeparator>

          <TimelineContent>
            <Card elevation={2} sx={{ width: 350, p: 1.5, borderRadius: 5, mx: "0px", backgroundColor: "#1e293b", color: "#f1f5f9" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">Sri Vasavi Engineering College</Typography>
                <Typography sx={{ color: "#94a3b8" }}>June 2017 - July 2021</Typography>
                <Typography>Bachelors in Computer Science</Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </section>
  );
}

const styles = {
  section: {
    padding: "5px 60px",
    marginBottom: "0px",
    backgroundColor: "#0f172a",
  },
  heading: {
    fontSize: "32px",
    color: "#38bdf8",
    textAlign: "center",
    marginBottom: "50px",
  },
  
};