import React from "react";
import profilePic from "../assets/ProfilePicture.jpg";
import Typewriter from "typewriter-effect"
export default function Hero() {
    return (
        <section id="home" style={styles.hero}>
            <div style={styles.textContainer}>
                <h1 style={styles.name}>Hi, I'm <span style={styles.highlight}>Jeevan Reddy Pappu</span></h1>
                <Typewriter options={{
                    strings : ['Im a Competitive Programmar', 'Im a Software Enginner'],
                    loop : true,
                    delay : 25,
                    autoStart : true
                }} />
                {/* <h2 style={styles.title}>Software Engineer | Java | Documaker | Data Analyst</h2> */}
                <p style={styles.desc}>
                    Experienced Software Engineer with 3 years in Oracle Documaker and strong expertise in Java, Data Structures, and Algorithms.
Skilled in developing efficient, scalable solutions for enterprise applications. Proven ability to optimize workflows, automate
processes, and deliver high quality results in Agile environments. Passionate about leveraging cutting edge technologies to
enhance system performance, security, and user experience.</p>
                <a href="#projects" style={styles.button}>View My Work</a>
            </div>
            <img
                src={profilePic}
                alt="Jeevan Reddy"
                style={styles.image}
            />
        </section>
    );
}

const styles = {
    hero: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "80px 60px",
        backgroundColor: "#f9f9f9",
        minHeight: "50vh",
        marginBottom: "0px", 
    },
    textContainer: {
        maxWidth: "60%",
    },
    name: {
        fontSize: "36px",
        marginBottom: "10px",
    },
    highlight: {
        color: "#007acc",
    },
    title: {
        fontSize: "20px",
        marginBottom: "15px",
        color: "#555",
    },
    desc: {
        fontSize: "16px",
        color: "#666",
        marginBottom: "25px",
    },
    button: {
        backgroundColor: "#007acc",
        color: "#fff",
        padding: "10px 20px",
        textDecoration: "none",
        borderRadius: "5px",
    },
    image: {
        //borderRadius: "50%",
        width: "400px",
        height: "400px",
        objectFit: "cover",
        border: "4px solid #007acc",
    },
    Typewriter: {
        fontSize : "32px",
    },
};
