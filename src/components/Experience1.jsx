import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { ItemDirective, ItemsDirective, TimelineComponent } from "@syncfusion/ej2-react-layouts";
import { Card, CardContent, Typography } from "@mui/material";
export default function Experience() {
  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      
      
      <Timeline position="alternate-reverse">




        <TimelineItem>
  
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Card elevation={2} sx={{ width: 260, p: 1.5, borderRadius: 5, ml:40}}>
              <CardContent textAlign:left>
                <Typography variant="h6" fontWeight="bold">WestCliff University</Typography>
                <Typography variant="" color="text.secondary">August 2023 - March 2026</Typography>
                <Typography>Masters in Computer Science</Typography>
              </CardContent>
            </Card>

          </TimelineContent>
        </TimelineItem>


        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card elevation={2} sx={{ width: 400, p: 1.5, mx: "0px" , borderRadius: 5 , flex :0}}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">Accenture - Custom Software Analyst</Typography>
                <Typography variant="" color="text.secondary">October 2021 - August 2023</Typography>
                <Typography>Oracle Documaker, DAL Scripts, Agile, JIRA</Typography>
              </CardContent>
            </Card>

          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card elevation={2} sx={{ width: 325, p: 1.5, mx: "0px" , borderRadius :5, ml:32}}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">ACL Digital - Software Intern</Typography>
                <Typography variant="" color="text.secondary">January 2021 - August 2021</Typography>
                <Typography>Java API, Networking Configurations</Typography>
              </CardContent>
            </Card>

          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
          </TimelineSeparator>
          <TimelineContent>
            <Card elevation={2} sx={{ width: 350, p: 1.5, mx: "0px" , borderRadius :5}}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">Sri Vasavi Engineering College</Typography>
                <Typography variant="" color="text.secondary">June 2017 - July 2021</Typography>
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