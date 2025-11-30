"use client";

import { useState } from "react";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { Upload, Plus } from "lucide-react";

export default function AddCoursePage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    price: "",
    videoUrl: "",
    thumbnail: null
  });

  const [modules, setModules] = useState([{ title: "", lessons: "" }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course data:", formData, modules);
    alert("Course added successfully!");
  };

  const addModule = () => {
    setModules([...modules, { title: "", lessons: "" }]);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Add New Course</h1>
        <p className="text-muted-foreground">Fill in the course details below</p>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Course Title */}
          <div>
            <label className="text-sm font-medium mb-2 block">Course Title *</label>
            <Input
              type="text"
              placeholder="e.g., Full Stack Development"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="h-12"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium mb-2 block">Description *</label>
            <Textarea
              placeholder="Course description..."
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          {/* Duration & Price */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Duration *</label>
              <Input
                type="text"
                placeholder="e.g., 6 months"
                required
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="h-12"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Price *</label>
              <Input
                type="text"
                placeholder="e.g., Free or Rs 10000"
                required
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="h-12"
              />
            </div>
          </div>

          {/* Video URL */}
          <div>
            <label className="text-sm font-medium mb-2 block">Video URL</label>
            <Input
              type="url"
              placeholder="https://youtube.com/..."
              value={formData.videoUrl}
              onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
              className="h-12"
            />
          </div>

          {/* Thumbnail Upload */}
          <div>
            <label className="text-sm font-medium mb-2 block">Course Thumbnail</label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setFormData({ ...formData, thumbnail: e.target.files[0] })}
              />
            </div>
          </div>

          {/* Modules */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium">Course Modules</label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addModule}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Module
              </Button>
            </div>
            <div className="space-y-3">
              {modules.map((module, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-3 p-4 border border-border rounded-lg">
                  <Input
                    type="text"
                    placeholder="Module title"
                    value={module.title}
                    onChange={(e) => {
                      const newModules = [...modules];
                      newModules[index].title = e.target.value;
                      setModules(newModules);
                    }}
                  />
                  <Input
                    type="text"
                    placeholder="Number of lessons"
                    value={module.lessons}
                    onChange={(e) => {
                      const newModules = [...modules];
                      newModules[index].lessons = e.target.value;
                      setModules(newModules);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-primary text-white hover:shadow-lg transition-all duration-300 h-14 text-lg"
          >
            Add Course
          </Button>
        </form>
      </Card>
    </div>
  );
}
