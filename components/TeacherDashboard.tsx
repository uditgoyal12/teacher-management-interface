"use client";

import { useTeachers } from "@/context/TeacherContext";
import AddTeacherModal from "./AddTeacherModal";
import TeacherCard from "./TeacherCard";
import { useState } from "react";
import { Teacher } from "@/types/teacher";

export default function TeacherDashboard() {
  const { teachers, addTeacher, updateTeacher, deleteTeacher } = useTeachers();
  const [showModal, setShowModal] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  return (
    <section className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-indigo-700">Teacher Management</h2>
        <button
          onClick={() => {
            setShowModal(true);
            setEditingTeacher(null);
            setEditIndex(null);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Teacher
        </button>
      </div>

      {teachers.length === 0 ? (
        <p className="text-gray-500">No teachers added.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {teachers.map((teacher, i) => (
            <TeacherCard
              key={i}
              teacher={teacher}
              onEdit={() => {
                setEditIndex(i);
                setEditingTeacher(teacher);
                setShowModal(true);
              }}
              onDelete={() => deleteTeacher(i)}
            />
          ))}
        </div>
      )}

      {showModal && (
        <AddTeacherModal
          onAdd={addTeacher}
          onUpdate={(t) => {
            if (editIndex !== null) updateTeacher(editIndex, t);
            setShowModal(false);
          }}
          editingTeacher={editingTeacher}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}
