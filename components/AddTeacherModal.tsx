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
  const [form, setForm] = useState<Teacher>({
    id: "", // required to satisfy Teacher type
    name: "",
    subject: "",
    email: "",
    phone: "", // required to satisfy Teacher type
  });

  useEffect(() => {
    if (editingTeacher) setForm(editingTeacher);
  }, [editingTeacher]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.subject || !form.email) {
      return alert("Please fill all required fields");
    }

    editingTeacher ? onUpdate(form) : onAdd(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="w-full max-w-md p-6 bg-white rounded-lg">
        <h2 className="mb-4 text-xl font-bold">
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
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
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
