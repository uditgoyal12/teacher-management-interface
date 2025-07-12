"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Teacher } from "@/types/teacher";

interface TeacherContextType {
  teachers: Teacher[];
  addTeacher: (teacher: Teacher) => void;
  updateTeacher: (index: number, updated: Teacher) => void;
  deleteTeacher: (index: number) => void;
}

const TeacherContext = createContext<TeacherContextType | undefined>(undefined);

export const TeacherProvider = ({ children }: { children: React.ReactNode }) => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("teachers");
    if (stored) setTeachers(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("teachers", JSON.stringify(teachers));
  }, [teachers]);

  const addTeacher = (teacher: Teacher) => setTeachers([...teachers, teacher]);

  const updateTeacher = (index: number, updated: Teacher) => {
    const list = [...teachers];
    list[index] = updated;
    setTeachers(list);
  };

  const deleteTeacher = (index: number) => {
    const list = teachers.filter((_, i) => i !== index);
    setTeachers(list);
  };

  return (
    <TeacherContext.Provider
      value={{ teachers, addTeacher, updateTeacher, deleteTeacher }}
    >
      {children}
    </TeacherContext.Provider>
  );
};

export const useTeachers = () => {
  const context = useContext(TeacherContext);
  if (!context) throw new Error("useTeachers must be used inside TeacherProvider");
  return context;
};
