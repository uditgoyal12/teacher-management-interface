"use client";

import { useState, useEffect } from "react";
import { Teacher } from "@/types/teacher";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface Props {
  editingTeacher: Teacher | null;
  onAdd: (teacher: Teacher) => void;
  onUpdate: (teacher: Teacher) => void;
  onClose: () => void;
}

export default function AddTeacherModal({
  editingTeacher,
  onAdd,
  onUpdate,
  onClose,
}: Props) {
  const [form, setForm] = useState<Teacher>({ name: "", subject: "", email: "" });

  useEffect(() => {
    if (editingTeacher) setForm(editingTeacher);
  }, [editingTeacher]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.subject || !form.email) return alert("Fill all fields");

    editingTeacher ? onUpdate(form) : onAdd(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {editingTeacher ? "Edit Teacher" : "Add Teacher"}
        </h2>

        <div className="space-y-3">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Rohan Verma"
            />
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="e.g. Chemistry"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="e.g. rohan@school.edu"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            {editingTeacher ? "Update" : "Add"}
          </Button>
        </div>
      </div>
    </div>
  );
}
