import React, { useState, useEffect } from "react";
import "../../App.css";
import axios from "axios";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const Calendar = () => {
  const [sessions, setSessions] = useState([]);
  const [exams, setExams] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  // Fonction asynchrone pour récupérer les données depuis le backend
  const getData = async () => {
    const response = await axios.get("http://localhost:8000/session");// Récupère les sessions
    setSessions(response.data);
    const res = await axios.get("http://localhost:8000/exam");// Récupère les examens
    setExams(res.data);
  };

  console.log("seances:", sessions);

  // Tableau final contenant tous les événements pour le calendrier
  let tableau = [];
   // Boucle sur toutes les sessions pour les formater
  for (let i = 0; i < sessions.length; i++) {
    if (sessions[i].type === 1)
      tableau.push({ title: "seance de code ", date: sessions[i].date });
    else tableau.push({ title: "seance de conduite", date: sessions[i].date });
  }

  // Boucle sur tous les examens pour les formater
  for (let i = 0; i < exams.length; i++) {
    if (exams[i].type === 1)
      tableau.push({ title: "exam de code ", date: exams[i].date });
    else tableau.push({ title: "exam de conduite", date: exams[i].date });
  }

  return (
    <FullCalendar
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin]}
      events={tableau}
    />
  );
};
export default Calendar;
