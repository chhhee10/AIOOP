
import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { activities, notices, facilities, members } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.activities.list.path, async (req, res) => {
    const data = await storage.getActivities();
    res.json(data);
  });

  app.get(api.notices.list.path, async (req, res) => {
    const data = await storage.getNotices();
    res.json(data);
  });

  app.get(api.facilities.list.path, async (req, res) => {
    const data = await storage.getFacilities();
    res.json(data);
  });

  app.get(api.members.list.path, async (req, res) => {
    const data = await storage.getMembers();
    res.json(data);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const submission = await storage.submitContact(input);
      res.status(201).json(submission);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      throw err;
    }
  });

  // Seed data if empty
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingActivities = await storage.getActivities();
  if (existingActivities.length === 0) {
    await db.insert(activities).values([
      { title: "Pension Assistance", description: "Helping retirees navigate pension paperwork and resolve delays." },
      { title: "Grievance Support", description: "Support for addressing grievances with government departments." },
      { title: "Health Awareness", description: "Regular health check-up camps and awareness programs." },
      { title: "Community Meetings", description: "Monthly gatherings to discuss issues and socialize." },
    ]);
  }

  const existingNotices = await storage.getNotices();
  if (existingNotices.length === 0) {
    await db.insert(notices).values([
      { title: "Annual General Meeting", date: "2024-03-15", content: "The AGM will be held at the Community Hall at 10:00 AM." },
      { title: "Pension Hike Update", date: "2024-02-28", content: "Government announces 4% DA hike effective from January." },
      { title: "Free Eye Checkup Camp", date: "2024-02-20", content: "Organized in association with City Hospital on Sunday." },
    ]);
  }

  const existingFacilities = await storage.getFacilities();
  if (existingFacilities.length === 0) {
    await db.insert(facilities).values([
      { title: "Pension Guidance", description: "Expert advice on pension rules and calculations.", icon: "BookOpen" },
      { title: "Legal Aid", description: "Free legal consultation for pensioners.", icon: "Scale" },
      { title: "Healthcare Support", description: "Information on CGHS and cashless treatment facilities.", icon: "Heart" },
      { title: "Government Schemes", description: "Assistance with availing senior citizen benefits.", icon: "Landmark" },
    ]);
  }

  const existingMembers = await storage.getMembers();
  if (existingMembers.length === 0) {
    await db.insert(members).values([
      { name: "Mr. R.K. Sharma", role: "President", contactInfo: "9876543210" },
      { name: "Mrs. S. Gupta", role: "Secretary", contactInfo: "9876543211" },
      { name: "Mr. A. Singh", role: "Treasurer", contactInfo: "9876543212" },
      { name: "Ms. L. Verma", role: "Executive Member", contactInfo: "" },
    ]);
  }
}
