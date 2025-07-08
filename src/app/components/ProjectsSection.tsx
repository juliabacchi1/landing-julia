"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { client } from "../../../lib/sanity";
import { projectsQuery } from "../../../queries/project";

type Project = {
  _id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageAlt?: string;
  link: string;
};

const tagColors: { [key: string]: { bg: string; text: string } } = {
  "Landing Page": { bg: "#FAE2E2", text: "#99211D" },
  Interativo: { bg: "#DCFCE7", text: "#2B6535" },
  Blog: { bg: "#FEF9C3", text: "#854D1D" },
  Conversão: { bg: "#DBEAFD", text: "#1E40AF" },
  Portfólio: { bg: "#FDEDD5", text: "#A24228" },
  Corporativo: { bg: "#F3E8FD", text: "#6C32A8" },
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    client
      .fetch(projectsQuery)
      .then((data: Project[]) => setProjects(data))
      .catch(console.error);
  }, []);

  if (!projects.length) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl text-gray-800 font-bold text-custom mb-4">
            Trabalhos recentes
          </h2>
          <p className="text-lg text-custom opacity-70">
            Cada projeto é único e desenvolvido com atenção aos detalhes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden "
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block "
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt || project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-gray-800 font-bold text-custom mb-2">
                    {project.title}
                  </h3>
                  <p className="text-custom opacity-70 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag) => {
                      const colors = tagColors[tag] || {
                        bg: "#eee",
                        text: "#333",
                      };
                      return (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{
                            backgroundColor: colors.bg,
                            color: colors.text,
                          }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
