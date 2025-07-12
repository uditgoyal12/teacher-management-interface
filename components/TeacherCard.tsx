"use client";

import { Teacher } from "@/types/teacher";

interface Props {
  teacher: Teacher;
  onEdit: () => void;
  onDelete: () => void;
}

export default function TeacherCard({ teacher, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-indigo-700">{teacher.name}</h3>
      <p className="text-gray-700 mt-1">📘 {teacher.subject}</p>
      <p className="text-sm text-gray-500">{teacher.email}</p>
      <div className="flex gap-2 mt-3">
        <button
          onClick={onEdit}
          className="px-3 py-1 bg-yellow-400 rounded text-sm text-white"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="px-3 py-1 bg-red-500 rounded text-sm text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
